#!/usr/bin/env node
import cuid from 'cuid'
import clear from 'console-clear'
import yargs from 'yargs'

const argv = yargs
  .usage(`Usage: $0 [times] [options]`)
  .example(`$0`, `prints 1 id`)
  .example(`$0 5`, `prints 5 ids`)
  .example(`$0 5 -s`, `prints 5 short id`)
  .example(`$0 -s 5`, `same as above (5 short id)`)
  .example(`$0 -cst 10`, `clears the terminal & prints 10 short ids`)
  .example(`$0 -cs 10`, `same as above`)
  .example(`$0 10 -cs`, `same as above`)
  .alias(`t`, `times`)
  .alias(`c`, `clear`)
  .alias(`s`, `slug`)
  .describe(`t`, `How many cuid's do you need?`)
  .describe(`c`, `Clear console before output`)
  .describe(`s`, `Cuid().slug`)
  .describe(`h`, `Show this help`)
  .boolean([`c`, `s`])
  .help(`h`)
  .alias(`h`, `help`)
  .alias(`version`, `V`)
  .epilog(`Get more info about cuids https://usecuid.org`)
  .argv

/**
 * check if first optionless argument is a number
 * treat as --times
 */
if (parseInt(argv._[0], 10)) {
  argv.times = argv._[0]
}

if (argv.clear) clear(true)

Array.from(Array(argv.times || 1)).forEach(x => 
  console.log(
    argv.slug
      ? cuid.slug()
      : cuid()
  )
)
