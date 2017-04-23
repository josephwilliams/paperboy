const fetch = require('node-fetch');

// instantiate dotenv, opening up 'process.env'
require('dotenv').config();
const newsApiKey = process.env.NEWSAPI_API_KEY;

const requestUrlSourceStr = 'source=' + 'the-next-web';
const requestUrlSortByStr = 'sortBy=' + 'latest';
const requestUrlNewsApiOrgApiKey = '&apiKey=' + '1a6703eeb05a4cf78fa9968bbabd44d4';
const requestUrlStr = (
  'https://newsapi.org/v1/articles?' +
  requestUrlSourceStr +
  requestUrlSortByStr +
  requestUrlNewsApiOrgApiKey
);

// fetch example usage
// fetch(requestUrlStr)
// 	.then(res => res.text())
// 	.then(body => console.log(body));

async function getNewsFromNewsOrgApi() {
  // console.log('>>> news api key: ', newsApiKey);
  try {
    const response = await fetch(requestUrlStr);
    const json = await response.json();
  }
  catch (error) {
    console.log('>> getNewsFromNewsOrgApi error', error);
  }
}

module.exports = getNewsFromNewsOrgApi;
