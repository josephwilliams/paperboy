// instantiate dotenv, opening up 'process.env'
require('dotenv').config({path: __dirname + '../.env'});
// TODO use process.env.NEWSAPI_API_KEY
const newsApiKey = '1a6703eeb05a4cf78fa9968bbabd44d4';

const requstUrlStrPrefix = 'https://newsapi.org/v1/articles?source=';
const requestUrlStrPostfix = '&sortBy=top&apiKey=' + newsApiKey;

const sources = [
  'the-washington-post',
  'the-new-york-times',
  'the-wall-street-journal',
  'google-news',
  'four-four-two',
];

function createRequestUrls(source) {
  return requstUrlStrPrefix + source + requestUrlStrPostfix;
}

const requestUrls = createRequestUrls(sources);

module.exports = requestUrls;
