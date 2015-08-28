/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function defineProperty(receiver, key, val) {
  if (typeof receiver !== 'object' && typeof receiver !== 'function') {
    throw new TypeError('expected an object or function.');
  }

  if (typeof key !== 'string') {
    throw new TypeError('expected `key` to be a string.');
  }

  if (typeof val === 'object' && ('set' in val || 'get' in val)) {
    return Object.defineProperty(receiver, key, val);
  }

  return Object.defineProperty(receiver, key, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};
