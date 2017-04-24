const mongodb = require("mongodb");
const ObjectID = mongodb.ObjectID;


function dbClient() {
  // Create a database constiable outside of the database connection callback
  // to reuse the connection pool in your app.
  let db;

  // Connect to the database before starting the application server.
  mongodb.MongoClient.connect(process.env.MONGODB_URI, (err, database) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log("dbConnector on");
  });

  return db;
}

module.exports = dbClient;
