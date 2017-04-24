// instantiate dotenv, opening up 'process.env'
require('dotenv').config({path: __dirname + '../.env'});
const newsApiKey = process.env.NEWSAPI_API_KEY;

const requstUrlStrPrefix = 'https://newsapi.org/v1/articles?source=';
const requestUrlStrPostfix = '&sortBy=top&apiKey=' + newsApiKey;

const requestUrlTheWashingtonPost = requstUrlStrPrefix + 'the-washington-post' + requestUrlStrPostfix;
const requestUrlTheNewYorkTimes = requstUrlStrPrefix + 'the-new-york-times' + requestUrlStrPostfix;
const requestUrlTheWallStreetJournal = requstUrlStrPrefix + 'the-wall-street-journal' + requestUrlStrPostfix;
const requestUrlGoogleNews = requstUrlStrPrefix + 'google-news' + requestUrlStrPostfix;
const requestUrlFourFourTwo = requstUrlStrPrefix + 'four-four-two' + requestUrlStrPostfix;

const requestUrls = [
  requestUrlTheWashingtonPost,
  requestUrlTheNewYorkTimes,
  requestUrlTheWallStreetJournal,
  requestUrlGoogleNews,
  requestUrlFourFourTwo
];

module.exports = requestUrls;
