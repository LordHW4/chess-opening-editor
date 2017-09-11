'use strict';

var _Database = require('./Database');

var _Database2 = _interopRequireDefault(_Database);

var _logger = require('./logger');

var Logger = _interopRequireWildcard(_logger);

var _Server = require('./Server');

var _Server2 = _interopRequireDefault(_Server);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function run() {
  try {
    await (0, _Database2.default)();
    Logger.info('Database is running');
    (0, _Server2.default)(3000);
    Logger.info('Server is running at port 3000');
  } catch (err) {
    Logger.error('Error caused app to stop running: ' + err.toString());
    throw new Error(err);
  }
}

run();