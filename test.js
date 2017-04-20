'use strict';

require('mocha');
var assert = require('assert');
var define = require('./');

describe('define', function() {
  it('should define a property and make it non-enumerable:', function() {
    var obj = {};
    define(obj, 'foo', function(val) {
      return val.toUpperCase();
    });

    assert.deepEqual(obj, {});
    assert.equal(obj.foo('bar'), 'BAR');
  });

  it('should allow any arbitrary value to be assigned:', function() {
    var obj = {};
    define(obj, 'foo', null);
    define(obj, 'bar');
    define(obj, 'baz', {});
    assert.equal(obj.foo, null);
    assert.equal(obj.bar, undefined);
    assert.deepEqual(obj.baz, {});
  });

  it('should define a property with accessor descriptors:', function() {
    var obj = {bar: 'baz'};
    define(obj, 'foo', {
      configurable: true,
      get: function() {
        return this._val;
      },
      set: function(key) {
        define(this, '_val', this[key]);
      }
    });
    obj.foo = 'bar';
    assert.equal(obj.foo, 'baz');
  });

  it('should throw an error when invalid args are passed:', function() {
    assert.throws(function() {
      define();
    }, /expected an object or function/);

    assert.throws(function() {
      define({});
    }, /expected `prop` to be a string/);
  });
});
