var fs     = require('fs')
  , assert = require('assert');

module.exports = function(pattern, file) {

  assert.ok(fs.existsSync(file), 'File not Found');

  return [];

};
