const fetch = require('node-fetch');

// instantiate dotenv, opening up 'process.env'
require('dotenv').config({path: __dirname + '/.env'});
const newsApiKey = process.env.NEWSAPI_API_KEY;

const requestUrlSourceStr = 'source=' + 'the-next-web';
const requestUrlSortByStr = 'sortBy=' + 'latest';
const requestUrlNewsApiOrgApiKey = '&apiKey=' + newsApiKey;
const requestUrlStr = (
  'https://newsapi.org/v1/articles?' +
  requestUrlSourceStr +
  requestUrlSortByStr +
  requestUrlNewsApiOrgApiKey
);

async function getNewsFromNewsOrgApi() {
  console.log('>>> news api key: ', newsApiKey);
  try {
    const response = await fetch('');
    const json = await response.json();
    console.log('>>> response', json);
  }
  catch (error) {
    console.log('>> getNewsFromNewsOrgApi error', error);
  }
}

module.exports = getNewsFromNewsOrgApi;
