# outfoxis

This is the source for the outfoxis.com HTML placeholder website.

## zeit.outfoxis.com

* now.json sets static build and /public as distDir
* DNS: https://zeit.co/docs/v1/getting-started/assign-a-domain-name - set up subdomain CNAME and \_now TXT

## netlify.outfoxis.com

* configure /public as static dir
* DNS: set up subdomain CNAME
* netlify.toml overrides site settings
* functions in /functions, one per file
* package.json controls node build

## outfoxis.glitch.me

* add basic package.json with express, add basic server.js with / route
* DNS: set up subdomain CNAME
* Note: cannot set up custom domain on glitch until I help 2 users and get thanked
