#!/usr/bin/env node
'use strict'

const chalk = require('chalk')
const fileRoulette = require('./App')
const { textSync } = require('figlet')
const opts = require('./opt')
const options = require('minimist')(process.argv.slice(2))

try {
  console.log(chalk.bold.greenBright(textSync('FILE-ROULETTE')))
  console.log((fileRoulette(opts(options).path) ? chalk.redBright.bold('Try Next Time') : chalk.greenBright.bold('You got lucky this time')))
} catch (e) {
  console.log(chalk.redBright.bold('Oops : ' + e.message))
  process.exit(1) // no trq (sure)
}
