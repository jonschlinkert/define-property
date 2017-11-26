var define = require('./');
var obj = {};
var tmp;

define(obj, 'foo', {
  set: (val) => tmp = val,
  get: () => tmp || obj.bar
});

obj.foo = 'one';
obj.bar = 'baz';
console.log(obj.foo)
