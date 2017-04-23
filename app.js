const schedule = require('node-schedule');
const Summarizer = require('./utils/summarizer');

const newsApiKey = process.env.NEWSAPI_API_KEY;

function scheduleJob(jobTitle, rule) {
  console.log(`>>> ${jobTitle} begun`);
  schedule.scheduleJob(rule, () => {
    console.log('newsApiKey!', newsApiKey);
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
const rule = '* * * * *';

const jobTitle = 'get the news';

(() => {
  scheduleJob({ jobTitle, rule });
})();
