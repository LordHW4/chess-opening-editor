/* eslint-disable */
const chalk = require('chalk');

export function error(str) {
  console.log(chalk.red(str));
}

export function warning(str) {
  console.log(chalk.yellow(str));
}

export function info(str) {
  console.log(chalk.blue(str));
}

export function success(str) {
  console.log(chalk.green(str));
}
