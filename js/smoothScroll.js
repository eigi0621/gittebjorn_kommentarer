function startSmooth() {
  function e() {
    O.keyboardSupport && f("keydown", n)
  }

  function t() {
    if (!M && document.body) {
      M = !0;
      var t = document.body,
        i = document.documentElement,
        o = window.innerHeight,
        n = t.scrollHeight;
      if (A = document.compatMode.indexOf("CSS") >= 0 ? i : t, T = t, e(), top != self) L = !0;
      else if (oe && n > o && (t.offsetHeight <= o || i.offsetHeight <= o)) {
        var s = document.createElement("div");
        s.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + A.scrollHeight + "px", document.body.appendChild(s);
        var r;
        x = function () {
          r || (r = setTimeout(function () {
            E || (s.style.height = "0", s.style.height = A.scrollHeight + "px", r = null)
          }, 500))
        }, setTimeout(x, 10), f("resize", x);
        var a = {
          attributes: !0,
          childList: !0,
          characterData: !1
        };
        if ((j = new G(x)).observe(t, a), A.offsetHeight <= o) {
          var l = document.createElement("div");
          l.style.clear = "both", t.appendChild(l)
        }
      }
      O.fixedBackground || E || (t.style.backgroundAttachment = "scroll", i.style.backgroundAttachment = "scroll")
    }
  }

  function i(e, t, i) {
    if (g(t, i), 1 != O.accelerationMax) {
      var o = Date.now() - B;
      if (o < O.accelerationDelta) {
        var n = (1 + 50 / o) / 2;
        n > 1 && (n = Math.min(n, O.accelerationMax), t *= n, i *= n)
      }
      B = Date.now()
    }
    if (q.push({
        x: t,
        y: i,
        lastX: t < 0 ? .99 : -.99,
        lastY: i < 0 ? .99 : -.99,
        start: Date.now()
      }), !F) {
      var s = V(),
        r = e === s || e === document.body;
      null == e.$scrollBehavior && h(e) && (e.$scrollBehavior = e.style.scrollBehavior, e.style.scrollBehavior = "auto");
      var a = function (o) {
        for (var n = Date.now(), s = 0, l = 0, d = 0; d < q.length; d++) {
          var c = q[d],
            u = n - c.start,
            p = u >= O.animationTime,
            h = p ? 1 : u / O.animationTime;
          O.pulseAlgorithm && (h = S(h));
          var f = c.x * h - c.lastX >> 0,
            m = c.y * h - c.lastY >> 0;
          s += f, l += m, c.lastX += f, c.lastY += m, p && (q.splice(d, 1), d--)
        }
        r ? window.scrollBy(s, l) : (s && (e.scrollLeft += s), l && (e.scrollTop += l)), t || i || (q = []), q.length ? X(a, e, 1e3 / O.frameRate + 1) : (F = !1, null != e.$scrollBehavior && (e.style.scrollBehavior = e.$scrollBehavior, e.$scrollBehavior = null))
      };
      X(a, e, 0), F = !0
    }
  }

  function o(e) {
    M || t();
    var o = e.target;
    if (e.defaultPrevented || e.ctrlKey) return !0;
    if (v(T, "embed") || v(o, "embed") && /\.pdf/i.test(o.src) || v(T, "object") || o.shadowRoot) return !0;
    var n = -e.wheelDeltaX || e.deltaX || 0,
      s = -e.wheelDeltaY || e.deltaY || 0;
    P && (e.wheelDeltaX && w(e.wheelDeltaX, 120) && (n = e.wheelDeltaX / Math.abs(e.wheelDeltaX) * -120), e.wheelDeltaY && w(e.wheelDeltaY, 120) && (s = e.wheelDeltaY / Math.abs(e.wheelDeltaY) * -120)), n || s || (s = -e.wheelDelta || 0), 1 === e.deltaMode && (n *= 40, s *= 40);
    var a = d(o);
    return a ? !!y(s) || (Math.abs(n) > 1.2 && (n *= O.stepSize / 120), Math.abs(s) > 1.2 && (s *= O.stepSize / 120), i(a, n, s), e.preventDefault(), void r()) : !L || !Z || (Object.defineProperty(e, "target", {
      value: window.frameElement
    }), parent.wheel(e))
  }

  function n(e) {
    var t = e.target,
      o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== W.spacebar;
    document.body.contains(T) || (T = document.activeElement);
    var n = /^(textarea|select|embed|object)$/i,
      s = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (e.defaultPrevented || n.test(t.nodeName) || v(t, "input") && !s.test(t.type) || v(T, "video") || $(e) || t.isContentEditable || o) return !0;
    if ((v(t, "button") || v(t, "input") && s.test(t.type)) && e.keyCode === W.spacebar) return !0;
    if (v(t, "input") && "radio" == t.type && R[e.keyCode]) return !0;
    var a = 0,
      l = 0,
      c = d(T);
    if (!c) return !L || !Z || parent.keydown(e);
    var u = c.clientHeight;
    switch (c == document.body && (u = window.innerHeight), e.keyCode) {
      case W.up:
        l = -O.arrowScroll;
        break;
      case W.down:
        l = O.arrowScroll;
        break;
      case W.spacebar:
        l = -(e.shiftKey ? 1 : -1) * u * .9;
        break;
      case W.pageup:
        l = .9 * -u;
        break;
      case W.pagedown:
        l = .9 * u;
        break;
      case W.home:
        c == document.body && document.scrollingElement && (c = document.scrollingElement), l = -c.scrollTop;
        break;
      case W.end:
        var p = c.scrollHeight - c.scrollTop - u;
        l = p > 0 ? p + 10 : 0;
        break;
      case W.left:
        a = -O.arrowScroll;
        break;
      case W.right:
        a = O.arrowScroll;
        break;
      default:
        return !0
    }
    i(c, a, l), e.preventDefault(), r()
  }

  function s(e) {
    T = e.target
  }

  function r() {
    clearTimeout(_), _ = setInterval(function () {
      N = Q = Y = {}
    }, 1e3)
  }

  function a(e, t, i) {
    for (var o = i ? N : Q, n = e.length; n--;) o[U(e[n])] = t;
    return t
  }

  function l(e, t) {
    return (t ? N : Q)[U(e)]
  }

  function d(e) {
    var t = [],
      i = document.body,
      o = A.scrollHeight;
    do {
      var n = l(e, !1);
      if (n) return a(t, n);
      if (t.push(e), o === e.scrollHeight) {
        var s = u(A) && u(i) || p(A);
        if (L && c(A) || !L && s) return a(t, V())
      } else if (c(e) && p(e)) return a(t, e)
    } while (e = e.parentElement)
  }

  function c(e) {
    return e.clientHeight + 10 < e.scrollHeight
  }

  function u(e) {
    return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
  }

  function p(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "scroll" === t || "auto" === t
  }

  function h(e) {
    var t = U(e);
    if (null == Y[t]) {
      var i = getComputedStyle(e, "")["scroll-behavior"];
      Y[t] = "smooth" == i
    }
    return Y[t]
  }

  function f(e, t, i) {
    window.addEventListener(e, t, i || !1)
  }

  function m(e, t, i) {
    window.removeEventListener(e, t, i || !1)
  }

  function v(e, t) {
    return e && (e.nodeName || "").toLowerCase() === t.toLowerCase()
  }

  function g(e, t) {
    e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, H.x === e && H.y === t || (H.x = e, H.y = t, q = [], B = 0)
  }

  function y(e) {
    if (e) {
      D.length || (D = [e, e, e]), e = Math.abs(e), D.push(e), D.shift(), clearTimeout(z), z = setTimeout(function () {
        try {
          localStorage.SS_deltaBuffer = D.join(",")
        } catch (e) {}
      }, 1e3);
      var t = e > 120 && b(e);
      return !b(120) && !b(100) && !t
    }
  }

  function w(e, t) {
    return Math.floor(e / t) == e / t
  }

  function b(e) {
    return w(D[0], e) && w(D[1], e) && w(D[2], e)
  }

  function $(e) {
    var t = e.target,
      i = !1;
    if (-1 != document.URL.indexOf("www.youtube.com/watch"))
      do {
        if (i = t.classList && t.classList.contains("html5-video-controls")) break
      } while (t = t.parentNode);
    return i
  }

  function C(e) {
    var t, i;
    return (e *= O.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (i = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - i)), t * O.pulseNormalize
  }

  function S(e) {
    return e >= 1 ? 1 : e <= 0 ? 0 : (1 == O.pulseNormalize && (O.pulseNormalize /= C(1)), C(e))
  }

  function k(e) {
    for (var t in e) I.hasOwnProperty(t) && (O[t] = e[t])
  }
  var T, j, x, z, _, I = {
      frameRate: 150,
      animationTime: 400,
      stepSize: 100,
      pulseAlgorithm: !0,
      pulseScale: 4,
      pulseNormalize: 1,
      accelerationDelta: 50,
      accelerationMax: 3,
      keyboardSupport: !0,
      arrowScroll: 100,
      fixedBackground: !0,
      excluded: ""
    },
    O = I,
    E = !1,
    L = !1,
    H = {
      x: 0,
      y: 0
    },
    M = !1,
    A = document.documentElement,
    D = [],
    P = /^Mac/.test(navigator.platform),
    W = {
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      spacebar: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36
    },
    R = {
      37: 1,
      38: 1,
      39: 1,
      40: 1
    },
    q = [],
    F = !1,
    B = Date.now(),
    U = function () {
      var e = 0;
      return function (t) {
        return t.uniqueID || (t.uniqueID = e++)
      }
    }(),
    N = {},
    Q = {},
    Y = {};
  if (window.localStorage && localStorage.SS_deltaBuffer) try {
    D = localStorage.SS_deltaBuffer.split(",")
  } catch (e) {}
  var X = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e, t, i) {
      window.setTimeout(e, i || 1e3 / 60)
    },
    G = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
    V = function () {
      var e = document.scrollingElement;
      return function () {
        if (!e) {
          var t = document.createElement("div");
          t.style.cssText = "height:10000px;width:1px;", document.body.appendChild(t);
          var i = document.body.scrollTop;
          document.documentElement.scrollTop;
          window.scrollBy(0, 3), e = document.body.scrollTop != i ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(t)
        }
        return e
      }
    }(),
    K = window.navigator.userAgent,
    J = /Edge/.test(K),
    Z = /chrome/i.test(K) && !J,
    ee = /safari/i.test(K) && !J,
    te = /mobile/i.test(K),
    ie = /Windows NT 6.1/i.test(K) && /rv:11/i.test(K),
    oe = ee && (/Version\/8/i.test(K) || /Version\/9/i.test(K)),
    ne = (Z || ee || ie) && !te,
    se = !1;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
      get: function () {
        se = !0
      }
    }))
  } catch (e) {}
  var re = !!se && {
      passive: !1
    },
    ae = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  ae && ne && (f(ae, o, re), f("mousedown", s), f("load", t)), k.destroy = function () {
    j && j.disconnect(), m(ae, o), m("mousedown", s), m("keydown", n), m("resize", x), m("load", t)
  }, window.SmoothScrollOptions && k(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function () {
    return k
  }) : "object" == typeof exports ? module.exports = k : window.SmoothScroll = k
}
document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  startSmooth()
});
