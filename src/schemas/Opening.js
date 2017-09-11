const mongoose = require('mongoose');

let model = null;
const schema = new mongoose.Schema({
  name: String,
  description: String,
  created: Date,
  modified: Date,
  pgn: String,
  comments: [
    {
      move: Number,
      comment: String,
      variant: Number,
    },
  ],
});

export default function get() {
  if (!model) model = mongoose.model('Cronjob', schema);
  return model;
}
