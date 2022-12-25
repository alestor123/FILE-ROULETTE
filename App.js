'use strict'

const { rmSync, readdirSync, existsSync, lstatSync } = require('fs')
const { join, resolve } = require('path')

module.exports = path => {
  if (!(path && typeof path === 'string' && path.length > 0 && existsSync(path))) throw new Error('Please enter a vaild path')
  if (Math.floor(Math.random() * (6) + 0) === 1) {
    if (lstatSync(resolve(path)).isFile()) rmSync(resolve(join(path)), { recursive: true, force: true })
    else {
      const files = readdirSync(path)
      rmSync(resolve(join(path, files[Math.floor(Math.random() * files.length)])), { recursive: true, force: true })
    }
    return true
  }
}
