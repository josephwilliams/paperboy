// const mongoose = require('mongoose');
//
// const Schema = mongoose.Schema;
//
// mongoose.connect('mongodb://localhost/myappdatabase');
//
// const snippetSchema = new Schema({
//   title: String { required: true },
//   article: String { required: true },
//   link: String,
//   author: String,
//   source: String { required: true },
//   created_at: Date,
//   id: ObjectId,
// });
//
// // on every save, add the date
// snippetSchema.pre('save', function(next) {
//   // get the current date
//   var currentDate = new Date();
//
//   // if created_at doesn't exist, add to that field
//   if (!this.created_at) {
//     this.created_at = currentDate;
//   }
//
//   next();
// });
//
// const Snippet = mongoose.model('Snippet', snippetSchema);
//
// module.exports = Snippet;
