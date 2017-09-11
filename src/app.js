import Database from './Database';
import * as Logger from './logger';
import startServer from './Server';

async function run() {
  try {
    await Database();
    Logger.info('Database is running');
    startServer(3000);
    Logger.info('Server is running at port 3000');
  } catch (err) {
    Logger.error(`Error caused app to stop running: ${err.toString()}`);
    throw new Error(err);
  }
}

run();
