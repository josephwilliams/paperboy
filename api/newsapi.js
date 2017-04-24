const fetch = require('node-fetch');
const dbClient = require('../utils/dbClient');

const db = dbClient();

// instantiate dotenv, opening up 'process.env'
require('dotenv').config({path: __dirname + '/.env'});
const newsApiKey = process.env.NEWSAPI_API_KEY;

const requestUrlSourceStr = 'source=' + 'the-washington-post'; // WaPo
const requestUrlSortByStr = '&sortBy=' + 'top'; // or 'latest'
const requestUrlNewsApiOrgApiKey = '&apiKey=' + '1a6703eeb05a4cf78fa9968bbabd44d4';
const requestUrlStr = (
  'https://newsapi.org/v1/articles?' +
  requestUrlSourceStr +
  requestUrlSortByStr +
  requestUrlNewsApiOrgApiKey
);

async function getNewsFromNewsOrgApi() {
  console.log('>>> news api key: ', newsApiKey);
  try {
    const response = await fetch(requestUrlStr);
    const json = await response.json();
    console.log('>>> response', json);
  }
  catch (error) {
    console.log('>> getNewsFromNewsOrgApi error', error);
  }
}

module.exports = getNewsFromNewsOrgApi;


// sample WaPo api response:
// { status: ok, source: ..., sortBy: ..., articles:
// 10 objects in an array
// urlToImage, author, title, description, publishedAt
