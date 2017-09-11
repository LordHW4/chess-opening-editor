'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = start;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _Opening = require('./schemas/Opening');

var _Opening2 = _interopRequireDefault(_Opening);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: true
}));

function start(port) {
  if (!port) throw new Error('Server(): No port defined.');
  app.listen(port);
  return app;
}

app.post('/opening', async function (req, res) {
  var Opening = (0, _Opening2.default)();
  var opening = new Opening(req.body);
  try {
    var savedOpening = await Opening.findOneAndUpdate({ _id: opening.id }, opening, { upsert: true, new: true });
    res.send(savedOpening);
  } catch (err) {
    res.status(500).send('An error occured: ' + err.toString());
    throw new Error(err);
  }
});

app.get('/openings', async function (req, res) {
  try {
    var Opening = (0, _Opening2.default)();
    var openings = await Opening.find();
    res.send(openings);
  } catch (err) {
    res.status(500).send('An error occured: ' + err.toString());
    throw new Error(err);
  }
});

app.delete('/opening', async function (req, res) {
  var Opening = (0, _Opening2.default)();
  try {
    await Opening.remove({ _id: req.query.id });
    res.send('Success');
  } catch (err) {
    res.status(500).send('An error occured: ' + err.toString());
    throw new Error(err);
  }
});

app.get('/opening', async function (req, res) {
  var Opening = (0, _Opening2.default)();
  try {
    Opening.findOne({ _id: req.query.id }, function (err, obj) {
      console.dir(obj);
      res.send(obj);
    });
  } catch (err) {
    res.status(500).send('An error occured: ' + err.toString());
    throw new Error(err);
  }
});