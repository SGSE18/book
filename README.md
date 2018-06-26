

[![Build Status](https://travis-ci.org/SGSE18/book.svg?branch=master)](https://travis-ci.org/SGSE18/book)

#### Please use lower-case filenames for images only!

Fork this repo and clone your fork

You may need to clear your browser cache if changes are still not visible, after TravisCI successfully built your commit.
(maybe a "feature" of the serviceworker)

#### Fix tedious cache-clearing by manually unregistering the serviceworker.

![sw_unregister](./img/sw-unregister.png "SW Unregister")


!! VuePress requires Node.js >= 8 !!

``` bash 

# move into book folder
cd book

# install
npm install

# start writing (hot reloading enabled)
npm run dev

# build static site
npm run build

```

#### Static build:
Output of /dist still needs to be served by a node webserver ¯\_(ツ)_/¯
