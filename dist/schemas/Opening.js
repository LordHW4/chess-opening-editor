'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get;
var mongoose = require('mongoose');

var model = null;
var schema = new mongoose.Schema({
  name: String,
  description: String,
  created: Date,
  modified: Date,
  pgn: String,
  comments: [{
    move: Number,
    comment: String,
    variant: Number
  }]
});

function get() {
  if (!model) model = mongoose.model('Cronjob', schema);
  return model;
}