const tap = require('tap')
const fileRoulette = require('./App')
tap.test('Error test', async ({ throws }) => {
  throws(() => fileRoulette(), { message: 'Please enter a vaild path' })
  throws(() => fileRoulette(2323), { message: 'Please enter a vaild path' })
  throws(() => fileRoulette(''), { message: 'Please enter a vaild path' })
  throws(() => fileRoulette('./nonexistingpath'), { message: 'Please enter a vaild path' })
})
