node-ishexchar
==============

Just a tool to check if a char is a valid `(a-f A-F 0-9`) hex char. 

## Usage

	var isHexChar = require('ishexchar');
	if(isHexChar('a')){
		console.log('"a" is a valid hex char');
	}


## Run test suite 

	$ npm test

## Doc generation

It is possible to auto generate some documentation:

	$ npm run-script docs

## Code coverage

Run code coverage by executing:

	$ npm run-script coverage

In order to run the coverage report *You need to install [TJ Holowaychuk's jscoverage](https://github.com/visionmedia/node-jscoverage) before*
