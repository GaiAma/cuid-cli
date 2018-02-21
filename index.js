#!/usr/bin/env node
const cuid = require('cuid')
const clear = require('console-clear')
const argv = require('minimist')(process.argv.slice(2), {
  alias: {
    times: 't',
    clear: 'c'
  }
})

if (argv.clear) clear(true)

Array.from(Array(argv.times || 1)).forEach(x => 
  console.log(cuid())
)
