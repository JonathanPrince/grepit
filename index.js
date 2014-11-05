var fs     = require('fs')
  , assert = require('assert');

module.exports = function(pattern, file) {

  assert.ok(typeof pattern === 'string' || pattern instanceof RegExp,
            'First argument should be a string or regular expression.');
  assert.ok(fs.existsSync(file), 'File not Found');

  var results = [];

  return results;

};
