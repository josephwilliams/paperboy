const fetch = require('node-fetch');
const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;
// const dbClient = require('../utils/dbClient');
const async = require('async');
const getNewsFromNewsOrgApi = require('./getNewsFromNewsOrgApi');
const requestUrls = require('./requestUrls');

const SNIPPETS_COLLECTION = "snippets";

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

// sample api response:
// { status: ok, source: ..., sortBy: ..., articles:
// urlToImage, author, title, description, publishedAt

function getNewsByNewsApiAsyncCalls() {
  async.each(requestUrls, function(requestUrl) {
    getNewsFromNewsOrgApi(db, requestUrl);
  }, function(err) {
      if (err) {
        console.log('>> error: ', requestUrl);
      } else {
        console.log('>> all good!!!');
      }
  });
}

module.exports = getNewsViaNewsApiAsyncCalls;
