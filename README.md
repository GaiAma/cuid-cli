# cuid CLI  
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![npm (scoped)](https://img.shields.io/npm/v/@gaiama/cuid-cli.svg)](npmjs.com/package/@gaiama/cuid-cli)

this is a cli wrapper for Eric Elliot's [cuid script](https://github.com/ericelliott/cuid)

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

Options:
  --version, -V  Show version number             [boolean]
  -t, --times    Specify number of ids
  -c, --clear    Clear console before output     [boolean]
  -s, --slug     cuid().slug                     [boolean]
  -h, --help     Show help                       [boolean]

Examples:
  cuid          prints 1 id
  cuid 5        prints 5 ids
  cuid 5 -s     prints 5 short id
  cuid -s 5     same as above (5 short id)
  cuid -cst 10  clears the terminal & prints 10 short ids
  cuid -cs 10   same as above
  cuid 10 -cs   same as above

Get more info about cuids https://usecuid.org
````

## Related
- [cuid](https://github.com/ericelliott/cuid)

## Contributors
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/79246?v=4" width="100px;"/><br /><sub><b>Stefan Ladwig</b></sub>](https://github.com/sladwig)<br />[📖](https://github.com/Can Rau/cuid-cli/commits?author=sladwig "Documentation") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->