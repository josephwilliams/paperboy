const SummaryTool = require('node-summary');

function summarize(title, content) {
  SummaryTool.summarize(title, content, function(err, summary) {
  	if (err) {
      console.log("Something went wrong man!");
    }

  	console.log(summary);

  	console.log("Original Length " + (title.length + content.length));
  	console.log("Summary Length " + summary.length);
  	console.log("Summary Ratio: " + (100 - (100 * (summary.length / (title.length + content.length)))));

    return {
      title,
      summary,
      summaryLength: summary.length,
      titleLength: title.length,
    };
  });
}

module.exports = summarize;
