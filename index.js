/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function define(obj, key, val) {
  if (typeof obj !== 'object') {
    throw new TypeError('expected an object.');
  }

  if (typeof key !== 'string') {
    throw new TypeError('expected `key` to be a string.');
  }

  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};
