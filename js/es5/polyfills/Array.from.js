"use strict";

Array.from || !(function () {
  "use strict";var r = (function () {
    try {
      var r = {},
          e = Object.defineProperty,
          t = e(r, r, r) && e;
    } catch (n) {}return t || function (r, e, t) {
      r[e] = t.value;
    };
  })(),
      e = Object.prototype.toString,
      t = function t(r) {
    return "function" == typeof r || "[object Function]" == e.call(r);
  },
      n = function n(r) {
    var e = Number(r);return isNaN(e) ? 0 : 0 != e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e;
  },
      a = Math.pow(2, 53) - 1,
      o = function o(r) {
    var e = n(r);return Math.min(Math.max(e, 0), a);
  },
      u = function u(e) {
    var n = this;if (null == e) throw new TypeError("`Array.from` requires an array-like object, not `null` or `undefined`");{
      var a,
          u,
          i = Object(e);arguments.length > 1;
    }if (arguments.length > 1) {
      if ((a = arguments[1], !t(a))) throw new TypeError("When provided, the second argument to `Array.from` must be a function");arguments.length > 2 && (u = arguments[2]);
    }for (var f, c, l = o(i.length), h = t(n) ? Object(new n(l)) : new Array(l), m = 0; l > m;) f = i[m], c = a ? "undefined" == typeof u ? a(f, m) : a.call(u, f, m) : f, r(h, m, { value: c, configurable: !0, enumerable: !0, writable: !0 }), ++m;return (h.length = l, h);
  };r(Array, "from", { value: u, configurable: !0, writable: !0 });
})();
//# sourceMappingURL=Array.from.js.map
