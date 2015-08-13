'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var define = require('./');

describe('define', function () {
  it('should copy a property and make it non-enumerable:', function () {
    var obj = {};
    define(obj, 'foo', function(val) {
      return val.toUpperCase();
    });

    assert.deepEqual(obj, {});
    assert.equal(obj.foo('bar'), 'BAR');
  });
  it('should throw an error when invalid args are passed:', function () {
    (function () {
      define();
    }).should.throw('expected an object.');

    (function () {
      define({});
    }).should.throw('expected `key` to be a string.');
  });
});
