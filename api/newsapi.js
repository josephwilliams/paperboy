const fetch = require('node-fetch');
const mongodb = require("mongodb");
const ObjectID = mongodb.ObjectID;
// const dbClient = require('../utils/dbClient');

const SNIPPETS_COLLECTION = "snippets";

// Create a database constiable outside of the database connection callback
// to reuse the connection pool in your app.
let db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, (err, database) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
});

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
    const response = await fetch('requestUrlStr');
    const json = await response.json();
    console.log('>>> db', db);
    const articles = json.articles;
    console.log('>>>> articles', articles.length);
    db.collection(SNIPPETS_COLLECTION).insertMany(articles);
    console.log('>>>>> good post');
  }
  catch (error) {
    console.log('>> getNewsFromNewsOrgApi error', error);
  }
}

module.exports = getNewsFromNewsOrgApi;
