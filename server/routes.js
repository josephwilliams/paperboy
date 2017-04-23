// // API ROUTES
//
// // Generic error handler used by all endpoints.
// function handleError(res, reason, message, code) {
//   console.log("ERROR: " + reason);
//   res.status(code || 500).json({"error": message});
// }
//
// app.get("/api/snippets", function(req, res) {
//   db.collection(SNIPPETS_COLLECTION).find({}).toArray(function(err, snippets) {
//     if (err) {
//       handleError(res, err.message, "Failed to get snippets.");
//     } else {
//       res.status(200).json(snippets);
//     }
//   });
// });
//
// app.get("/api/snippets/:id", function(req, res) {
//   db.collection(SNIPPETS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to get contact");
//     } else {
//       res.status(200).json(doc);
//     }
//   });
// });
