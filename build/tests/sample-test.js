"use strict";

var _chai = require("chai");

var _sinon = require("sinon");

var _sampleTest = require("../sample-test");

describe('sum function', function () {
  it('sums up two integers', function () {
    (0, _chai.expect)((0, _sampleTest.sum)(1, 2)).to.eql(3);
  });
});
describe('callMyFunction function', function () {
  it('calls the passed function', function () {
    var callback = (0, _sinon.spy)();
    (0, _sampleTest.callMyFunction)(callback);
    (0, _chai.expect)(callback.called).to.eql(true);
  });
});