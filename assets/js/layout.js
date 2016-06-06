function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}! function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
    var t = !!e && "length" in e && e.length,
      n = oe.type(e);
    return "function" === n || oe.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
  }

  function r(e, t, n) {
    if (oe.isFunction(t)) return oe.grep(e, function(e, r) {
      return !!t.call(e, r, e) !== n
    });
    if (t.nodeType) return oe.grep(e, function(e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (ge.test(t)) return oe.filter(t, e, n);
      t = oe.filter(t, e)
    }
    return oe.grep(e, function(e) {
      return Z.call(t, e) > -1 !== n
    })
  }

  function i(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;);
    return e
  }

  function o(e) {
    var t = {};
    return oe.each(e.match(we) || [], function(e, n) {
      t[n] = !0
    }), t
  }

  function s() {
    V.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), oe.ready()
  }

  function a() {
    this.expando = oe.expando + a.uid++
  }

  function u(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (r = "data-" + t.replace(Se, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
        try {
          n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ae.test(n) ? oe.parseJSON(n) : n
        } catch (i) {}
        Ne.set(e, t, n)
      } else n = void 0;
    return n
  }

  function l(e, t, n, r) {
    var i, o = 1,
      s = 20,
      a = r ? function() {
        return r.cur()
      } : function() {
        return oe.css(e, t, "")
      },
      u = a(),
      l = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
      c = (oe.cssNumber[t] || "px" !== l && +u) && je.exec(oe.css(e, t));
    if (c && c[3] !== l) {
      l = l || c[3], n = n || [], c = +u || 1;
      do o = o || ".5", c /= o, oe.style(e, t, c + l); while (o !== (o = a() / u) && 1 !== o && --s)
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
  }

  function c(e, t) {
    var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
  }

  function f(e, t) {
    for (var n = 0, r = e.length; r > n; n++) ke.set(e[n], "globalEval", !t || ke.get(t[n], "globalEval"))
  }

  function d(e, t, n, r, i) {
    for (var o, s, a, u, l, d, p = t.createDocumentFragment(), h = [], g = 0, v = e.length; v > g; g++)
      if (o = e[g], o || 0 === o)
        if ("object" === oe.type(o)) oe.merge(h, o.nodeType ? [o] : o);
        else if (Pe.test(o)) {
      for (s = s || p.appendChild(t.createElement("div")), a = (Oe.exec(o) || ["", ""])[1].toLowerCase(), u = Ie[a] || Ie._default, s.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2], d = u[0]; d--;) s = s.lastChild;
      oe.merge(h, s.childNodes), s = p.firstChild, s.textContent = ""
    } else h.push(t.createTextNode(o));
    for (p.textContent = "", g = 0; o = h[g++];)
      if (r && oe.inArray(o, r) > -1) i && i.push(o);
      else if (l = oe.contains(o.ownerDocument, o), s = c(p.appendChild(o), "script"), l && f(s), n)
      for (d = 0; o = s[d++];) qe.test(o.type || "") && n.push(o);
    return p
  }

  function p() {
    return !0
  }

  function h() {
    return !1
  }

  function g() {
    try {
      return V.activeElement
    } catch (e) {}
  }

  function v(e, t, n, r, i, o) {
    var s, a;
    if ("object" == typeof t) {
      "string" != typeof n && (r = r || n, n = void 0);
      for (a in t) v(e, a, n, r, t[a], o);
      return e
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = h;
    else if (!i) return e;
    return 1 === o && (s = i, i = function(e) {
      return oe().off(e), s.apply(this, arguments)
    }, i.guid = s.guid || (s.guid = oe.guid++)), e.each(function() {
      oe.event.add(this, t, i, r, n)
    })
  }

  function m(e, t) {
    return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function y(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function x(e) {
    var t = Ue.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function b(e, t) {
    var n, r, i, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (ke.hasData(e) && (o = ke.access(e), s = ke.set(t, o), l = o.events)) {
        delete s.handle, s.events = {};
        for (i in l)
          for (n = 0, r = l[i].length; r > n; n++) oe.event.add(t, i, l[i][n])
      }
      Ne.hasData(e) && (a = Ne.access(e), u = oe.extend({}, a), Ne.set(t, u))
    }
  }

  function w(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && He.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function C(e, t, n, r) {
    t = J.apply([], t);
    var i, o, s, a, u, l, f = 0,
      p = e.length,
      h = p - 1,
      g = t[0],
      v = oe.isFunction(g);
    if (v || p > 1 && "string" == typeof g && !re.checkClone && Be.test(g)) return e.each(function(i) {
      var o = e.eq(i);
      v && (t[0] = g.call(this, i, o.html())), C(o, t, n, r)
    });
    if (p && (i = d(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (s = oe.map(c(i, "script"), y), a = s.length; p > f; f++) u = i, f !== h && (u = oe.clone(u, !0, !0), a && oe.merge(s, c(u, "script"))), n.call(e[f], u, f);
      if (a)
        for (l = s[s.length - 1].ownerDocument, oe.map(s, x), f = 0; a > f; f++) u = s[f], qe.test(u.type || "") && !ke.access(u, "globalEval") && oe.contains(l, u) && (u.src ? oe._evalUrl && oe._evalUrl(u.src) : oe.globalEval(u.textContent.replace(ze, "")))
    }
    return e
  }

  function T(e, t, n) {
    for (var r, i = t ? oe.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || oe.cleanData(c(r)), r.parentNode && (n && oe.contains(r.ownerDocument, r) && f(c(r, "script")), r.parentNode.removeChild(r));
    return e
  }

  function E(e, t) {
    var n = oe(t.createElement(e)).appendTo(t.body),
      r = oe.css(n[0], "display");
    return n.detach(), r
  }

  function k(e) {
    var t = V,
      n = Qe[e];
    return n || (n = E(e, t), "none" !== n && n || (Xe = (Xe || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Xe[0].contentDocument, t.write(), t.close(), n = E(e, t), Xe.detach()), Qe[e] = n), n
  }

  function N(e, t, n) {
    var r, i, o, s, a = e.style;
    return n = n || Ye(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), n && !re.pixelMarginRight() && Ve.test(s) && Ge.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s
  }

  function A(e, t) {
    return {
      get: function() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }

  function S(e) {
    if (e in rt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
      if (e = nt[n] + t, e in rt) return e
  }

  function D(e, t, n) {
    var r = je.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function j(e, t, n, r, i) {
    for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += oe.css(e, n + Le[o], !0, i)), r ? ("content" === n && (s -= oe.css(e, "padding" + Le[o], !0, i)), "margin" !== n && (s -= oe.css(e, "border" + Le[o] + "Width", !0, i))) : (s += oe.css(e, "padding" + Le[o], !0, i), "padding" !== n && (s += oe.css(e, "border" + Le[o] + "Width", !0, i)));
    return s
  }

  function L(t, n, r) {
    var i = !0,
      o = "width" === n ? t.offsetWidth : t.offsetHeight,
      s = Ye(t),
      a = "border-box" === oe.css(t, "boxSizing", !1, s);
    if (V.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= o || null == o) {
      if (o = N(t, n, s), (0 > o || null == o) && (o = t.style[n]), Ve.test(o)) return o;
      i = a && (re.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
    }
    return o + j(t, n, r || (a ? "border" : "content"), i, s) + "px"
  }

  function _(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = ke.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && _e(r) && (o[s] = ke.access(r, "olddisplay", k(r.nodeName)))) : (i = _e(r), "none" === n && i || ke.set(r, "olddisplay", i ? n : oe.css(r, "display"))));
    for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
    return e
  }

  function H(e, t, n, r, i) {
    return new H.prototype.init(e, t, n, r, i)
  }

  function O() {
    return e.setTimeout(function() {
      it = void 0
    }), it = oe.now()
  }

  function q(e, t) {
    var n, r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Le[r], i["margin" + n] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function I(e, t, n) {
    for (var r, i = (R.tweeners[t] || []).concat(R.tweeners["*"]), o = 0, s = i.length; s > o; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function P(e, t, n) {
    var r, i, o, s, a, u, l, c, f = this,
      d = {},
      p = e.style,
      h = e.nodeType && _e(e),
      g = ke.get(e, "fxshow");
    n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
      a.unqueued || u()
    }), a.unqueued++, f.always(function() {
      f.always(function() {
        a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = oe.css(e, "display"), c = "none" === l ? ke.get(e, "olddisplay") || k(e.nodeName) : l, "inline" === c && "none" === oe.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
    }));
    for (r in t)
      if (i = t[r], st.exec(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
          if ("show" !== i || !g || void 0 === g[r]) continue;
          h = !0
        }
        d[r] = g && g[r] || oe.style(e, r)
      } else l = void 0;
    if (oe.isEmptyObject(d)) "inline" === ("none" === l ? k(e.nodeName) : l) && (p.display = l);
    else {
      g ? "hidden" in g && (h = g.hidden) : g = ke.access(e, "fxshow", {}), o && (g.hidden = !h), h ? oe(e).show() : f.done(function() {
        oe(e).hide()
      }), f.done(function() {
        var t;
        ke.remove(e, "fxshow");
        for (t in d) oe.style(e, t, d[t])
      });
      for (r in d) s = I(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
    }
  }

  function F(e, t) {
    var n, r, i, o, s;
    for (n in e)
      if (r = oe.camelCase(n), i = t[r], o = e[n], oe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = oe.cssHooks[r], s && "expand" in s) {
        o = s.expand(o), delete e[r];
        for (n in o) n in e || (e[n] = o[n], t[n] = i)
      } else t[r] = i
  }

  function R(e, t, n) {
    var r, i, o = 0,
      s = R.prefilters.length,
      a = oe.Deferred().always(function() {
        delete u.elem
      }),
      u = function() {
        if (i) return !1;
        for (var t = it || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
        return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
      },
      l = a.promise({
        elem: e,
        props: oe.extend({}, t),
        opts: oe.extend(!0, {
          specialEasing: {},
          easing: oe.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: it || O(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = oe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r
        },
        stop: function(t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) l.tweens[n].run(1);
          return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
        }
      }),
      c = l.props;
    for (F(c, l.opts.specialEasing); s > o; o++)
      if (r = R.prefilters[o].call(l, e, c, l.opts)) return oe.isFunction(r.stop) && (oe._queueHooks(l.elem, l.opts.queue).stop = oe.proxy(r.stop, r)), r;
    return oe.map(c, I, l), oe.isFunction(l.opts.start) && l.opts.start.call(e, l), oe.fx.timer(oe.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function M(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function W(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0,
        o = t.toLowerCase().match(we) || [];
      if (oe.isFunction(n))
        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function $(e, t, n, r) {
    function i(a) {
      var u;
      return o[a] = !0, oe.each(e[a] || [], function(e, a) {
        var l = a(t, n, r);
        return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
      }), u
    }
    var o = {},
      s = e === Nt;
    return i(t.dataTypes[0]) || !o["*"] && i("*")
  }

  function B(e, t) {
    var n, r, i = oe.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && oe.extend(!0, e, r), e
  }

  function U(e, t, n) {
    for (var r, i, o, s, a = e.contents, u = e.dataTypes;
      "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in a)
        if (a[i] && a[i].test(r)) {
          u.unshift(i);
          break
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break
        }
        s || (s = i)
      }
      o = o || s
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
  }

  function z(e, t, n, r) {
    var i, o, s, a, u, l = {},
      c = e.dataTypes.slice();
    if (c[1])
      for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
    for (o = c.shift(); o;)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
      if (s = l[u + " " + o] || l["* " + o], !s)
        for (i in l)
          if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
            s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
            break
          }
      if (s !== !0)
        if (s && e["throws"]) t = s(t);
        else try {
          t = s(t)
        } catch (f) {
          return {
            state: "parsererror",
            error: s ? f : "No conversion from " + u + " to " + o
          }
        }
    }
    return {
      state: "success",
      data: t
    }
  }

  function X(e, t, n, r) {
    var i;
    if (oe.isArray(t)) oe.each(t, function(t, i) {
      n || jt.test(e) ? r(e, i) : X(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
    });
    else if (n || "object" !== oe.type(t)) r(e, t);
    else
      for (i in t) X(e + "[" + i + "]", t[i], n, r)
  }

  function Q(e) {
    return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  var G = [],
    V = e.document,
    Y = G.slice,
    J = G.concat,
    K = G.push,
    Z = G.indexOf,
    ee = {},
    te = ee.toString,
    ne = ee.hasOwnProperty,
    re = {},
    ie = "2.2.3",
    oe = function(e, t) {
      return new oe.fn.init(e, t)
    },
    se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ae = /^-ms-/,
    ue = /-([\da-z])/gi,
    le = function(e, t) {
      return t.toUpperCase()
    };
  oe.fn = oe.prototype = {
    jquery: ie,
    constructor: oe,
    selector: "",
    length: 0,
    toArray: function() {
      return Y.call(this)
    },
    get: function(e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
    },
    pushStack: function(e) {
      var t = oe.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    },
    each: function(e) {
      return oe.each(this, e)
    },
    map: function(e) {
      return this.pushStack(oe.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function() {
      return this.pushStack(Y.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: K,
    sort: G.sort,
    splice: G.splice
  }, oe.extend = oe.fn.extend = function() {
    var e, t, n, r, i, o, s = arguments[0] || {},
      a = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
      if (null != (e = arguments[a]))
        for (t in e) n = s[t], r = e[t], s !== r && (l && r && (oe.isPlainObject(r) || (i = oe.isArray(r))) ? (i ? (i = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, s[t] = oe.extend(l, o, r)) : void 0 !== r && (s[t] = r));
    return s
  }, oe.extend({
    expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === oe.type(e)
    },
    isArray: Array.isArray,
    isWindow: function(e) {
      return null != e && e === e.window
    },
    isNumeric: function(e) {
      var t = e && e.toString();
      return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
    },
    isPlainObject: function(e) {
      var t;
      if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
      if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
      for (t in e);
      return void 0 === t || ne.call(e, t)
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
    },
    globalEval: function(e) {
      var t, n = eval;
      e = oe.trim(e), e && (1 === e.indexOf("use strict") ? (t = V.createElement("script"), t.text = e, V.head.appendChild(t).parentNode.removeChild(t)) : n(e))
    },
    camelCase: function(e) {
      return e.replace(ae, "ms-").replace(ue, le)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t) {
      var r, i = 0;
      if (n(e))
        for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++);
      else
        for (i in e)
          if (t.call(e[i], i, e[i]) === !1) break; return e
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(se, "")
    },
    makeArray: function(e, t) {
      var r = t || [];
      return null != e && (n(Object(e)) ? oe.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)), r
    },
    inArray: function(e, t, n) {
      return null == t ? -1 : Z.call(t, e, n)
    },
    merge: function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
      return e.length = i, e
    },
    grep: function(e, t, n) {
      for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
      return i
    },
    map: function(e, t, r) {
      var i, o, s = 0,
        a = [];
      if (n(e))
        for (i = e.length; i > s; s++) o = t(e[s], s, r), null != o && a.push(o);
      else
        for (s in e) o = t(e[s], s, r), null != o && a.push(o);
      return J.apply([], a)
    },
    guid: 1,
    proxy: function(e, t) {
      var n, r, i;
      return "string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e) ? (r = Y.call(arguments, 2), i = function() {
        return e.apply(t || this, r.concat(Y.call(arguments)))
      }, i.guid = e.guid = e.guid || oe.guid++, i) : void 0
    },
    now: Date.now,
    support: re
  }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = G[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
    ee["[object " + t + "]"] = t.toLowerCase()
  });
  var ce = function(e) {
    function t(e, t, n, r) {
      var i, o, s, a, u, l, f, p, h = t && t.ownerDocument,
        g = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
      if (!r && ((t ? t.ownerDocument || t : M) !== _ && L(t), t = t || _, O)) {
        if (11 !== g && (l = me.exec(e)))
          if (i = l[1]) {
            if (9 === g) {
              if (!(s = t.getElementById(i))) return n;
              if (s.id === i) return n.push(s), n
            } else if (h && (s = h.getElementById(i)) && F(t, s) && s.id === i) return n.push(s), n
          } else {
            if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
            if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n
          }
        if (w.qsa && !z[e + " "] && (!q || !q.test(e))) {
          if (1 !== g) h = t, p = e;
          else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? a = a.replace(xe, "\\$&") : t.setAttribute("id", a = R), f = k(e), o = f.length, u = de.test(a) ? "#" + a : "[id='" + a + "']"; o--;) f[o] = u + " " + d(f[o]);
            p = f.join(","), h = ye.test(e) && c(t.parentNode) || t
          }
          if (p) try {
            return K.apply(n, h.querySelectorAll(p)), n
          } catch (v) {} finally {
            a === R && t.removeAttribute("id")
          }
        }
      }
      return A(e.replace(ae, "$1"), t, n, r)
    }

    function n() {
      function e(n, r) {
        return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
      }
      var t = [];
      return e
    }

    function r(e) {
      return e[R] = !0, e
    }

    function i(e) {
      var t = _.createElement("div");
      try {
        return !!e(t)
      } catch (n) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function o(e, t) {
      for (var n = e.split("|"), r = n.length; r--;) C.attrHandle[n[r]] = t
    }

    function s(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
      if (r) return r;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function a(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e
      }
    }

    function u(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function l(e) {
      return r(function(t) {
        return t = +t, r(function(n, r) {
          for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }

    function c(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e
    }

    function f() {}

    function d(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r
    }

    function p(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = $++;
      return t.first ? function(t, n, o) {
        for (; t = t[r];)
          if (1 === t.nodeType || i) return e(t, n, o)
      } : function(t, n, s) {
        var a, u, l, c = [W, o];
        if (s) {
          for (; t = t[r];)
            if ((1 === t.nodeType || i) && e(t, n, s)) return !0
        } else
          for (; t = t[r];)
            if (1 === t.nodeType || i) {
              if (l = t[R] || (t[R] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (a = u[r]) && a[0] === W && a[1] === o) return c[2] = a[2];
              if (u[r] = c, c[2] = e(t, n, s)) return !0
            }
      }
    }

    function h(e) {
      return e.length > 1 ? function(t, n, r) {
        for (var i = e.length; i--;)
          if (!e[i](t, n, r)) return !1;
        return !0
      } : e[0]
    }

    function g(e, n, r) {
      for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
      return r
    }

    function v(e, t, n, r, i) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
      return s
    }

    function m(e, t, n, i, o, s) {
      return i && !i[R] && (i = m(i)), o && !o[R] && (o = m(o, s)), r(function(r, s, a, u) {
        var l, c, f, d = [],
          p = [],
          h = s.length,
          m = r || g(t || "*", a.nodeType ? [a] : a, []),
          y = !e || !r && t ? m : v(m, d, e, a, u),
          x = n ? o || (r ? e : h || i) ? [] : s : y;
        if (n && n(y, x, a, u), i)
          for (l = v(x, p), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[p[c]] = !(y[p[c]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
              o(null, x = [], l, u)
            }
            for (c = x.length; c--;)(f = x[c]) && (l = o ? ee(r, f) : d[c]) > -1 && (r[l] = !(s[l] = f))
          }
        } else x = v(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : K.apply(s, x)
      })
    }

    function y(e) {
      for (var t, n, r, i = e.length, o = C.relative[e[0].type], s = o || C.relative[" "], a = o ? 1 : 0, u = p(function(e) {
          return e === t
        }, s, !0), l = p(function(e) {
          return ee(t, e) > -1
        }, s, !0), c = [function(e, n, r) {
          var i = !o && (r || n !== S) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
          return t = null, i
        }]; i > a; a++)
        if (n = C.relative[e[a].type]) c = [p(h(c), n)];
        else {
          if (n = C.filter[e[a].type].apply(null, e[a].matches), n[R]) {
            for (r = ++a; i > r && !C.relative[e[r].type]; r++);
            return m(a > 1 && h(c), a > 1 && d(e.slice(0, a - 1).concat({
              value: " " === e[a - 2].type ? "*" : ""
            })).replace(ae, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && d(e))
          }
          c.push(n)
        }
      return h(c)
    }

    function x(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        s = function(r, s, a, u, l) {
          var c, f, d, p = 0,
            h = "0",
            g = r && [],
            m = [],
            y = S,
            x = r || o && C.find.TAG("*", l),
            b = W += null == y ? 1 : Math.random() || .1,
            w = x.length;
          for (l && (S = s === _ || s || l); h !== w && null != (c = x[h]); h++) {
            if (o && c) {
              for (f = 0, s || c.ownerDocument === _ || (L(c), a = !O); d = e[f++];)
                if (d(c, s || _, a)) {
                  u.push(c);
                  break
                }
              l && (W = b)
            }
            i && ((c = !d && c) && p--, r && g.push(c))
          }
          if (p += h, i && h !== p) {
            for (f = 0; d = n[f++];) d(g, m, s, a);
            if (r) {
              if (p > 0)
                for (; h--;) g[h] || m[h] || (m[h] = Y.call(u));
              m = v(m)
            }
            K.apply(u, m), l && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(u)
          }
          return l && (W = b, S = y), g
        };
      return i ? r(s) : s
    }
    var b, w, C, T, E, k, N, A, S, D, j, L, _, H, O, q, I, P, F, R = "sizzle" + 1 * new Date,
      M = e.document,
      W = 0,
      $ = 0,
      B = n(),
      U = n(),
      z = n(),
      X = function(e, t) {
        return e === t && (j = !0), 0
      },
      Q = 1 << 31,
      G = {}.hasOwnProperty,
      V = [],
      Y = V.pop,
      J = V.push,
      K = V.push,
      Z = V.slice,
      ee = function(e, t) {
        for (var n = 0, r = e.length; r > n; n++)
          if (e[n] === t) return n;
        return -1
      },
      te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]",
      re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
      oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
      se = new RegExp(ne + "+", "g"),
      ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
      ue = new RegExp("^" + ne + "*," + ne + "*"),
      le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
      fe = new RegExp(oe),
      de = new RegExp("^" + re + "$"),
      pe = {
        ID: new RegExp("^#(" + re + ")"),
        CLASS: new RegExp("^\\.(" + re + ")"),
        TAG: new RegExp("^(" + re + "|[*])"),
        ATTR: new RegExp("^" + ie),
        PSEUDO: new RegExp("^" + oe),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + te + ")$", "i"),
        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
      },
      he = /^(?:input|select|textarea|button)$/i,
      ge = /^h\d$/i,
      ve = /^[^{]+\{\s*\[native \w/,
      me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ye = /[+~]/,
      xe = /'|\\/g,
      be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
      we = function(e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      },
      Ce = function() {
        L()
      };
    try {
      K.apply(V = Z.call(M.childNodes), M.childNodes), V[M.childNodes.length].nodeType
    } catch (Te) {
      K = {
        apply: V.length ? function(e, t) {
          J.apply(e, Z.call(t))
        } : function(e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);
          e.length = n - 1
        }
      }
    }
    w = t.support = {}, E = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName : !1
    }, L = t.setDocument = function(e) {
      var t, n, r = e ? e.ownerDocument || e : M;
      return r !== _ && 9 === r.nodeType && r.documentElement ? (_ = r, H = _.documentElement, O = !E(_), (n = _.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), w.attributes = i(function(e) {
        return e.className = "i", !e.getAttribute("className")
      }), w.getElementsByTagName = i(function(e) {
        return e.appendChild(_.createComment("")), !e.getElementsByTagName("*").length
      }), w.getElementsByClassName = ve.test(_.getElementsByClassName), w.getById = i(function(e) {
        return H.appendChild(e).id = R, !_.getElementsByName || !_.getElementsByName(R).length
      }), w.getById ? (C.find.ID = function(e, t) {
        if ("undefined" != typeof t.getElementById && O) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }, C.filter.ID = function(e) {
        var t = e.replace(be, we);
        return function(e) {
          return e.getAttribute("id") === t
        }
      }) : (delete C.find.ID, C.filter.ID = function(e) {
        var t = e.replace(be, we);
        return function(e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
      } : function(e, t) {
        var n, r = [],
          i = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[i++];) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
        return "undefined" != typeof t.getElementsByClassName && O ? t.getElementsByClassName(e) : void 0
      }, I = [], q = [], (w.qsa = ve.test(_.querySelectorAll)) && (i(function(e) {
        H.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || q.push(".#.+[+~]")
      }), i(function(e) {
        var t = _.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
      })), (w.matchesSelector = ve.test(P = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
        w.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), I.push("!=", oe)
      }), q = q.length && new RegExp(q.join("|")), I = I.length && new RegExp(I.join("|")), t = ve.test(H.compareDocumentPosition), F = t || ve.test(H.contains) ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function(e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e) return !0;
        return !1
      }, X = t ? function(e, t) {
        if (e === t) return j = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === _ || e.ownerDocument === M && F(M, e) ? -1 : t === _ || t.ownerDocument === M && F(M, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
      } : function(e, t) {
        if (e === t) return j = !0, 0;
        var n, r = 0,
          i = e.parentNode,
          o = t.parentNode,
          a = [e],
          u = [t];
        if (!i || !o) return e === _ ? -1 : t === _ ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
        if (i === o) return s(e, t);
        for (n = e; n = n.parentNode;) a.unshift(n);
        for (n = t; n = n.parentNode;) u.unshift(n);
        for (; a[r] === u[r];) r++;
        return r ? s(a[r], u[r]) : a[r] === M ? -1 : u[r] === M ? 1 : 0
      }, _) : _
    }, t.matches = function(e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function(e, n) {
      if ((e.ownerDocument || e) !== _ && L(e), n = n.replace(ce, "='$1']"), w.matchesSelector && O && !z[n + " "] && (!I || !I.test(n)) && (!q || !q.test(n))) try {
        var r = P.call(e, n);
        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
      } catch (i) {}
      return t(n, _, null, [e]).length > 0
    }, t.contains = function(e, t) {
      return (e.ownerDocument || e) !== _ && L(e), F(e, t)
    }, t.attr = function(e, t) {
      (e.ownerDocument || e) !== _ && L(e);
      var n = C.attrHandle[t.toLowerCase()],
        r = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
      return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, t.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, t.uniqueSort = function(e) {
      var t, n = [],
        r = 0,
        i = 0;
      if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(X), j) {
        for (; t = e[i++];) t === e[i] && (r = n.push(i));
        for (; r--;) e.splice(n[r], 1)
      }
      return D = null, e
    }, T = t.getText = function(e) {
      var t, n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else
        for (; t = e[r++];) n += T(t);
      return n
    }, C = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: pe,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
        },
        PSEUDO: function(e) {
          var t, n = !e[6] && e[2];
          return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(be, we).toLowerCase();
          return "*" === e ? function() {
            return !0
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(e) {
          var t = B[e + " "];
          return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
          })
        },
        ATTR: function(e, n, r) {
          return function(i) {
            var o = t.attr(i, e);
            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
          }
        },
        CHILD: function(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
            s = "last" !== e.slice(-4),
            a = "of-type" === t;
          return 1 === r && 0 === i ? function(e) {
            return !!e.parentNode
          } : function(t, n, u) {
            var l, c, f, d, p, h, g = o !== s ? "nextSibling" : "previousSibling",
              v = t.parentNode,
              m = a && t.nodeName.toLowerCase(),
              y = !u && !a,
              x = !1;
            if (v) {
              if (o) {
                for (; g;) {
                  for (d = t; d = d[g];)
                    if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                  h = g = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [s ? v.firstChild : v.lastChild], s && y) {
                for (d = v, f = d[R] || (d[R] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], x = p && l[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop();)
                  if (1 === d.nodeType && ++x && d === t) {
                    c[e] = [W, p, x];
                    break
                  }
              } else if (y && (d = t, f = d[R] || (d[R] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], x = p), x === !1)
                for (;
                  (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++x || (y && (f = d[R] || (d[R] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [W, x]), d !== t)););
              return x -= i, x === r || x % r === 0 && x / r >= 0
            }
          }
        },
        PSEUDO: function(e, n) {
          var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[R] ? o(n) : o.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
            for (var r, i = o(e, n), s = i.length; s--;) r = ee(e, i[s]), e[r] = !(t[r] = i[s])
          }) : function(e) {
            return o(e, 0, i)
          }) : o
        }
      },
      pseudos: {
        not: r(function(e) {
          var t = [],
            n = [],
            i = N(e.replace(ae, "$1"));
          return i[R] ? r(function(e, t, n, r) {
            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
          }) : function(e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
          }
        }),
        has: r(function(e) {
          return function(n) {
            return t(e, n).length > 0
          }
        }),
        contains: r(function(e) {
          return e = e.replace(be, we),
            function(t) {
              return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
            }
        }),
        lang: r(function(e) {
          return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
            function(t) {
              var n;
              do
                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
              while ((t = t.parentNode) && 1 === t.nodeType);
              return !1
            }
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function(e) {
          return e === H
        },
        focus: function(e) {
          return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: function(e) {
          return e.disabled === !1
        },
        disabled: function(e) {
          return e.disabled === !0
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function(e) {
          return !C.pseudos.empty(e)
        },
        header: function(e) {
          return ge.test(e.nodeName)
        },
        input: function(e) {
          return he.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: l(function() {
          return [0]
        }),
        last: l(function(e, t) {
          return [t - 1]
        }),
        eq: l(function(e, t, n) {
          return [0 > n ? n + t : n]
        }),
        even: l(function(e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e
        }),
        odd: l(function(e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e
        }),
        lt: l(function(e, t, n) {
          for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
          return e
        }),
        gt: l(function(e, t, n) {
          for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
          return e
        })
      }
    }, C.pseudos.nth = C.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) C.pseudos[b] = a(b);
    for (b in {
        submit: !0,
        reset: !0
      }) C.pseudos[b] = u(b);
    return f.prototype = C.filters = C.pseudos, C.setFilters = new f, k = t.tokenize = function(e, n) {
      var r, i, o, s, a, u, l, c = U[e + " "];
      if (c) return n ? 0 : c.slice(0);
      for (a = e, u = [], l = C.preFilter; a;) {
        r && !(i = ue.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = le.exec(a)) && (r = i.shift(), o.push({
          value: r,
          type: i[0].replace(ae, " ")
        }), a = a.slice(r.length));
        for (s in C.filter) !(i = pe[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
          value: r,
          type: s,
          matches: i
        }), a = a.slice(r.length));
        if (!r) break
      }
      return n ? a.length : a ? t.error(e) : U(e, u).slice(0)
    }, N = t.compile = function(e, t) {
      var n, r = [],
        i = [],
        o = z[e + " "];
      if (!o) {
        for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[R] ? r.push(o) : i.push(o);
        o = z(e, x(i, r)), o.selector = e
      }
      return o
    }, A = t.select = function(e, t, n, r) {
      var i, o, s, a, u, l = "function" == typeof e && e,
        f = !r && k(e = l.selector || e);
      if (n = n || [], 1 === f.length) {
        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && C.relative[o[1].type]) {
          if (t = (C.find.ID(s.matches[0].replace(be, we), t) || [])[0], !t) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !C.relative[a = s.type]);)
          if ((u = C.find[a]) && (r = u(s.matches[0].replace(be, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
            if (o.splice(i, 1), e = r.length && d(o), !e) return K.apply(n, r), n;
            break
          }
      }
      return (l || N(e, f))(r, t, !O, n, !t || ye.test(e) && c(t.parentNode) || t), n
    }, w.sortStable = R.split("").sort(X).join("") === R, w.detectDuplicates = !!j, L(), w.sortDetached = i(function(e) {
      return 1 & e.compareDocumentPosition(_.createElement("div"))
    }), i(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || o("type|href|height|width", function(e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), w.attributes && i(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || o("value", function(e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
    }), i(function(e) {
      return null == e.getAttribute("disabled")
    }) || o(te, function(e, t, n) {
      var r;
      return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), t
  }(e);
  oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
  var fe = function(e, t, n) {
      for (var r = [], i = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (i && oe(e).is(n)) break;
          r.push(e)
        }
      return r
    },
    de = function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    },
    pe = oe.expr.match.needsContext,
    he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    ge = /^.[^:#\[\.,]*$/;
  oe.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? oe.find.matchesSelector(r, e) ? [r] : [] : oe.find.matches(e, oe.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  }, oe.fn.extend({
    find: function(e) {
      var t, n = this.length,
        r = [],
        i = this;
      if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
        for (t = 0; n > t; t++)
          if (oe.contains(i[t], this)) return !0
      }));
      for (t = 0; n > t; t++) oe.find(e, i[t], r);
      return r = this.pushStack(n > 1 ? oe.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
    },
    filter: function(e) {
      return this.pushStack(r(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(r(this, e || [], !0))
    },
    is: function(e) {
      return !!r(this, "string" == typeof e && pe.test(e) ? oe(e) : e || [], !1).length
    }
  });
  var ve, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ye = oe.fn.init = function(e, t, n) {
      var r, i;
      if (!e) return this;
      if (n = n || ve, "string" == typeof e) {
        if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : me.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : V, !0)), he.test(r[1]) && oe.isPlainObject(t))
            for (r in t) oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this
        }
        return i = V.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = V, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
    };
  ye.prototype = oe.fn, ve = oe(V);
  var xe = /^(?:parents|prev(?:Until|All))/,
    be = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  oe.fn.extend({
    has: function(e) {
      var t = oe(e, this),
        n = t.length;
      return this.filter(function() {
        for (var e = 0; n > e; e++)
          if (oe.contains(this, t[e])) return !0
      })
    },
    closest: function(e, t) {
      for (var n, r = 0, i = this.length, o = [], s = pe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i > r; r++)
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
            o.push(n);
            break
          }
      return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), oe.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return fe(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return fe(e, "parentNode", n)
    },
    next: function(e) {
      return i(e, "nextSibling")
    },
    prev: function(e) {
      return i(e, "previousSibling")
    },
    nextAll: function(e) {
      return fe(e, "nextSibling")
    },
    prevAll: function(e) {
      return fe(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return fe(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return fe(e, "previousSibling", n)
    },
    siblings: function(e) {
      return de((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return de(e.firstChild)
    },
    contents: function(e) {
      return e.contentDocument || oe.merge([], e.childNodes)
    }
  }, function(e, t) {
    oe.fn[e] = function(n, r) {
      var i = oe.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = oe.filter(r, i)), this.length > 1 && (be[e] || oe.uniqueSort(i), xe.test(e) && i.reverse()), this.pushStack(i)
    }
  });
  var we = /\S+/g;
  oe.Callbacks = function(e) {
    e = "string" == typeof e ? o(e) : oe.extend({}, e);
    var t, n, r, i, s = [],
      a = [],
      u = -1,
      l = function() {
        for (i = e.once, r = t = !0; a.length; u = -1)
          for (n = a.shift(); ++u < s.length;) s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = s.length, n = !1);
        e.memory || (n = !1), t = !1, i && (s = n ? [] : "")
      },
      c = {
        add: function() {
          return s && (n && !t && (u = s.length - 1, a.push(n)), function r(t) {
            oe.each(t, function(t, n) {
              oe.isFunction(n) ? e.unique && c.has(n) || s.push(n) : n && n.length && "string" !== oe.type(n) && r(n)
            })
          }(arguments), n && !t && l()), this
        },
        remove: function() {
          return oe.each(arguments, function(e, t) {
            for (var n;
              (n = oe.inArray(t, s, n)) > -1;) s.splice(n, 1), u >= n && u--
          }), this
        },
        has: function(e) {
          return e ? oe.inArray(e, s) > -1 : s.length > 0
        },
        empty: function() {
          return s && (s = []), this
        },
        disable: function() {
          return i = a = [], s = n = "", this
        },
        disabled: function() {
          return !s
        },
        lock: function() {
          return i = a = [], n || (s = n = ""), this
        },
        locked: function() {
          return !!i
        },
        fireWith: function(e, n) {
          return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
        },
        fire: function() {
          return c.fireWith(this, arguments), this
        },
        fired: function() {
          return !!r
        }
      };
    return c
  }, oe.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
          ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
          ["notify", "progress", oe.Callbacks("memory")]
        ],
        n = "pending",
        r = {
          state: function() {
            return n
          },
          always: function() {
            return i.done(arguments).fail(arguments), this
          },
          then: function() {
            var e = arguments;
            return oe.Deferred(function(n) {
              oe.each(t, function(t, o) {
                var s = oe.isFunction(e[t]) && e[t];
                i[o[1]](function() {
                  var e = s && s.apply(this, arguments);
                  e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? oe.extend(e, r) : r
          }
        },
        i = {};
      return r.pipe = r.then, oe.each(t, function(e, o) {
        var s = o[2],
          a = o[3];
        r[o[1]] = s.add, a && s.add(function() {
          n = a
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
          return i[o[0] + "With"](this === i ? r : this, arguments), this
        }, i[o[0] + "With"] = s.fireWith
      }), r.promise(i), e && e.call(i, i), i
    },
    when: function(e) {
      var t, n, r, i = 0,
        o = Y.call(arguments),
        s = o.length,
        a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
        u = 1 === a ? e : oe.Deferred(),
        l = function(e, n, r) {
          return function(i) {
            n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
          }
        };
      if (s > 1)
        for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && oe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --a;
      return a || u.resolveWith(r, o), u.promise()
    }
  });
  var Ce;
  oe.fn.ready = function(e) {
    return oe.ready.promise().done(e), this
  }, oe.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? oe.readyWait++ : oe.ready(!0)
    },
    ready: function(e) {
      (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (Ce.resolveWith(V, [oe]), oe.fn.triggerHandler && (oe(V).triggerHandler("ready"), oe(V).off("ready"))))
    }
  }), oe.ready.promise = function(t) {
    return Ce || (Ce = oe.Deferred(), "complete" === V.readyState || "loading" !== V.readyState && !V.documentElement.doScroll ? e.setTimeout(oe.ready) : (V.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), Ce.promise(t)
  }, oe.ready.promise();
  var Te = function(e, t, n, r, i, o, s) {
      var a = 0,
        u = e.length,
        l = null == n;
      if ("object" === oe.type(n)) {
        i = !0;
        for (a in n) Te(e, t, a, n[a], !0, o, s)
      } else if (void 0 !== r && (i = !0, oe.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
          return l.call(oe(e), n)
        })), t))
        for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    Ee = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
  a.uid = 1, a.prototype = {
    register: function(e, t) {
      var n = t || {};
      return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
        value: n,
        writable: !0,
        configurable: !0
      }), e[this.expando]
    },
    cache: function(e) {
      if (!Ee(e)) return {};
      var t = e[this.expando];
      return t || (t = {}, Ee(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function(e, t, n) {
      var r, i = this.cache(e);
      if ("string" == typeof t) i[t] = n;
      else
        for (r in t) i[r] = t[r];
      return i
    },
    get: function(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
    },
    access: function(e, t, n) {
      var r;
      return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function(e, t) {
      var n, r, i, o = e[this.expando];
      if (void 0 !== o) {
        if (void 0 === t) this.register(e);
        else {
          oe.isArray(t) ? r = t.concat(t.map(oe.camelCase)) : (i = oe.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(we) || [])), n = r.length;
          for (; n--;) delete o[r[n]]
        }(void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function(e) {
      var t = e[this.expando];
      return void 0 !== t && !oe.isEmptyObject(t)
    }
  };
  var ke = new a,
    Ne = new a,
    Ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Se = /[A-Z]/g;
  oe.extend({
    hasData: function(e) {
      return Ne.hasData(e) || ke.hasData(e)
    },
    data: function(e, t, n) {
      return Ne.access(e, t, n)
    },
    removeData: function(e, t) {
      Ne.remove(e, t)
    },
    _data: function(e, t, n) {
      return ke.access(e, t, n)
    },
    _removeData: function(e, t) {
      ke.remove(e, t)
    }
  }), oe.fn.extend({
    data: function(e, t) {
      var n, r, i, o = this[0],
        s = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (i = Ne.get(o), 1 === o.nodeType && !ke.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = oe.camelCase(r.slice(5)), u(o, r, i[r])));
          ke.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof e ? this.each(function() {
        Ne.set(this, e)
      }) : Te(this, function(t) {
        var n, r;
        if (o && void 0 === t) {
          if (n = Ne.get(o, e) || Ne.get(o, e.replace(Se, "-$&").toLowerCase()), void 0 !== n) return n;
          if (r = oe.camelCase(e), n = Ne.get(o, r), void 0 !== n) return n;
          if (n = u(o, r, void 0), void 0 !== n) return n
        } else r = oe.camelCase(e), this.each(function() {
          var n = Ne.get(this, r);
          Ne.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Ne.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    },
    removeData: function(e) {
      return this.each(function() {
        Ne.remove(this, e)
      })
    }
  }), oe.extend({
    queue: function(e, t, n) {
      var r;
      return e ? (t = (t || "fx") + "queue", r = ke.get(e, t), n && (!r || oe.isArray(n) ? r = ke.access(e, t, oe.makeArray(n)) : r.push(n)), r || []) : void 0
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = oe.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = oe._queueHooks(e, t),
        s = function() {
          oe.dequeue(e, t)
        };
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return ke.get(e, n) || ke.access(e, n, {
        empty: oe.Callbacks("once memory").add(function() {
          ke.remove(e, [t + "queue", n])
        })
      })
    }
  }), oe.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var n = oe.queue(this, e, t);
        oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        oe.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, r = 1,
        i = oe.Deferred(),
        o = this,
        s = this.length,
        a = function() {
          --r || i.resolveWith(o, [o])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ke.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
      return a(), i.promise(t)
    }
  });
  var De = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    je = new RegExp("^(?:([+-])=|)(" + De + ")([a-z%]*)$", "i"),
    Le = ["Top", "Right", "Bottom", "Left"],
    _e = function(e, t) {
      return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
    },
    He = /^(?:checkbox|radio)$/i,
    Oe = /<([\w:-]+)/,
    qe = /^$|\/(?:java|ecma)script/i,
    Ie = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td;
  var Pe = /<|&#?\w+;/;
  ! function() {
    var e = V.createDocumentFragment(),
      t = e.appendChild(V.createElement("div")),
      n = V.createElement("input");
    n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var Fe = /^key/,
    Re = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Me = /^([^.]*)(?:\.(.+)|)/;
  oe.event = {
    global: {},
    add: function(e, t, n, r, i) {
      var o, s, a, u, l, c, f, d, p, h, g, v = ke.get(e);
      if (v)
        for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = oe.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
            return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
          }), t = (t || "").match(we) || [""], l = t.length; l--;) a = Me.exec(t[l]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (f = oe.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = oe.event.special[p] || {}, c = oe.extend({
          type: p,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && oe.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), oe.event.global[p] = !0)
    },
    remove: function(e, t, n, r, i) {
      var o, s, a, u, l, c, f, d, p, h, g, v = ke.hasData(e) && ke.get(e);
      if (v && (u = v.events)) {
        for (t = (t || "").match(we) || [""], l = t.length; l--;)
          if (a = Me.exec(t[l]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
            for (f = oe.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
            s && !d.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || oe.removeEvent(e, p, v.handle), delete u[p])
          } else
            for (p in u) oe.event.remove(e, p + t[l], n, r, !0);
        oe.isEmptyObject(u) && ke.remove(e, "handle events")
      }
    },
    dispatch: function(e) {
      e = oe.event.fix(e);
      var t, n, r, i, o, s = [],
        a = Y.call(arguments),
        u = (ke.get(this, "events") || {})[e.type] || [],
        l = oe.event.special[e.type] || {};
      if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
        for (s = oe.event.handlers.call(this, e, u), t = 0;
          (i = s[t++]) && !e.isPropagationStopped();)
          for (e.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result
      }
    },
    handlers: function(e, t) {
      var n, r, i, o, s = [],
        a = t.delegateCount,
        u = e.target;
      if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
            for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? oe(i, this).index(u) > -1 : oe.find(i, this, null, [u]).length), r[i] && r.push(o);
            r.length && s.push({
              elem: u,
              handlers: r
            })
          }
      return a < t.length && s.push({
        elem: this,
        handlers: t.slice(a)
      }), s
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var n, r, i, o = t.button;
        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || V, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
      }
    },
    fix: function(e) {
      if (e[oe.expando]) return e;
      var t, n, r, i = e.type,
        o = e,
        s = this.fixHooks[i];
      for (s || (this.fixHooks[i] = s = Re.test(i) ? this.mouseHooks : Fe.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
      return e.target || (e.target = V), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          return this !== g() && this.focus ? (this.focus(), !1) : void 0
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === g() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : void 0
        },
        _default: function(e) {
          return oe.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, oe.removeEvent = function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, oe.Event = function(e, t) {
    return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
  }, oe.Event.prototype = {
    constructor: oe.Event,
    isDefaultPrevented: h,
    isPropagationStopped: h,
    isImmediatePropagationStopped: h,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = p, e && e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = p, e && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, oe.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    oe.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = this,
          i = e.relatedTarget,
          o = e.handleObj;
        return i && (i === r || oe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), oe.fn.extend({
    on: function(e, t, n, r) {
      return v(this, e, t, n, r)
    },
    one: function(e, t, n, r) {
      return v(this, e, t, n, r, 1)
    },
    off: function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, oe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
        oe.event.remove(this, e, n, t)
      })
    }
  });
  var We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    $e = /<script|<style|<link/i,
    Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ue = /^true\/(.*)/,
    ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  oe.extend({
    htmlPrefilter: function(e) {
      return e.replace(We, "<$1></$2>")
    },
    clone: function(e, t, n) {
      var r, i, o, s, a = e.cloneNode(!0),
        u = oe.contains(e.ownerDocument, e);
      if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
        for (s = c(a), o = c(e), r = 0, i = o.length; i > r; r++) w(o[r], s[r]);
      if (t)
        if (n)
          for (o = o || c(e), s = s || c(a), r = 0, i = o.length; i > r; r++) b(o[r], s[r]);
        else b(e, a);
      return s = c(a, "script"), s.length > 0 && f(s, !u && c(e, "script")), a
    },
    cleanData: function(e) {
      for (var t, n, r, i = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Ee(n)) {
          if (t = n[ke.expando]) {
            if (t.events)
              for (r in t.events) i[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, t.handle);
            n[ke.expando] = void 0
          }
          n[Ne.expando] && (n[Ne.expando] = void 0)
        }
    }
  }), oe.fn.extend({
    domManip: C,
    detach: function(e) {
      return T(this, e, !0)
    },
    remove: function(e) {
      return T(this, e)
    },
    text: function(e) {
      return Te(this, function(e) {
        return void 0 === e ? oe.text(this) : this.empty().each(function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function() {
      return C(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = m(this, e);
          t.appendChild(e)
        }
      })
    },
    prepend: function() {
      return C(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = m(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return C(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return C(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(c(e, !1)), e.textContent = "");
      return this
    },
    clone: function(e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
        return oe.clone(this, e, t)
      })
    },
    html: function(e) {
      return Te(this, function(e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !$e.test(e) && !Ie[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = oe.htmlPrefilter(e);
          try {
            for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(c(t, !1)), t.innerHTML = e);
            t = 0
          } catch (i) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = [];
      return C(this, arguments, function(t) {
        var n = this.parentNode;
        oe.inArray(this, e) < 0 && (oe.cleanData(c(this)), n && n.replaceChild(t, this))
      }, e)
    }
  }), oe.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    oe.fn[e] = function(e) {
      for (var n, r = [], i = oe(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), oe(i[s])[t](n), K.apply(r, n.get());
      return this.pushStack(r)
    }
  });
  var Xe, Qe = {
      HTML: "block",
      BODY: "block"
    },
    Ge = /^margin/,
    Ve = new RegExp("^(" + De + ")(?!px)[a-z%]+$", "i"),
    Ye = function(t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e), n.getComputedStyle(t)
    },
    Je = function(e, t, n, r) {
      var i, o, s = {};
      for (o in t) s[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = s[o];
      return i
    },
    Ke = V.documentElement;
  ! function() {
    function t() {
      a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ke.appendChild(s);
      var t = e.getComputedStyle(a);
      n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, a.style.marginRight = "50%", i = "4px" === t.marginRight, Ke.removeChild(s)
    }
    var n, r, i, o, s = V.createElement("div"),
      a = V.createElement("div");
    a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), oe.extend(re, {
      pixelPosition: function() {
        return t(), n
      },
      boxSizingReliable: function() {
        return null == r && t(), r
      },
      pixelMarginRight: function() {
        return null == r && t(), i
      },
      reliableMarginLeft: function() {
        return null == r && t(), o
      },
      reliableMarginRight: function() {
        var t, n = a.appendChild(V.createElement("div"));
        return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ke.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Ke.removeChild(s), a.removeChild(n), t
      }
    }))
  }();
  var Ze = /^(none|table(?!-c[ea]).+)/,
    et = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    tt = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    nt = ["Webkit", "O", "Moz", "ms"],
    rt = V.createElement("div").style;
  oe.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = N(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, s, a = oe.camelCase(t),
          u = e.style;
        return t = oe.cssProps[a] || (oe.cssProps[a] = S(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = je.exec(n)) && i[1] && (n = l(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (oe.cssNumber[a] ? "" : "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)), void 0)
      }
    },
    css: function(e, t, n, r) {
      var i, o, s, a = oe.camelCase(t);
      return t = oe.cssProps[a] || (oe.cssProps[a] = S(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = N(e, t, r)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
    }
  }), oe.each(["height", "width"], function(e, t) {
    oe.cssHooks[t] = {
      get: function(e, n, r) {
        return n ? Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Je(e, et, function() {
          return L(e, t, r)
        }) : L(e, t, r) : void 0
      },
      set: function(e, n, r) {
        var i, o = r && Ye(e),
          s = r && j(e, t, r, "border-box" === oe.css(e, "boxSizing", !1, o), o);
        return s && (i = je.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), D(e, n, s)
      }
    }
  }), oe.cssHooks.marginLeft = A(re.reliableMarginLeft, function(e, t) {
    return t ? (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {
      marginLeft: 0
    }, function() {
      return e.getBoundingClientRect().left
    })) + "px" : void 0
  }), oe.cssHooks.marginRight = A(re.reliableMarginRight, function(e, t) {
    return t ? Je(e, {
      display: "inline-block"
    }, N, [e, "marginRight"]) : void 0
  }), oe.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    oe.cssHooks[e + t] = {
      expand: function(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Le[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    }, Ge.test(e) || (oe.cssHooks[e + t].set = D)
  }), oe.fn.extend({
    css: function(e, t) {
      return Te(this, function(e, t, n) {
        var r, i, o = {},
          s = 0;
        if (oe.isArray(t)) {
          for (r = Ye(e), i = t.length; i > s; s++) o[t[s]] = oe.css(e, t[s], !1, r);
          return o
        }
        return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
      }, e, t, arguments.length > 1)
    },
    show: function() {
      return _(this, !0)
    },
    hide: function() {
      return _(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        _e(this) ? oe(this).show() : oe(this).hide()
      })
    }
  }), oe.Tween = H, H.prototype = {
    constructor: H,
    init: function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (oe.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = H.propHooks[this.prop];
      return e && e.get ? e.get(this) : H.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = H.propHooks[this.prop];
      return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
    }
  }, H.prototype.init.prototype = H.prototype, H.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
      },
      set: function(e) {
        oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, oe.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, oe.fx = H.prototype.init, oe.fx.step = {};
  var it, ot, st = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  oe.Animation = oe.extend(R, {
      tweeners: {
        "*": [function(e, t) {
          var n = this.createTween(e, t);
          return l(n.elem, e, je.exec(t), n), n
        }]
      },
      tweener: function(e, t) {
        oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(we);
        for (var n, r = 0, i = e.length; i > r; r++) n = e[r], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(t)
      },
      prefilters: [P],
      prefilter: function(e, t) {
        t ? R.prefilters.unshift(e) : R.prefilters.push(e)
      }
    }), oe.speed = function(e, t, n) {
      var r = e && "object" == typeof e ? oe.extend({}, e) : {
        complete: n || !n && t || oe.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !oe.isFunction(t) && t
      };
      return r.duration = oe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in oe.fx.speeds ? oe.fx.speeds[r.duration] : oe.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        oe.isFunction(r.old) && r.old.call(this), r.queue && oe.dequeue(this, r.queue)
      }, r
    }, oe.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(_e).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r)
      },
      animate: function(e, t, n, r) {
        var i = oe.isEmptyObject(e),
          o = oe.speed(t, n, r),
          s = function() {
            var t = R(this, oe.extend({}, e), o);
            (i || ke.get(this, "finish")) && t.stop(!0)
          };
        return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function(e, t, n) {
        var r = function(e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
          var t = !0,
            i = null != e && e + "queueHooks",
            o = oe.timers,
            s = ke.get(this);
          if (i) s[i] && s[i].stop && r(s[i]);
          else
            for (i in s) s[i] && s[i].stop && at.test(i) && r(s[i]);
          for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
          !t && n || oe.dequeue(this, e)
        })
      },
      finish: function(e) {
        return e !== !1 && (e = e || "fx"), this.each(function() {
          var t, n = ke.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = oe.timers,
            s = r ? r.length : 0;
          for (n.finish = !0, oe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
          delete n.finish
        })
      }
    }), oe.each(["toggle", "show", "hide"], function(e, t) {
      var n = oe.fn[t];
      oe.fn[t] = function(e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, r, i)
      }
    }), oe.each({
      slideDown: q("show"),
      slideUp: q("hide"),
      slideToggle: q("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      oe.fn[e] = function(e, n, r) {
        return this.animate(t, e, n, r);
      }
    }), oe.timers = [], oe.fx.tick = function() {
      var e, t = 0,
        n = oe.timers;
      for (it = oe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
      n.length || oe.fx.stop(), it = void 0
    }, oe.fx.timer = function(e) {
      oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
    }, oe.fx.interval = 13, oe.fx.start = function() {
      ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
    }, oe.fx.stop = function() {
      e.clearInterval(ot), ot = null
    }, oe.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, oe.fn.delay = function(t, n) {
      return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
        var i = e.setTimeout(n, t);
        r.stop = function() {
          e.clearTimeout(i)
        }
      })
    },
    function() {
      var e = V.createElement("input"),
        t = V.createElement("select"),
        n = t.appendChild(V.createElement("option"));
      e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = V.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value
    }();
  var ut, lt = oe.expr.attrHandle;
  oe.fn.extend({
    attr: function(e, t) {
      return Te(this, oe.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        oe.removeAttr(this, e)
      })
    }
  }), oe.extend({
    attr: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = oe.find.attr(e, t), null == r ? void 0 : r))
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function(e, t) {
      var n, r, i = 0,
        o = t && t.match(we);
      if (o && 1 === e.nodeType)
        for (; n = o[i++];) r = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
    }
  }), ut = {
    set: function(e, t, n) {
      return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = lt[t] || oe.find.attr;
    lt[t] = function(e, t, r) {
      var i, o;
      return r || (o = lt[t], lt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, lt[t] = o), i
    }
  });
  var ct = /^(?:input|select|textarea|button)$/i,
    ft = /^(?:a|area)$/i;
  oe.fn.extend({
    prop: function(e, t) {
      return Te(this, oe.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[oe.propFix[e] || e]
      })
    }
  }), oe.extend({
    prop: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, i = oe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = oe.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), re.optSelected || (oe.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    oe.propFix[this.toLowerCase()] = this
  });
  var dt = /[\t\r\n\f]/g;
  oe.fn.extend({
    addClass: function(e) {
      var t, n, r, i, o, s, a, u = 0;
      if (oe.isFunction(e)) return this.each(function(t) {
        oe(this).addClass(e.call(this, t, M(this)))
      });
      if ("string" == typeof e && e)
        for (t = e.match(we) || []; n = this[u++];)
          if (i = M(n), r = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
            for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            a = oe.trim(r), i !== a && n.setAttribute("class", a)
          }
      return this
    },
    removeClass: function(e) {
      var t, n, r, i, o, s, a, u = 0;
      if (oe.isFunction(e)) return this.each(function(t) {
        oe(this).removeClass(e.call(this, t, M(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(we) || []; n = this[u++];)
          if (i = M(n), r = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
            for (s = 0; o = t[s++];)
              for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
            a = oe.trim(r), i !== a && n.setAttribute("class", a)
          }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
        oe(this).toggleClass(e.call(this, n, M(this), t), t)
      }) : this.each(function() {
        var t, r, i, o;
        if ("string" === n)
          for (r = 0, i = oe(this), o = e.match(we) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
        else void 0 !== e && "boolean" !== n || (t = M(this), t && ke.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : ke.get(this, "__className__") || ""))
      })
    },
    hasClass: function(e) {
      var t, n, r = 0;
      for (t = " " + e + " "; n = this[r++];)
        if (1 === n.nodeType && (" " + M(n) + " ").replace(dt, " ").indexOf(t) > -1) return !0;
      return !1
    }
  });
  var pt = /\r/g,
    ht = /[\x20\t\r\n\f]+/g;
  oe.fn.extend({
    val: function(e) {
      var t, n, r, i = this[0]; {
        if (arguments.length) return r = oe.isFunction(e), this.each(function(n) {
          var i;
          1 === this.nodeType && (i = r ? e.call(this, n, oe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : oe.isArray(i) && (i = oe.map(i, function(e) {
            return null == e ? "" : e + ""
          })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
        });
        if (i) return t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(pt, "") : null == n ? "" : n)
      }
    }
  }), oe.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = oe.find.attr(e, "value");
          return null != t ? t : oe.trim(oe.text(e)).replace(ht, " ")
        }
      },
      select: {
        get: function(e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
            if (n = r[u], (n.selected || u === i) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
              if (t = oe(n).val(), o) return t;
              s.push(t)
            }
          return s
        },
        set: function(e, t) {
          for (var n, r, i = e.options, o = oe.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = oe.inArray(oe.valHooks.option.get(r), o) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), oe.each(["radio", "checkbox"], function() {
    oe.valHooks[this] = {
      set: function(e, t) {
        return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
      }
    }, re.checkOn || (oe.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var gt = /^(?:focusinfocus|focusoutblur)$/;
  oe.extend(oe.event, {
    trigger: function(t, n, r, i) {
      var o, s, a, u, l, c, f, d = [r || V],
        p = ne.call(t, "type") ? t.type : t,
        h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = a = r = r || V, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(p + oe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[oe.expando] ? t : new oe.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : oe.makeArray(n, [t]), f = oe.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
        if (!i && !f.noBubble && !oe.isWindow(r)) {
          for (u = f.delegateType || p, gt.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
          a === (r.ownerDocument || V) && d.push(a.defaultView || a.parentWindow || e)
        }
        for (o = 0;
          (s = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || p, c = (ke.get(s, "events") || {})[t.type] && ke.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Ee(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
        return t.type = p, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Ee(r) || l && oe.isFunction(r[p]) && !oe.isWindow(r) && (a = r[l], a && (r[l] = null), oe.event.triggered = p, r[p](), oe.event.triggered = void 0, a && (r[l] = a)), t.result
      }
    },
    simulate: function(e, t, n) {
      var r = oe.extend(new oe.Event, n, {
        type: e,
        isSimulated: !0
      });
      oe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
    }
  }), oe.fn.extend({
    trigger: function(e, t) {
      return this.each(function() {
        oe.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      return n ? oe.event.trigger(e, t, n, !0) : void 0
    }
  }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    oe.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), oe.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), re.focusin = "onfocusin" in e, re.focusin || oe.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {
      oe.event.simulate(t, e.target, oe.event.fix(e))
    };
    oe.event.special[t] = {
      setup: function() {
        var r = this.ownerDocument || this,
          i = ke.access(r, t);
        i || r.addEventListener(e, n, !0), ke.access(r, t, (i || 0) + 1)
      },
      teardown: function() {
        var r = this.ownerDocument || this,
          i = ke.access(r, t) - 1;
        i ? ke.access(r, t, i) : (r.removeEventListener(e, n, !0), ke.remove(r, t))
      }
    }
  });
  var vt = e.location,
    mt = oe.now(),
    yt = /\?/;
  oe.parseJSON = function(e) {
    return JSON.parse(e + "")
  }, oe.parseXML = function(t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (r) {
      n = void 0
    }
    return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
  };
  var xt = /#.*$/,
    bt = /([?&])_=[^&]*/,
    wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Tt = /^(?:GET|HEAD)$/,
    Et = /^\/\//,
    kt = {},
    Nt = {},
    At = "*/".concat("*"),
    St = V.createElement("a");
  St.href = vt.href, oe.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: vt.href,
      type: "GET",
      isLocal: Ct.test(vt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": At,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": oe.parseJSON,
        "text xml": oe.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? B(B(e, oe.ajaxSettings), t) : B(oe.ajaxSettings, e)
    },
    ajaxPrefilter: W(kt),
    ajaxTransport: W(Nt),
    ajax: function(t, n) {
      function r(t, n, r, a) {
        var l, f, y, x, w, T = n;
        2 !== b && (b = 2, u && e.clearTimeout(u), i = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (x = U(d, C, r)), x = z(d, x, C, l), l ? (d.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (oe.etag[o] = w)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, f = x.data, y = x.error, l = !y)) : (y = T, !t && T || (T = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? g.resolveWith(p, [f, T, C]) : g.rejectWith(p, [C, T, y]), C.statusCode(m), m = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [C, d, l ? f : y]), v.fireWith(p, [C, T]), c && (h.trigger("ajaxComplete", [C, d]), --oe.active || oe.event.trigger("ajaxStop")))
      }
      "object" == typeof t && (n = t, t = void 0), n = n || {};
      var i, o, s, a, u, l, c, f, d = oe.ajaxSetup({}, n),
        p = d.context || d,
        h = d.context && (p.nodeType || p.jquery) ? oe(p) : oe.event,
        g = oe.Deferred(),
        v = oe.Callbacks("once memory"),
        m = d.statusCode || {},
        y = {},
        x = {},
        b = 0,
        w = "canceled",
        C = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === b) {
              if (!a)
                for (a = {}; t = wt.exec(s);) a[t[1].toLowerCase()] = t[2];
              t = a[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === b ? s : null
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            return b || (e = x[n] = x[n] || e, y[e] = t), this
          },
          overrideMimeType: function(e) {
            return b || (d.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (2 > b)
                for (t in e) m[t] = [m[t], e[t]];
              else C.always(e[C.status]);
            return this
          },
          abort: function(e) {
            var t = e || w;
            return i && i.abort(t), r(0, t), this
          }
        };
      if (g.promise(C).complete = v.add, C.success = C.done, C.error = C.fail, d.url = ((t || d.url || vt.href) + "").replace(xt, "").replace(Et, vt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(we) || [""], null == d.crossDomain) {
        l = V.createElement("a");
        try {
          l.href = d.url, l.href = l.href, d.crossDomain = St.protocol + "//" + St.host != l.protocol + "//" + l.host
        } catch (T) {
          d.crossDomain = !0
        }
      }
      if (d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), $(kt, d, n, C), 2 === b) return C;
      c = oe.event && d.global, c && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Tt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (yt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = bt.test(o) ? o.replace(bt, "$1_=" + mt++) : o + (yt.test(o) ? "&" : "?") + "_=" + mt++)), d.ifModified && (oe.lastModified[o] && C.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && C.setRequestHeader("If-None-Match", oe.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + At + "; q=0.01" : "") : d.accepts["*"]);
      for (f in d.headers) C.setRequestHeader(f, d.headers[f]);
      if (d.beforeSend && (d.beforeSend.call(p, C, d) === !1 || 2 === b)) return C.abort();
      w = "abort";
      for (f in {
          success: 1,
          error: 1,
          complete: 1
        }) C[f](d[f]);
      if (i = $(Nt, d, n, C)) {
        if (C.readyState = 1, c && h.trigger("ajaxSend", [C, d]), 2 === b) return C;
        d.async && d.timeout > 0 && (u = e.setTimeout(function() {
          C.abort("timeout")
        }, d.timeout));
        try {
          b = 1, i.send(y, r)
        } catch (T) {
          if (!(2 > b)) throw T;
          r(-1, T)
        }
      } else r(-1, "No Transport");
      return C
    },
    getJSON: function(e, t, n) {
      return oe.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return oe.get(e, void 0, t, "script")
    }
  }), oe.each(["get", "post"], function(e, t) {
    oe[t] = function(e, n, r, i) {
      return oe.isFunction(n) && (i = i || r, r = n, n = void 0), oe.ajax(oe.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, oe.isPlainObject(e) && e))
    }
  }), oe._evalUrl = function(e) {
    return oe.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, oe.fn.extend({
    wrapAll: function(e) {
      var t;
      return oe.isFunction(e) ? this.each(function(t) {
        oe(this).wrapAll(e.call(this, t))
      }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this)
    },
    wrapInner: function(e) {
      return oe.isFunction(e) ? this.each(function(t) {
        oe(this).wrapInner(e.call(this, t))
      }) : this.each(function() {
        var t = oe(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = oe.isFunction(e);
      return this.each(function(n) {
        oe(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
      }).end()
    }
  }), oe.expr.filters.hidden = function(e) {
    return !oe.expr.filters.visible(e)
  }, oe.expr.filters.visible = function(e) {
    return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
  };
  var Dt = /%20/g,
    jt = /\[\]$/,
    Lt = /\r?\n/g,
    _t = /^(?:submit|button|image|reset|file)$/i,
    Ht = /^(?:input|select|textarea|keygen)/i;
  oe.param = function(e, t) {
    var n, r = [],
      i = function(e, t) {
        t = oe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
      i(this.name, this.value)
    });
    else
      for (n in e) X(n, e[n], t, i);
    return r.join("&").replace(Dt, "+")
  }, oe.fn.extend({
    serialize: function() {
      return oe.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = oe.prop(this, "elements");
        return e ? oe.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !oe(this).is(":disabled") && Ht.test(this.nodeName) && !_t.test(e) && (this.checked || !He.test(e))
      }).map(function(e, t) {
        var n = oe(this).val();
        return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(Lt, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(Lt, "\r\n")
        }
      }).get()
    }
  }), oe.ajaxSettings.xhr = function() {
    try {
      return new e.XMLHttpRequest
    } catch (t) {}
  };
  var Ot = {
      0: 200,
      1223: 204
    },
    qt = oe.ajaxSettings.xhr();
  re.cors = !!qt && "withCredentials" in qt, re.ajax = qt = !!qt, oe.ajaxTransport(function(t) {
    var n, r;
    return re.cors || qt && !t.crossDomain ? {
      send: function(i, o) {
        var s, a = t.xhr();
        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
          for (s in t.xhrFields) a[s] = t.xhrFields[s];
        t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
        for (s in i) a.setRequestHeader(s, i[s]);
        n = function(e) {
          return function() {
            n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ot[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
              binary: a.response
            } : {
              text: a.responseText
            }, a.getAllResponseHeaders()))
          }
        }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
          4 === a.readyState && e.setTimeout(function() {
            n && r()
          })
        }, n = n("abort");
        try {
          a.send(t.hasContent && t.data || null)
        } catch (u) {
          if (n) throw u
        }
      },
      abort: function() {
        n && n()
      }
    } : void 0
  }), oe.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(e) {
        return oe.globalEval(e), e
      }
    }
  }), oe.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), oe.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function(r, i) {
          t = oe("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", n = function(e) {
            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
          }), V.head.appendChild(t[0])
        },
        abort: function() {
          n && n()
        }
      }
    }
  });
  var It = [],
    Pt = /(=)\?(?=&|$)|\?\?/;
  oe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = It.pop() || oe.expando + "_" + mt++;
      return this[e] = !0, e
    }
  }), oe.ajaxPrefilter("json jsonp", function(t, n, r) {
    var i, o, s, a = t.jsonp !== !1 && (Pt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(t.data) && "data");
    return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Pt, "$1" + i) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
      return s || oe.error(i + " was not called"), s[0]
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
      s = arguments
    }, r.always(function() {
      void 0 === o ? oe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, It.push(i)), s && oe.isFunction(o) && o(s[0]), s = o = void 0
    }), "script") : void 0
  }), oe.parseHTML = function(e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || V;
    var r = he.exec(e),
      i = !n && [];
    return r ? [t.createElement(r[1])] : (r = d([e], t, i), i && i.length && oe(i).remove(), oe.merge([], r.childNodes))
  };
  var Ft = oe.fn.load;
  oe.fn.load = function(e, t, n) {
    if ("string" != typeof e && Ft) return Ft.apply(this, arguments);
    var r, i, o, s = this,
      a = e.indexOf(" ");
    return a > -1 && (r = oe.trim(e.slice(a)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && oe.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function(e) {
      o = arguments, s.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e)
    }).always(n && function(e, t) {
      s.each(function() {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    oe.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), oe.expr.filters.animated = function(e) {
    return oe.grep(oe.timers, function(t) {
      return e === t.elem
    }).length
  }, oe.offset = {
    setOffset: function(e, t, n) {
      var r, i, o, s, a, u, l, c = oe.css(e, "position"),
        f = oe(e),
        d = {};
      "static" === c && (e.style.position = "relative"), a = f.offset(), o = oe.css(e, "top"), u = oe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
    }
  }, oe.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function(t) {
        oe.offset.setOffset(this, e, t)
      });
      var t, n, r = this[0],
        i = {
          top: 0,
          left: 0
        },
        o = r && r.ownerDocument;
      if (o) return t = o.documentElement, oe.contains(t, r) ? (i = r.getBoundingClientRect(), n = Q(o), {
        top: i.top + n.pageYOffset - t.clientTop,
        left: i.left + n.pageXOffset - t.clientLeft
      }) : i
    },
    position: function() {
      if (this[0]) {
        var e, t, n = this[0],
          r = {
            top: 0,
            left: 0
          };
        return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (r = e.offset()), r.top += oe.css(e[0], "borderTopWidth", !0), r.left += oe.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - r.top - oe.css(n, "marginTop", !0),
          left: t.left - r.left - oe.css(n, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
        return e || Ke
      })
    }
  }), oe.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var n = "pageYOffset" === t;
    oe.fn[e] = function(r) {
      return Te(this, function(e, r, i) {
        var o = Q(e);
        return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
      }, e, r, arguments.length)
    }
  }), oe.each(["top", "left"], function(e, t) {
    oe.cssHooks[t] = A(re.pixelPosition, function(e, n) {
      return n ? (n = N(e, t), Ve.test(n) ? oe(e).position()[t] + "px" : n) : void 0
    })
  }), oe.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    oe.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, r) {
      oe.fn[r] = function(r, i) {
        var o = arguments.length && (n || "boolean" != typeof r),
          s = n || (r === !0 || i === !0 ? "margin" : "border");
        return Te(this, function(t, n, r) {
          var i;
          return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? oe.css(t, n, s) : oe.style(t, n, r, s)
        }, t, o ? r : void 0, o, null)
      }
    })
  }), oe.fn.extend({
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    },
    size: function() {
      return this.length
    }
  }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return oe
  });
  var Rt = e.jQuery,
    Mt = e.$;
  return oe.noConflict = function(t) {
    return e.$ === oe && (e.$ = Mt), t && e.jQuery === oe && (e.jQuery = Rt), oe
  }, t || (e.jQuery = e.$ = oe), oe
}),
function(e) {
  if ("function" == typeof define && define.amd) define(e);
  else if ("object" == typeof exports) module.exports = e();
  else {
    var t = window.Cookies,
      n = window.Cookies = e();
    n.noConflict = function() {
      return window.Cookies = t, n
    }
  }
}(function() {
  function e() {
    for (var e = 0, t = {}; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) t[r] = n[r]
    }
    return t
  }

  function t(n) {
    function r(t, i, o) {
      var s;
      if ("undefined" != typeof document) {
        if (arguments.length > 1) {
          if (o = e({
              path: "/"
            }, r.defaults, o), "number" == typeof o.expires) {
            var a = new Date;
            a.setMilliseconds(a.getMilliseconds() + 864e5 * o.expires), o.expires = a
          }
          try {
            s = JSON.stringify(i), /^[\{\[]/.test(s) && (i = s)
          } catch (u) {}
          return i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", i, o.expires && "; expires=" + o.expires.toUTCString(), o.path && "; path=" + o.path, o.domain && "; domain=" + o.domain, o.secure ? "; secure" : ""].join("")
        }
        t || (s = {});
        for (var l = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, f = 0; f < l.length; f++) {
          var d = l[f].split("="),
            p = d[0].replace(c, decodeURIComponent),
            h = d.slice(1).join("=");
          '"' === h.charAt(0) && (h = h.slice(1, -1));
          try {
            if (h = n.read ? n.read(h, p) : n(h, p) || h.replace(c, decodeURIComponent), this.json) try {
              h = JSON.parse(h)
            } catch (u) {}
            if (t === p) {
              s = h;
              break
            }
            t || (s[p] = h)
          } catch (u) {}
        }
        return s
      }
    }
    return r.set = r, r.get = function(e) {
      return r(e)
    }, r.getJSON = function() {
      return r.apply({
        json: !0
      }, [].slice.call(arguments))
    }, r.defaults = {}, r.remove = function(t, n) {
      r(t, "", e(n, {
        expires: -1
      }))
    }, r.withConverter = t, r
  }
  return t(function() {})
});
var Util = function(e) {
    function t(e) {
      return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }

    function n(e) {
      return (e[0] || e).nodeType
    }

    function r() {
      return {
        bindType: a.end,
        delegateType: a.end,
        handle: function(t) {
          return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
        }
      }
    }

    function i() {
      if (window.QUnit) return !1;
      var e = document.createElement("bootstrap");
      for (var t in u)
        if (void 0 !== e.style[t]) return {
          end: u[t]
        };
      return !1
    }

    function o(t) {
      var n = this,
        r = !1;
      return e(this).one(l.TRANSITION_END, function() {
        r = !0
      }), setTimeout(function() {
        r || l.triggerTransitionEnd(n)
      }, t), this
    }

    function s() {
      a = i(), e.fn.emulateTransitionEnd = o, l.supportsTransitionEnd() && (e.event.special[l.TRANSITION_END] = r())
    }
    var a = !1,
      u = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      },
      l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
          do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
          return e
        },
        getSelectorFromElement: function(e) {
          var t = e.getAttribute("data-target");
          return t || (t = e.getAttribute("href") || "", t = /^#[a-z]/i.test(t) ? t : null), t
        },
        reflow: function(e) {
          new Function("bs", "return bs")(e.offsetHeight)
        },
        triggerTransitionEnd: function(t) {
          e(t).trigger(a.end)
        },
        supportsTransitionEnd: function() {
          return Boolean(a)
        },
        typeCheckConfig: function(e, r, i) {
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o],
                a = r[o],
                u = void 0;
              if (u = a && n(a) ? "element" : t(a), !new RegExp(s).test(u)) throw new Error(e.toUpperCase() + ": " + ('Option "' + o + '" provided type "' + u + '" ') + ('but expected type "' + s + '".'))
            }
        }
      };
    return s(), l
  }(jQuery),
  _createClass = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(),
  Collapse = function(e) {
    var t = "collapse",
      n = "4.0.0-alpha",
      r = "bs.collapse",
      i = "." + r,
      o = ".data-api",
      s = e.fn[t],
      a = 600,
      u = {
        toggle: !0,
        parent: ""
      },
      l = {
        toggle: "boolean",
        parent: "string"
      },
      c = {
        SHOW: "show" + i,
        SHOWN: "shown" + i,
        HIDE: "hide" + i,
        HIDDEN: "hidden" + i,
        CLICK_DATA_API: "click" + i + o
      },
      f = {
        IN: "in",
        COLLAPSE: "collapse",
        COLLAPSING: "collapsing",
        COLLAPSED: "collapsed"
      },
      d = {
        WIDTH: "width",
        HEIGHT: "height"
      },
      p = {
        ACTIVES: ".panel > .in, .panel > .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]'
      },
      h = function() {
        function i(t, n) {
          _classCallCheck(this, i), this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],' + ('[data-toggle="collapse"][data-target="#' + t.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }
        return _createClass(i, [{
          key: "toggle",
          value: function() {
            e(this._element).hasClass(f.IN) ? this.hide() : this.show()
          }
        }, {
          key: "show",
          value: function() {
            var t = this;
            if (!this._isTransitioning && !e(this._element).hasClass(f.IN)) {
              var n = void 0,
                o = void 0;
              if (this._parent && (n = e.makeArray(e(p.ACTIVES)), n.length || (n = null)), !(n && (o = e(n).data(r), o && o._isTransitioning))) {
                var s = e.Event(c.SHOW);
                if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
                  n && (i._jQueryInterface.call(e(n), "hide"), o || e(n).data(r, null));
                  var u = this._getDimension();
                  e(this._element).removeClass(f.COLLAPSE).addClass(f.COLLAPSING), this._element.style[u] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && e(this._triggerArray).removeClass(f.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                  var l = function() {
                    e(t._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).addClass(f.IN), t._element.style[u] = "", t.setTransitioning(!1), e(t._element).trigger(c.SHOWN)
                  };
                  if (!Util.supportsTransitionEnd()) return void l();
                  var d = u[0].toUpperCase() + u.slice(1),
                    h = "scroll" + d;
                  e(this._element).one(Util.TRANSITION_END, l).emulateTransitionEnd(a), this._element.style[u] = this._element[h] + "px"
                }
              }
            }
          }
        }, {
          key: "hide",
          value: function() {
            var t = this;
            if (!this._isTransitioning && e(this._element).hasClass(f.IN)) {
              var n = e.Event(c.HIDE);
              if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                var r = this._getDimension(),
                  i = r === d.WIDTH ? "offsetWidth" : "offsetHeight";
                this._element.style[r] = this._element[i] + "px", Util.reflow(this._element), e(this._element).addClass(f.COLLAPSING).removeClass(f.COLLAPSE).removeClass(f.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && e(this._triggerArray).addClass(f.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                var o = function() {
                  t.setTransitioning(!1), e(t._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).trigger(c.HIDDEN)
                };
                return this._element.style[r] = 0, Util.supportsTransitionEnd() ? void e(this._element).one(Util.TRANSITION_END, o).emulateTransitionEnd(a) : void o()
              }
            }
          }
        }, {
          key: "setTransitioning",
          value: function(e) {
            this._isTransitioning = e
          }
        }, {
          key: "dispose",
          value: function() {
            e.removeData(this._element, r), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
          }
        }, {
          key: "_getConfig",
          value: function(n) {
            return n = e.extend({}, u, n), n.toggle = Boolean(n.toggle), Util.typeCheckConfig(t, n, l), n
          }
        }, {
          key: "_getDimension",
          value: function() {
            var t = e(this._element).hasClass(d.WIDTH);
            return t ? d.WIDTH : d.HEIGHT
          }
        }, {
          key: "_getParent",
          value: function() {
            var t = this,
              n = e(this._config.parent)[0],
              r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return e(n).find(r).each(function(e, n) {
              t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
            }), n
          }
        }, {
          key: "_addAriaAndCollapsedClass",
          value: function(t, n) {
            if (t) {
              var r = e(t).hasClass(f.IN);
              t.setAttribute("aria-expanded", r), n.length && e(n).toggleClass(f.COLLAPSED, !r).attr("aria-expanded", r)
            }
          }
        }], [{
          key: "_getTargetFromElement",
          value: function(t) {
            var n = Util.getSelectorFromElement(t);
            return n ? e(n)[0] : null
          }
        }, {
          key: "_jQueryInterface",
          value: function(t) {
            return this.each(function() {
              var n = e(this),
                o = n.data(r),
                s = e.extend({}, u, n.data(), "object" == typeof t && t);
              if (!o && s.toggle && /show|hide/.test(t) && (s.toggle = !1), o || (o = new i(this, s), n.data(r, o)), "string" == typeof t) {
                if (void 0 === o[t]) throw new Error('No method named "' + t + '"');
                o[t]()
              }
            })
          }
        }, {
          key: "VERSION",
          get: function() {
            return n
          }
        }, {
          key: "Default",
          get: function() {
            return u
          }
        }]), i
      }();
    return e(document).on(c.CLICK_DATA_API, p.DATA_TOGGLE, function(t) {
      t.preventDefault();
      var n = h._getTargetFromElement(this),
        i = e(n).data(r),
        o = i ? "toggle" : e(this).data();
      h._jQueryInterface.call(e(n), o)
    }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function() {
      return e.fn[t] = s, h._jQueryInterface
    }, h
  }(jQuery),
  $header = jQuery("#ggr_header");
! function(e) {
  "use strict";

  function t(t) {
    var r = e(t.target).scrollTop(),
      i = Math.min(n, r) / n,
      u = "rgba(" + o + "," + s + "," + a + "," + i + ")";
    $header.css({
      backgroundColor: u
    })
  }
  var n = 300,
    r = $header.css("backgroundColor"),
    i = r.match(/rgb[a]?\(([0-9]+),\s([0-9]+),\s([0-9]+)/),
    o = i[1],
    s = i[2],
    a = i[3];
  e(window).on("scroll.header-opacity-on-scrolling", t).trigger("scroll.header-opacity-on-scrolling")
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    var r = e(t.target).scrollTop(),
      i = $header.height(),
      o = n.offset().top - r - i,
      s = Math.min(0, o);
    $header.css({
      top: s
    })
  }
  var n = e(".header-against"),
    r = n.length > 0;
  r && e(window).on("scroll.header-collision-offset", t)
}(jQuery),
function(e) {
  "use strict";

  function t() {
    for (var e = Object.keys(r), t = 0; t < e.length; t++) r[e[t]] = decodeURIComponent(r[e[t]])
  }

  function n() {
    s.text(r.name), r.pictureUrl && o.css({
      backgroundImage: "url(" + r.pictureUrl + ")"
    })
  }
  var r = {
      name: Cookies.get("Name") || "My Gogoro",
      pictureUrl: Cookies.get("Picture")
    },
    i = void 0 !== Cookies.get("Login"),
    o = e(".current-user-pic"),
    s = e(".current-user-name");
  e("html").toggleClass("is-login", i), i && (t(), n())
}(jQuery),
function(e) {
  "use strict";

  function t() {
    s.removeClass("active"), u.removeClass("active"), a.removeClass("active")
  }

  function n() {
    t(), o.removeClass("ggr-header-opened"), c.collapse("hide"), l.remove(), f = null
  }

  function r(e) {
    var t = s.filter('[data-target="#' + e.attr("id") + '"]');
    a.css({
      height: e.outerHeight()
    }).addClass("active"), l.appendTo("body"), e.addClass("active"), t.addClass("active"), o.addClass("ggr-header-opened"), f = e
  }

  function i(i) {
    var o = e(e(i.target).data("target")),
      s = e(i.target);
    s.attr("href") || i.preventDefault(), i.stopPropagation(), o.is(f) ? n() : (t(), o.find(".familybrowser-list").length > 0 ? r(o) : n()),
      e(document).unbind("click.dismiss-familybrowser").one("click.dismiss-familybrowser", n)
  }
  var o = e("#ggr_header"),
    s = e('#ggr_header [data-toggle="familybrowser"]'),
    a = e("#ggr_familybrowser_wrap"),
    u = a.find(".familybrowser"),
    l = e("<div>", {
      id: "ggr_familybrowser_overlay"
    }),
    c = e("#ggr_nav_list"),
    f = null;
  s.on("click", i), c.on("show.bs.collapse", function() {
    setTimeout(function() {
      s.first().trigger("click")
    }, 100)
  }), a.on("hide.bs.collapse", function() {
    e("html").removeClass("ggr-gn-noscroll")
  }).on("show.bs.collapse", function() {
    e("html").addClass("ggr-gn-noscroll")
  }), e(window).on("scroll.familybrowser", n), e(window).on("resize.familybrowser", n)
}(jQuery),
function(e) {
  "use strict";
  var t = e("#ggr_directory .directory-section-title");
  e("#ggr_directory .directory-section");
  t.on("click", function() {
    var t = e(this).closest(".directory-section");
    t.toggleClass("active")
  })
}(jQuery),
function(e) {
  "use strict";

  function t(e) {
    var t = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return t.test(e)
  }

  function n(e) {
    var t = a.find('[type="email"]'),
      n = a.find('[type="submit"]');
    t.val(e).change(), n.trigger("click")
  }

  function r(e) {
    e.preventDefault();
    var r = o.val(),
      a = t(r);
    a ? (i.addClass(s[1]), n(r)) : i.addClass(s[0]), setTimeout(function() {
      i.removeClass(s.join(" ")), a && o.val("").blur()
    }, 3e3)
  }
  var i = e("#ggr_directory .directory-subscribe-form"),
    o = e('#ggr_directory input[type="email"]'),
    s = ["invalid", "valid"],
    a = e(".directory-subscribe-form-hubspot-wrap");
  i.on("submit", r)
}(jQuery),
function(e) {
  "use strict";

  function t(e) {
    window.location.href = i[r.val()]
  }
  var n = e("html").attr("lang"),
    r = e("#ggr_footer .locale"),
    i = {
      en: "/",
      "en-tw": "/tw/en/",
      "zh-tw": "/tw/"
    };
  ! function() {
    var t = e("<option>", {
      value: ""
    });
    "zh-tw" === n ? t.text("Language") : t.text("語言"), r.prepend(t).val("")
  }(), r.on("change", t)
}(jQuery);
//# sourceMappingURL=layout.js.map
