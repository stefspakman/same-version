# Version Check [![NPM version][npm-image]][npm-url]

Check if versions of two files match

## Install

```
$ npm install --save same-version
```

## Usage
The function requires two filepaths of the versions you would like to check. 

Example:

```js
var sameVersion = require('same-version');
sameVersion('./config.local.json', './config.json');
```

config.json:
```json
{
  "version": "1.0.0",
}
```


## Changelog
 **v0.1.0 - 2018-07-02** 
* Initial release


[npm-url]: https://www.npmjs.com/package/same-version
[npm-image]: https://img.shields.io/npm/v/same-version.svg