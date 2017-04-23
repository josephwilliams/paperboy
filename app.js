import Scheduler from 'node-schedule';

const App = {
  const scheduleJob = () => {
    // This rule is standard cron syntax for once per minute.
    // See http://stackoverflow.com/a/5398044/1252653
    rule = '* * * * *'

    // Kick off the job
    const job = Scheduler.scheduleJob(rule, () => {
      console.log('ping!');
    });
  };

  const init = () => {
    scheduleJob();
  };
};

(() => {
  App.init();
})();
