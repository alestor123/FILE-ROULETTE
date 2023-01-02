'use strict'
const pck = require('./package.json')
const { readFileSync, existsSync } = require('fs')
const { resolve, join } = require('path')
module.exports = options => {
  const opto = [{ arg: ['v', 'version'], out: pck.version, exit: 0 }, { arg: ['h', 'help'], out: readFileSync(resolve(join(__dirname, './assets/man/help.man')), 'utf8'), exit: 0 }, { arg: ['i', 'issue'], out: `\n      Issues at ${pck.bugs.url} \n    `, exit: 0 }, { arg: ['d', 'docs'], out: `\n      Docs at ${pck.homepage} \n    `, exit: 0 }]
  opto.forEach(aro => {
    if (options[aro.arg[0]] || options[aro.arg[1]]) {
      console.log(aro.out)
      process.exit(aro.exit)
    }
  })
  if (existsSync(options.p || options.path)) {
    return {
      path: resolve(options.p || options.path)
    }
  } else throw new Error('Please enter valid path')
}
