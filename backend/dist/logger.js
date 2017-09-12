'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = error;
exports.warning = warning;
exports.info = info;
exports.success = success;
/* eslint-disable */
var chalk = require('chalk');

function error(str) {
  console.log(chalk.red(str));
}

function warning(str) {
  console.log(chalk.yellow(str));
}

function info(str) {
  console.log(chalk.blue(str));
}

function success(str) {
  console.log(chalk.green(str));
}