// Reference the node-schedule npm package.
var schedule = require('node-schedule');

var APP = {
  scheduleJob: function() {
    // This rule is standard cron syntax for once per minute.
    // See http://stackoverflow.com/a/5398044/1252653
    rule = '* * * * *'

    // Kick off the job
    var job = schedule.scheduleJob(rule, function() {
      console.log('ping!')
    });
  },

  init: function() {
    APP.scheduleJob();
  }
};

(function(){
  APP.init();
})();
