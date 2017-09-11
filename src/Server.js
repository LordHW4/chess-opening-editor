import express from 'express';
import bodyParser from 'body-parser';
import OpeningModelGet from './schemas/Opening';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

export default function start(port) {
  if (!port) throw new Error('Server(): No port defined.');
  app.listen(port);
  return app;
}

app.post('/opening', async (req, res) => {
  const Opening = OpeningModelGet();
  const opening = new Opening(req.body);
  try {
    const savedOpening = await Opening.findOneAndUpdate(
      { _id: opening.id },
      opening,
      { upsert: true, new: true },
    );
    res.send(savedOpening);
  } catch (err) {
    res.status(500).send(`An error occured: ${err.toString()}`);
    throw new Error(err);
  }
});

app.get('/openings', async (req, res) => {
  try {
    const Opening = OpeningModelGet();
    const openings = await Opening.find();
    res.send(openings);
  } catch (err) {
    res.status(500).send(`An error occured: ${err.toString()}`);
    throw new Error(err);
  }
});

app.delete('/opening', async (req, res) => {
  const Opening = OpeningModelGet();
  try {
    await Opening.remove({ _id: req.query.id });
    res.send('Success');
  } catch (err) {
    res.status(500).send(`An error occured: ${err.toString()}`);
    throw new Error(err);
  }
});

app.get('/opening', async (req, res) => {
  const Opening = OpeningModelGet();
  try {
    Opening.findOne({ _id: req.query.id }, (err, obj) => {
      console.dir(obj);
      res.send(obj);
    });
  } catch (err) {
    res.status(500).send(`An error occured: ${err.toString()}`);
    throw new Error(err);
  }
});
