const schedule = require('node-schedule');
const getNewsByNewsApiAsyncCalls = require('./api/getNewsByNewsApiAsyncCalls');
const Summarizer = require('./utils/summarizer');


function scheduleJob(rule) {
  schedule.scheduleJob(rule, () => {
    getNewsByNewsApiAsyncCalls();
  });
}

// This rule is standard cron syntax for once per minute.
// See http://stackoverflow.com/a/5398044/1252653
// # .---------------- minute (0 - 59)
// # |  .------------- hour (0 - 23)
// # |  |  .---------- day of month (1 - 31)
// # |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
// # |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
// # |  |  |  |  |
// # *  *  *  *  * user-name  command to be executed
// '* * * * *' is every minute
// '5 * * * *' is every 5 minutes
const rule = '* * * * *';

(() => {
  scheduleJob(rule);
})();
