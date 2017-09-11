const mongoose = require('mongoose');

let dbPromise = null;
const create = async function create() {
  mongoose.connect('mongodb://localhost:27017/chess');
  const db = mongoose.connection;
  return new Promise((res, rej) => {
    db.on('error', err => rej(err));
    db.once('open', () => res());
  });
};

export default function get() {
  if (!dbPromise) dbPromise = create();
  return dbPromise;
}
