#!/usr/bin/env node
"use strict";

var _cuid = _interopRequireDefault(require("cuid"));

var _consoleClear = _interopRequireDefault(require("console-clear"));

var _yargs = _interopRequireDefault(require("yargs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = _yargs.default.usage("Usage: $0 [times] [options]").example("$0", "prints 1 id").example("$0 5", "prints 5 ids").example("$0 5 -s", "prints 5 short id").example("$0 -s 5", "same as above (5 short id)").example("$0 -cst 10", "clears the terminal & prints 10 short ids").example("$0 -cs 10", "same as above").example("$0 10 -cs", "same as above").alias("t", "times").alias("c", "clear").alias("s", "slug").describe("t", "Specify number of ids").describe("c", "Clear console before output").describe("s", "Cuid().slug").describe("h", "Show this help").boolean(["c", "s"]).help("h").alias("h", "help").alias("version", "V").epilog("Get more info about cuids https://usecuid.org").argv;
/**
 * check if first optionless argument is a number
 * treat as --times
 */


if (parseInt(argv._[0], 10)) {
  argv.times = argv._[0];
}

if (argv.clear) (0, _consoleClear.default)(true);
Array.from(Array(argv.times || 1)).forEach(function (x) {
  return console.log(argv.slug ? _cuid.default.slug() : (0, _cuid.default)());
});