var Hooks =
/*#__PURE__*/
function () {
  function Hooks() {
    this.hooks = {};
  }

  var _proto = Hooks.prototype;

  _proto.add = function add(name, fn) {
    this.hooks[name] = this.hooks[name] || [];
    this.hooks[name].push(fn);
    return this;
  };

  _proto.invoke = function invoke(name) {
    var hooks = this.hooks[name] || [];

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    for (var _iterator = hooks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var fn = _ref;
      fn.apply(void 0, args);
    }

    return this;
  };

  _proto.process = function process(name, arg) {
    var hooks = this.hooks[name] || [];

    for (var _iterator2 = hooks, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var fn = _ref2;
      arg = fn(arg) || arg;
    }

    return arg;
  };

  return Hooks;
}();

export default new Hooks();