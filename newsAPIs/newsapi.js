const fetch = require('node-fetch');
const dbClient = require('../utils/dbClient');

const SNIPPETS_COLLECTION = "snippets";

// get database object for later use
const db = dbClient();

// instantiate dotenv, opening up 'process.env'
require('dotenv').config({path: __dirname + '/.env'});
const newsApiKey = process.env.NEWSAPI_API_KEY;

// Washington Post News API query string
const requestUrlSourceStr = 'source=' + 'the-washington-post'; // WaPo
const requestUrlSortByStr = '&sortBy=' + 'top'; // or 'latest'
const requestUrlNewsApiOrgApiKey = '&apiKey=' + '1a6703eeb05a4cf78fa9968bbabd44d4';
const requestUrlStr = (
  'https://newsapi.org/v1/articles?' +
  requestUrlSourceStr +
  requestUrlSortByStr +
  requestUrlNewsApiOrgApiKey
);

// sample WaPo api response:
// { status: ok, source: ..., sortBy: ..., articles:
// 10 objects in an array
// urlToImage, author, title, description, publishedAt

async function getNewsFromNewsOrgApi() {
  try {
    console.log('>> getNewsFromNewsOrgApi called');
    const response = await fetch(requestUrlStr);
    const json = await response.json();
    console.log('>>> db', db);
    console.log('>>> response', json);
    const articles = json.articles;
    db.collection(SNIPPETS_COLLECTION).insertMany(articles);
  }
  catch (error) {
    console.log('>> getNewsFromNewsOrgApi error', error);
  }
}

module.exports = getNewsFromNewsOrgApi;
