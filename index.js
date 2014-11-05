'use strict';

var fs     = require('fs')
  , assert = require('assert');

module.exports = function(pattern, file) {

  assert.ok(typeof pattern === 'string' || pattern instanceof RegExp,
            'First argument should be a string or regular expression.');
  assert.ok(fs.existsSync(file), 'File not Found');

  var results = [];

  var text = fs.readFileSync(file, 'utf8');

  var lines = text.split('\n');

  lines.forEach(function(line){

    if (line.search(pattern) !== -1){
      results.push(line);
    }

  });

  return results;

};
