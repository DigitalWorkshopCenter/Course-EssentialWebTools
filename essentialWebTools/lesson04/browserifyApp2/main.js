'use strict';
require('bootstrap/dist/js/bootstrap');
require('./node_modules/bootstrap/dist/css/bootstrap.css');
var R = require('ramda');

var square = function square(x) {
  return x * x;
};
var squares = R.chain(square, [1, 2, 3, 4, 5]);

document.getElementById('response').innerHTML = squares;
