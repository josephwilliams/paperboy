const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const ObjectID = mongodb.ObjectID;

const SNIPPETS_COLLECTION = "snippets";

const app = express();
app.use(bodyParser.json());

// Create a database constiable outside of the database connection callback
// to reuse the connection pool in your app.
const db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  const server = app.listen(process.env.PORT || 8080, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
  });
});

// API ROUTES

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("/api/snippets", function(req, res) {
  db.collection(SNIPPETS_COLLECTION).find({}).toArray(function(err, snippets) {
    if (err) {
      handleError(res, err.message, "Failed to get snippets.");
    } else {
      res.status(200).json(snippets);
    }
  });
});




















//
