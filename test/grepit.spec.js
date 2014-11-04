'use strict';
var expect = require('expect.js')
  , grepit = require('../index');

describe('grepit module', function(){

  describe('when passing pattern and file arguments', function(){
    it('should return an array', function(){
      // arrange
      var pattern = 'abc';
      var file = './test_file.txt';
      // act
      var result = grepit(pattern, file);
      // assert
      expect(result).to.be.an('array');
    });
  });

});
