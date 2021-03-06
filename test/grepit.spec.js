'use strict';

var expect = require('expect.js')
  , catchE = require('catch-error')
  , grepit = require('../index');

describe('grepit module', function(){

  describe('when passing pattern and file arguments', function(){
    it('should return an array', function(){
      // arrange
      var pattern = 'abc';
      var file = 'test/test_file.txt';
      // act
      var result = grepit(pattern, file);
      // assert
      expect(result).to.be.an('array');
    });
    it('should return an error if file is not found', function(){
      var pattern = 'abc';
      var file = 'test/not_test_file.txt';
      var result = catchE({func: grepit, args: [pattern, file]});
      expect(result).to.be.an(Error);
    });
    it('should return an error if pattern is not a string or regex', function(){
      var pattern = {};
      var file = 'test/test_file.txt';
      var result = catchE({func: grepit, args: [pattern, file]});
      expect(result).to.be.an(Error);
    });
    it('should return an array if pattern is a regular expression', function(){
      var pattern = /abc/;
      var file = 'test/test_file.txt';
      var result = grepit(pattern, file);
      expect(result).to.be.an('array');
    });
  });

  describe('when passing a string pattern', function(){
    it('should return an array of lines from the text that contain pattern', function(){
      var pattern = 'first';
      var file = 'test/test_file.txt';
      var result = grepit(pattern, file);
      var expected = ['The first sentence of the text.'];
      expect(result).to.eql(expected);
    });
    it('should return an empty array if the pattern is not in the text.', function(){
      var pattern = 'xyz';
      var file = 'test/test_file.txt';
      var result = grepit(pattern, file);
      var expected = [];
      expect(result).to.eql(expected);
    });
  });

  describe('when passing a regex pattern', function(){
    it('should return an array of lines from the text that contain pattern', function(){
      var pattern = /first/;
      var file = 'test/test_file.txt';
      var result = grepit(pattern, file);
      var expected = ['The first sentence of the text.'];
      expect(result).to.eql(expected);
    });
    it('should return an empty array if the pattern is not in the text.', function(){
      var pattern = /xyz/;
      var file = 'test/test_file.txt';
      var result = grepit(pattern, file);
      var expected = [];
      expect(result).to.eql(expected);
    });
    it('should return an array of lines from the text that contain pattern', function(){
      var pattern = /sentence/;
      var file = 'test/test_file.txt';
      var result = grepit(pattern, file);
      var expected = [
        'The first sentence of the text.',
        'Now the second sentence.',
        'And then comes the fourth sentence.'
      ];
      expect(result).to.eql(expected);
    });
  });

});
