# node-test-app

Test application used as part of my SNHU IT697 class for CD testing. 

[![Build Status](https://travis-ci.org/jlfabi/node-test-app.svg?branch=master)](https://travis-ci.org/jlfabi/node-test-app)

## Prerequisites
- Node: 4.4.x (Current LTS - Install from https://nodejs.org/en/) 
- NPM: 2.15.x (Default installed w/ Node 4.4.x)
- IDE support: 
  - Visual Studio Code (Install from https://code.visualstudio.com/)
    - Suggested Editor Plugins (install from VS code command window: Ctrl-Shift-P). 
      *If you encounter SSL issues, please update your settings.json (File > Preferences > User Settings)*
      file with "http.proxyStrictSSL": false*
      - EditorConfig (ext install EditorConfig)
      - JavaScript Standard Format (ext install vscode-standard-format)
      - standardjs (ext install vscode-standardjs)
    - Typings for intellisense (npm install -g typings)
      - node (typings install dt~node --global)
      - express (typings install dt~express --global)
  - WebStorm:
    - Follow [instructions for standardjs](https://github.com/feross/standard/blob/master/docs/webstorm.md)


## How to use

#### Install project dependencies
```sh
$ npm install
```

#### Start Web Server
```sh
$ npm start
```

#### Run Unit Tests
```sh
$ npm run test:js
```

#### Run Code Coverage
```sh
$ npm run cover
```
#### Start Web Server with Nodemon
```sh
$ npm run watch
```
#### Debug With Visual Studio Code
```sh
$ node --debug-brk ./app/server.js
```
