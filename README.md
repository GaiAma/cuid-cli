# CUID CLI
this is a cli wrapper for Eric Elliot's [CUID script](https://github.com/ericelliott/cuid)

````
cuid --help
Usage: cuid [times] [options]

Optionen:
  --version, -V  Version anzeigen                                      [boolean]
  -t, --times    How many cuid's do you need?
  -c, --clear    Clear console before output                           [boolean]
  -s, --slug     Cuid().slug                                           [boolean]
  -h, --help     Hilfe anzeigen                                        [boolean]

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