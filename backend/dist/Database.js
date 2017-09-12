'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get;
var mongoose = require('mongoose');

var dbPromise = null;
var create = async function create() {
  mongoose.connect('mongodb://localhost:27017/chess');
  var db = mongoose.connection;
  return new Promise(function (res, rej) {
    db.on('error', function (err) {
      return rej(err);
    });
    db.once('open', function () {
      return res();
    });
  });
};

function get() {
  if (!dbPromise) dbPromise = create();
  return dbPromise;
}