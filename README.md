# cuid CLI  
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
[![npm (scoped)](https://img.shields.io/npm/v/cuid-cli.svg)](https://www.npmjs.com/package/cuid-cli)

This is a cli wrapper for Eric Elliott's [cuid script](https://github.com/ericelliott/cuid)

## Install

```
npx cuid-cli
npx cuid-cli 5
```
or
```
yarn global add cuid-cli
```
or
```
npm -g install cuid-cli
```

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

## Acknowledgements
Huge thanks to [Johannes Schickling](https://twitter.com/schickling) for giving me access to this package name so we can merge forces and give you more control on the command line.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.GaiAma.org"><img src="https://avatars0.githubusercontent.com/u/5196971?v=4" width="100px;" alt="Can"/><br /><sub><b>Can</b></sub></a><br /><a href="#question-CanRau" title="Answering Questions">💬</a> <a href="https://github.com/GaiAma/cuid-cli/issues?q=author%3ACanRau" title="Bug reports">🐛</a> <a href="https://github.com/GaiAma/cuid-cli/commits?author=CanRau" title="Code">💻</a> <a href="https://github.com/GaiAma/cuid-cli/commits?author=CanRau" title="Documentation">📖</a> <a href="#review-CanRau" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/sladwig"><img src="https://avatars3.githubusercontent.com/u/79246?v=4" width="100px;" alt="Stefan Ladwig"/><br /><sub><b>Stefan Ladwig</b></sub></a><br /><a href="https://github.com/GaiAma/cuid-cli/commits?author=sladwig" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/schickling"><img src="https://avatars2.githubusercontent.com/u/1567498?v=4" width="100px;" alt="Johannes Schickling"/><br /><sub><b>Johannes Schickling</b></sub></a><br /><a href="#infra-schickling" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!

