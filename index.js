import schedule from 'node-schedule';

const SchedulerApp = {
  scheduleJob: function() {
    // http://stackoverflow.com/a/5398044/1252653
    // # .---------------- minute (0 - 59)
    // # |  .------------- hour (0 - 23)
    // # |  |  .---------- day of month (1 - 31)
    // # |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
    // # |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
    // # |  |  |  |  |
    // # *  *  *  *  * user-name  command to be executed
    // # '* * * * *' is once per minute
    const rule = '* * * * *';

    // Start the job
    const job = schedule.scheduleJob(rule, () => {
      console.log('ping!');
    });
  },

  init: function() {
    SchedulerApp.scheduleJob();
  }
};

(function(){
  SchedulerApp.init();
})();
