var fs     = require('fs')
  , assert = require('assert');

module.exports = function(pattern, file) {

  assert.equal(typeof pattern, 'string', 'First argument should be a string.');
  assert.ok(fs.existsSync(file), 'File not Found');

  return [];

};
