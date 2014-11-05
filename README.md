#grepit
[![Build Status](https://travis-ci.org/JonathanPrince/grepit.svg)](https://travis-ci.org/JonathanPrince/grepit)

[![NPM](https://nodei.co/npm/grepit.png?downloads=true&stars=true)](https://nodei.co/npm/grepit/)

##Description

Grep Module for Node

###Syntax

`grep(pattern, file)`

####Parameters

**pattern**

RegExp or String to be searched for. (aka. the 'needle')

**file**

String - path and filename of file to be searched. (aka. the 'haystack')

####Output

Returns an array. The elements of the array will be the lines in which the pattern appears.

###Usage

Installation
```
$ npm install grepit
```

test_file.txt:
```txt
The first sentence of the text.
Now the second sentence.
Why not a third, a third that has a comma in it.
And then comes the fourth sentence.
```

Example
```js

var grepit = require('grepit');

var result = grepit(/first/, 'test_file.txt');

// result = [ 'The first sentence of the text.' ]

```

