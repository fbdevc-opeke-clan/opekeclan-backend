"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;
exports.callMyFunction = callMyFunction;

function sum(a, b) {
  return a + b;
}

function callMyFunction(callback) {
  callback();
}

callMyFunction(function () {
  console.log('Hello World');
});