var
  fs = require('fs'),
  log = require('fancy-log');
  chalk= require('chalk');

function defaultMode(defaultConfig, projectConfig) {
  var config = openFile(defaultConfig, function (err, result) {
    if (!err)
      return ('result', result)
  });

  var localconfig = openFile(projectConfig, function (err, result) {
    if (!err)
      return ('result', result)
  });

  if (!config || !localconfig) {
    log(chalk.red('Cannot open file'));
    process.exit(1);
  }

  if (!checkVersion(config, localconfig)){
    log(chalk.red('The versions of your configuration files do not match, please update your local config file'));
    process.exit(1);
  }
  return
}

function checkVersion(config, local) {
  if (!config['version'] || !local['version']){
    return 'No version is provided'
  }
  return config.version === local.version
}


function openFile(object, done){
  if (typeof object === 'string') {
    if (fs.existsSync(object)) {
      var rawdata = fs.readFileSync(object);
      return done (null, JSON.parse(rawdata));
    }  else {
      return done (Error ('Cannot open file'))
    }
  } else {
    return done (null, object)
  }
}


module.exports = defaultMode;
module.exports.generate = defaultMode;
