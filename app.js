import schedule from 'node-schedule';
import Summarizer from 'summarizer';

const newsApiKey = process.env.NEWSAPI_API_KEY;

const Scheduler = {
  const scheduleJob = () => {
    // This rule is standard cron syntax for once per minute.
    // See http://stackoverflow.com/a/5398044/1252653
    const rule = '* * * * *';

    // Kick off the job
    const job = schedule.scheduleJob(rule, () => {
      console.log('newsApiKey!', newsApiKey);
    });
  };

  const init = () => {
    scheduleJob();
  };
};

(() => {
  Scheduler.init();
})();
