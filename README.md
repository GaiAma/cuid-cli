# CUID CLI  [![npm version](https://badge.fury.io/js/%40gaiama%2Fcuid-cli.svg)]
this is a cli wrapper for Eric Elliot's [CUID script](https://github.com/ericelliott/cuid)

## Install

````
$ yarn global add @gaiama/cuid-cli
or
$ npm -g install @gaiama/cuid-cli
````

## Usage

````
cuid --help
Usage: cuid [times] [options]

Optionen:
  --version, -V  Show version number             [boolean]
  -t, --times    Specify number of ids
  -c, --clear    Clear console before output     [boolean]
  -s, --slug     Cuid().slug                     [boolean]
  -h, --help     Show help                       [boolean]

Beispiele:
  cuid          prints 1 id
  cuid 5        prints 5 ids
  cuid 5 -s     prints 5 short id
  cuid -s 5     same as above (5 short id)
  cuid -cst 10  clears the terminal & prints 10 short ids
  cuid -cs 10   same as above
  cuid 10 -cs   same as above

Get more info about cuids https://usecuid.org
````