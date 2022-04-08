/*! highlight.js v9.15.8 | BSD3 License | git.io/hljslicense */
!(function (e) {
  const n =
    (typeof window === "object" && window) ||
    (typeof self === "object" && self);
  typeof exports !== "undefined"
    ? e(exports)
    : n &&
      ((n.hljs = e({})),
      typeof define === "function" &&
        define.amd &&
        define([], function () {
          return n.hljs;
        }));
})(function (a) {
  const f = [];
  const u = Object.keys;
  const N = {};
  const c = {};
  const n = /^(no-?highlight|plain|text)$/i;
  const s = /\blang(?:uage)?-([\w-]+)\b/i;
  const t = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;
  const r = {
    case_insensitive: "cI",
    lexemes: "l",
    contains: "c",
    keywords: "k",
    subLanguage: "sL",
    className: "cN",
    begin: "b",
    beginKeywords: "bK",
    end: "e",
    endsWithParent: "eW",
    illegal: "i",
    excludeBegin: "eB",
    excludeEnd: "eE",
    returnBegin: "rB",
    returnEnd: "rE",
    relevance: "r",
    variants: "v",
    IDENT_RE: "IR",
    UNDERSCORE_IDENT_RE: "UIR",
    NUMBER_RE: "NR",
    C_NUMBER_RE: "CNR",
    BINARY_NUMBER_RE: "BNR",
    RE_STARTERS_RE: "RSR",
    BACKSLASH_ESCAPE: "BE",
    APOS_STRING_MODE: "ASM",
    QUOTE_STRING_MODE: "QSM",
    PHRASAL_WORDS_MODE: "PWM",
    C_LINE_COMMENT_MODE: "CLCM",
    C_BLOCK_COMMENT_MODE: "CBCM",
    HASH_COMMENT_MODE: "HCM",
    NUMBER_MODE: "NM",
    C_NUMBER_MODE: "CNM",
    BINARY_NUMBER_MODE: "BNM",
    CSS_NUMBER_MODE: "CSSNM",
    REGEXP_MODE: "RM",
    TITLE_MODE: "TM",
    UNDERSCORE_TITLE_MODE: "UTM",
    COMMENT: "C",
    beginRe: "bR",
    endRe: "eR",
    illegalRe: "iR",
    lexemesRe: "lR",
    terminators: "t",
    terminator_end: "tE",
  };
  const b = "</span>";
  let h = {
    classPrefix: "hljs-",
    tabReplace: null,
    useBR: !1,
    languages: void 0,
  };
  function _(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function E(e) {
    return e.nodeName.toLowerCase();
  }
  function v(e, n) {
    const t = e && e.exec(n);
    return t && t.index === 0;
  }
  function l(e) {
    return n.test(e);
  }
  function g(e) {
    let n;
    const t = {};
    const r = Array.prototype.slice.call(arguments, 1);
    for (n in e) t[n] = e[n];
    return (
      r.forEach(function (e) {
        for (n in e) t[n] = e[n];
      }),
      t
    );
  }
  function R(e) {
    const a = [];
    return (
      (function e(n, t) {
        for (let r = n.firstChild; r; r = r.nextSibling) {
          r.nodeType === 3
            ? (t += r.nodeValue.length)
            : r.nodeType === 1 &&
              (a.push({ event: "start", offset: t, node: r }),
              (t = e(r, t)),
              E(r).match(/br|hr|img|input/) ||
                a.push({ event: "stop", offset: t, node: r }));
        }
        return t;
      })(e, 0),
      a
    );
  }
  function i(e) {
    if (r && !e.langApiRestored) {
      for (const n in ((e.langApiRestored = !0), r)) e[n] && (e[r[n]] = e[n]);
      (e.c || []).concat(e.v || []).forEach(i);
    }
  }
  function m(o) {
    function s(e) {
      return (e && e.source) || e;
    }
    function c(e, n) {
      return new RegExp(s(e), "m" + (o.cI ? "i" : "") + (n ? "g" : ""));
    }
    !(function n(t, e) {
      if (!t.compiled) {
        if (((t.compiled = !0), (t.k = t.k || t.bK), t.k)) {
          function r(t, e) {
            o.cI && (e = e.toLowerCase()),
              e.split(" ").forEach(function (e) {
                const n = e.split("|");
                a[n[0]] = [t, n[1] ? Number(n[1]) : 1];
              });
          }
          var a = {};
          typeof t.k === "string"
            ? r("keyword", t.k)
            : u(t.k).forEach(function (e) {
                r(e, t.k[e]);
              }),
            (t.k = a);
        }
        (t.lR = c(t.l || /\w+/, !0)),
          e &&
            (t.bK && (t.b = "\\b(" + t.bK.split(" ").join("|") + ")\\b"),
            t.b || (t.b = /\B|\b/),
            (t.bR = c(t.b)),
            t.endSameAsBegin && (t.e = t.b),
            t.e || t.eW || (t.e = /\B|\b/),
            t.e && (t.eR = c(t.e)),
            (t.tE = s(t.e) || ""),
            t.eW && e.tE && (t.tE += (t.e ? "|" : "") + e.tE)),
          t.i && (t.iR = c(t.i)),
          t.r == null && (t.r = 1),
          t.c || (t.c = []),
          (t.c = Array.prototype.concat.apply(
            [],
            t.c.map(function (e) {
              return (function (n) {
                return (
                  n.v &&
                    !n.cached_variants &&
                    (n.cached_variants = n.v.map(function (e) {
                      return g(n, { v: null }, e);
                    })),
                  n.cached_variants || (n.eW && [g(n)]) || [n]
                );
              })(e === "self" ? t : e);
            })
          )),
          t.c.forEach(function (e) {
            n(e, t);
          }),
          t.starts && n(t.starts, e);
        const i = t.c
          .map(function (e) {
            return e.bK ? "\\.?(?:" + e.b + ")\\.?" : e.b;
          })
          .concat([t.tE, t.i])
          .map(s)
          .filter(Boolean);
        t.t = i.length
          ? c(
              (function (e, n) {
                for (
                  var t = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
                    r = 0,
                    a = "",
                    i = 0;
                  i < e.length;
                  i++
                ) {
                  const o = r;
                  let c = s(e[i]);
                  for (i > 0 && (a += n); c.length > 0; ) {
                    const u = t.exec(c);
                    if (u == null) {
                      a += c;
                      break;
                    }
                    (a += c.substring(0, u.index)),
                      (c = c.substring(u.index + u[0].length)),
                      u[0][0] == "\\" && u[1]
                        ? (a += "\\" + String(Number(u[1]) + o))
                        : ((a += u[0]), u[0] == "(" && r++);
                  }
                }
                return a;
              })(i, "|"),
              !0
            )
          : {
              exec: function () {
                return null;
              },
            };
      }
    })(o);
  }
  function C(e, n, i, t) {
    function c(e, n, t, r) {
      let a = '<span class="' + (r ? "" : h.classPrefix);
      return e ? (a += e + '">') + n + (t ? "" : b) : n;
    }
    function o() {
      (E +=
        l.sL != null
          ? (function () {
              const e = typeof l.sL === "string";
              if (e && !N[l.sL]) return _(g);
              const n = e
                ? C(l.sL, g, !0, f[l.sL])
                : O(g, l.sL.length ? l.sL : void 0);
              return (
                l.r > 0 && (R += n.r),
                e && (f[l.sL] = n.top),
                c(n.language, n.value, !1, !0)
              );
            })()
          : (function () {
              let e, n, t, r, a, i, o;
              if (!l.k) return _(g);
              for (r = "", n = 0, l.lR.lastIndex = 0, t = l.lR.exec(g); t; ) {
                (r += _(g.substring(n, t.index))),
                  (a = l),
                  (i = t),
                  void 0,
                  (o = s.cI ? i[0].toLowerCase() : i[0]),
                  (e = a.k.hasOwnProperty(o) && a.k[o])
                    ? ((R += e[1]), (r += c(e[0], _(t[0]))))
                    : (r += _(t[0])),
                  (n = l.lR.lastIndex),
                  (t = l.lR.exec(g));
              }
              return r + _(g.substr(n));
            })()),
        (g = "");
    }
    function u(e) {
      (E += e.cN ? c(e.cN, "", !0) : ""),
        (l = Object.create(e, { parent: { value: l } }));
    }
    function r(e, n) {
      if (((g += e), n == null)) return o(), 0;
      const t = (function (e, n) {
        let t, r, a;
        for (t = 0, r = n.c.length; t < r; t++) {
          if (v(n.c[t].bR, e)) {
            return (
              n.c[t].endSameAsBegin &&
                (n.c[t].eR =
                  ((a = n.c[t].bR.exec(e)[0]),
                  new RegExp(
                    a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
                    "m"
                  ))),
              n.c[t]
            );
          }
        }
      })(n, l);
      if (t) {
        return (
          t.skip ? (g += n) : (t.eB && (g += n), o(), t.rB || t.eB || (g = n)),
          u(t),
          t.rB ? 0 : n.length
        );
      }
      const r = (function e(n, t) {
        if (v(n.eR, t)) {
          for (; n.endsParent && n.parent; ) n = n.parent;
          return n;
        }
        if (n.eW) return e(n.parent, t);
      })(l, n);
      if (r) {
        const a = l;
        for (
          a.skip ? (g += n) : (a.rE || a.eE || (g += n), o(), a.eE && (g = n));
          l.cN && (E += b),
            l.skip || l.sL || (R += l.r),
            (l = l.parent) !== r.parent;

        );
        return (
          r.starts && (r.endSameAsBegin && (r.starts.eR = r.eR), u(r.starts)),
          a.rE ? 0 : n.length
        );
      }
      if (
        (function (e, n) {
          return !i && v(n.iR, e);
        })(n, l)
      ) {
        throw new Error(
          'Illegal lexeme "' + n + '" for mode "' + (l.cN || "<unnamed>") + '"'
        );
      }
      return (g += n), n.length || 1;
    }
    var s = B(e);
    if (!s) throw new Error('Unknown language: "' + e + '"');
    m(s);
    let a;
    var l = t || s;
    var f = {};
    var E = "";
    for (a = l; a !== s; a = a.parent) a.cN && (E = c(a.cN, "", !0) + E);
    var g = "";
    var R = 0;
    try {
      for (var d, p, M = 0; (l.t.lastIndex = M), (d = l.t.exec(n)); ) {
        (p = r(n.substring(M, d.index), d[0])), (M = d.index + p);
      }
      for (r(n.substr(M)), a = l; a.parent; a = a.parent) a.cN && (E += b);
      return { r: R, value: E, language: e, top: l };
    } catch (e) {
      if (e.message && e.message.indexOf("Illegal") !== -1) {
        return { r: 0, value: _(n) };
      }
      throw e;
    }
  }
  function O(t, e) {
    e = e || h.languages || u(N);
    let r = { r: 0, value: _(t) };
    let a = r;
    return (
      e
        .filter(B)
        .filter(M)
        .forEach(function (e) {
          const n = C(e, t, !1);
          (n.language = e),
            n.r > a.r && (a = n),
            n.r > r.r && ((a = r), (r = n));
        }),
      a.language && (r.second_best = a),
      r
    );
  }
  function d(e) {
    return h.tabReplace || h.useBR
      ? e.replace(t, function (e, n) {
          return h.useBR && e === "\n"
            ? "<br>"
            : h.tabReplace
            ? n.replace(/\t/g, h.tabReplace)
            : "";
        })
      : e;
  }
  function o(e) {
    let n;
    let t;
    let r;
    let a;
    let i;
    const o = (function (e) {
      let n;
      let t;
      let r;
      let a;
      let i = e.className + " ";
      if (
        ((i += e.parentNode ? e.parentNode.className : ""), (t = s.exec(i)))
      ) {
        return B(t[1]) ? t[1] : "no-highlight";
      }
      for (n = 0, r = (i = i.split(/\s+/)).length; n < r; n++) {
        if (l((a = i[n])) || B(a)) return a;
      }
    })(e);
    l(o) ||
      (h.useBR
        ? ((n = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "div"
          )).innerHTML = e.innerHTML
            .replace(/\n/g, "")
            .replace(/<br[ \/]*>/g, "\n"))
        : (n = e),
      (i = n.textContent),
      (r = o ? C(o, i, !0) : O(i)),
      (t = R(n)).length &&
        (((a = document.createElementNS(
          "http://www.w3.org/1999/xhtml",
          "div"
        )).innerHTML = r.value),
        (r.value = (function (e, n, t) {
          let r = 0;
          let a = "";
          const i = [];
          function o() {
            return e.length && n.length
              ? e[0].offset !== n[0].offset
                ? e[0].offset < n[0].offset
                  ? e
                  : n
                : n[0].event === "start"
                ? e
                : n
              : e.length
              ? e
              : n;
          }
          function c(e) {
            a +=
              "<" +
              E(e) +
              f.map
                .call(e.attributes, function (e) {
                  return (
                    " " +
                    e.nodeName +
                    '="' +
                    _(e.value).replace('"', "&quot;") +
                    '"'
                  );
                })
                .join("") +
              ">";
          }
          function u(e) {
            a += "</" + E(e) + ">";
          }
          function s(e) {
            (e.event === "start" ? c : u)(e.node);
          }
          for (; e.length || n.length; ) {
            let l = o();
            if (
              ((a += _(t.substring(r, l[0].offset))),
              (r = l[0].offset),
              l === e)
            ) {
              for (
                i.reverse().forEach(u);
                s(l.splice(0, 1)[0]),
                  (l = o()) === e && l.length && l[0].offset === r;

              );
              i.reverse().forEach(c);
            } else {
              l[0].event === "start" ? i.push(l[0].node) : i.pop(),
                s(l.splice(0, 1)[0]);
            }
          }
          return a + _(t.substr(r));
        })(t, R(a), i))),
      (r.value = d(r.value)),
      (e.innerHTML = r.value),
      (e.className = (function (e, n, t) {
        const r = n ? c[n] : t;
        const a = [e.trim()];
        return (
          e.match(/\bhljs\b/) || a.push("hljs"),
          e.indexOf(r) === -1 && a.push(r),
          a.join(" ").trim()
        );
      })(e.className, o, r.language)),
      (e.result = { language: r.language, re: r.r }),
      r.second_best &&
        (e.second_best = {
          language: r.second_best.language,
          re: r.second_best.r,
        }));
  }
  function p() {
    if (!p.called) {
      p.called = !0;
      const e = document.querySelectorAll("pre code");
      f.forEach.call(e, o);
    }
  }
  function B(e) {
    return (e = (e || "").toLowerCase()), N[e] || N[c[e]];
  }
  function M(e) {
    const n = B(e);
    return n && !n.disableAutodetect;
  }
  return (
    (a.highlight = C),
    (a.highlightAuto = O),
    (a.fixMarkup = d),
    (a.highlightBlock = o),
    (a.configure = function (e) {
      h = g(h, e);
    }),
    (a.initHighlighting = p),
    (a.initHighlightingOnLoad = function () {
      addEventListener("DOMContentLoaded", p, !1),
        addEventListener("load", p, !1);
    }),
    (a.registerLanguage = function (n, e) {
      const t = (N[n] = e(a));
      i(t),
        t.aliases &&
          t.aliases.forEach(function (e) {
            c[e] = n;
          });
    }),
    (a.listLanguages = function () {
      return u(N);
    }),
    (a.getLanguage = B),
    (a.autoDetection = M),
    (a.inherit = g),
    (a.IR = a.IDENT_RE = "[a-zA-Z]\\w*"),
    (a.UIR = a.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*"),
    (a.NR = a.NUMBER_RE = "\\b\\d+(\\.\\d+)?"),
    (a.CNR = a.C_NUMBER_RE =
      "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
    (a.BNR = a.BINARY_NUMBER_RE = "\\b(0b[01]+)"),
    (a.RSR = a.RE_STARTERS_RE =
      "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
    (a.BE = a.BACKSLASH_ESCAPE = { b: "\\\\[\\s\\S]", r: 0 }),
    (a.ASM = a.APOS_STRING_MODE =
      { cN: "string", b: "'", e: "'", i: "\\n", c: [a.BE] }),
    (a.QSM = a.QUOTE_STRING_MODE =
      { cN: "string", b: '"', e: '"', i: "\\n", c: [a.BE] }),
    (a.PWM = a.PHRASAL_WORDS_MODE =
      {
        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
      }),
    (a.C = a.COMMENT =
      function (e, n, t) {
        const r = a.inherit({ cN: "comment", b: e, e: n, c: [] }, t || {});
        return (
          r.c.push(a.PWM),
          r.c.push({ cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0 }),
          r
        );
      }),
    (a.CLCM = a.C_LINE_COMMENT_MODE = a.C("//", "$")),
    (a.CBCM = a.C_BLOCK_COMMENT_MODE = a.C("/\\*", "\\*/")),
    (a.HCM = a.HASH_COMMENT_MODE = a.C("#", "$")),
    (a.NM = a.NUMBER_MODE = { cN: "number", b: a.NR, r: 0 }),
    (a.CNM = a.C_NUMBER_MODE = { cN: "number", b: a.CNR, r: 0 }),
    (a.BNM = a.BINARY_NUMBER_MODE = { cN: "number", b: a.BNR, r: 0 }),
    (a.CSSNM = a.CSS_NUMBER_MODE =
      {
        cN: "number",
        b:
          a.NR +
          "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0,
      }),
    (a.RM = a.REGEXP_MODE =
      {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [a.BE, { b: /\[/, e: /\]/, r: 0, c: [a.BE] }],
      }),
    (a.TM = a.TITLE_MODE = { cN: "title", b: a.IR, r: 0 }),
    (a.UTM = a.UNDERSCORE_TITLE_MODE = { cN: "title", b: a.UIR, r: 0 }),
    (a.METHOD_GUARD = { b: "\\.\\s*" + a.UIR, r: 0 }),
    a
  );
});
hljs.registerLanguage("json", function (e) {
  const i = { literal: "true false null" };
  const n = [e.QSM, e.CNM];
  const r = { e: ",", eW: !0, eE: !0, c: n, k: i };
  const t = {
    b: "{",
    e: "}",
    c: [
      { cN: "attr", b: /"/, e: /"/, c: [e.BE], i: "\\n" },
      e.inherit(r, { b: /:/ }),
    ],
    i: "\\S",
  };
  const c = { b: "\\[", e: "\\]", c: [e.inherit(r)], i: "\\S" };
  return n.splice(n.length, 0, t, c), { c: n, k: i, i: "\\S" };
});
hljs.registerLanguage("diff", function (e) {
  return {
    aliases: ["patch"],
    c: [
      {
        cN: "meta",
        r: 10,
        v: [
          { b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ },
          { b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ },
          { b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ },
        ],
      },
      {
        cN: "comment",
        v: [
          { b: /Index: /, e: /$/ },
          { b: /={3,}/, e: /$/ },
          { b: /^\-{3}/, e: /$/ },
          { b: /^\*{3} /, e: /$/ },
          { b: /^\+{3}/, e: /$/ },
          { b: /\*{5}/, e: /\*{5}$/ },
        ],
      },
      { cN: "addition", b: "^\\+", e: "$" },
      { cN: "deletion", b: "^\\-", e: "$" },
      { cN: "addition", b: "^\\!", e: "$" },
    ],
  };
});
hljs.registerLanguage("javascript", function (e) {
  const r = "[A-Za-z$_][0-9A-Za-z$_]*";
  const a = {
    keyword:
      "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
    literal: "true false null undefined NaN Infinity",
    built_in:
      "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise",
  };
  const t = {
    cN: "number",
    v: [{ b: "\\b(0[bB][01]+)" }, { b: "\\b(0[oO][0-7]+)" }, { b: e.CNR }],
    r: 0,
  };
  const n = { cN: "subst", b: "\\$\\{", e: "\\}", k: a, c: [] };
  const c = { cN: "string", b: "`", e: "`", c: [e.BE, n] };
  n.c = [e.ASM, e.QSM, c, t, e.RM];
  const s = n.c.concat([e.CBCM, e.CLCM]);
  return {
    aliases: ["js", "jsx"],
    k: a,
    c: [
      { cN: "meta", r: 10, b: /^\s*['"]use (strict|asm)['"]/ },
      { cN: "meta", b: /^#!/, e: /$/ },
      e.ASM,
      e.QSM,
      c,
      e.CLCM,
      e.CBCM,
      t,
      {
        b: /[{,]\s*/,
        r: 0,
        c: [{ b: r + "\\s*:", rB: !0, r: 0, c: [{ cN: "attr", b: r, r: 0 }] }],
      },
      {
        b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
        k: "return throw case",
        c: [
          e.CLCM,
          e.CBCM,
          e.RM,
          {
            cN: "function",
            b: "(\\(.*?\\)|" + r + ")\\s*=>",
            rB: !0,
            e: "\\s*=>",
            c: [
              {
                cN: "params",
                v: [
                  { b: r },
                  { b: /\(\s*\)/ },
                  { b: /\(/, e: /\)/, eB: !0, eE: !0, k: a, c: s },
                ],
              },
            ],
          },
          { cN: "", b: /\s/, e: /\s*/, skip: !0 },
          {
            b: /</,
            e: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
            sL: "xml",
            c: [
              { b: /<[A-Za-z0-9\\._:-]+\s*\/>/, skip: !0 },
              {
                b: /<[A-Za-z0-9\\._:-]+/,
                e: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                skip: !0,
                c: [{ b: /<[A-Za-z0-9\\._:-]+\s*\/>/, skip: !0 }, "self"],
              },
            ],
          },
        ],
        r: 0,
      },
      {
        cN: "function",
        bK: "function",
        e: /\{/,
        eE: !0,
        c: [
          e.inherit(e.TM, { b: r }),
          { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, c: s },
        ],
        i: /\[|%/,
      },
      { b: /\$[(.]/ },
      e.METHOD_GUARD,
      {
        cN: "class",
        bK: "class",
        e: /[{;=]/,
        eE: !0,
        i: /[:"\[\]]/,
        c: [{ bK: "extends" }, e.UTM],
      },
      { bK: "constructor get set", e: /\{/, eE: !0 },
    ],
    i: /#(?!!)/,
  };
});
hljs.registerLanguage("bash", function (e) {
  const t = {
    cN: "variable",
    v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }],
  };
  const s = {
    cN: "string",
    b: /"/,
    e: /"/,
    c: [e.BE, t, { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] }],
  };
  return {
    aliases: ["sh", "zsh"],
    l: /\b-?[a-z\._]+\b/,
    k: {
      keyword: "if then else elif fi for while in do done case esac function",
      literal: "true false",
      built_in:
        "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
      _: "-ne -eq -lt -gt -f -d -e -s -l -a",
    },
    c: [
      { cN: "meta", b: /^#![^\n]+sh\s*$/, r: 10 },
      {
        cN: "function",
        b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        rB: !0,
        c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })],
        r: 0,
      },
      e.HCM,
      s,
      { cN: "string", b: /'/, e: /'/ },
      t,
    ],
  };
});
hljs.registerLanguage("shell", function (s) {
  return {
    aliases: ["console"],
    c: [
      {
        cN: "meta",
        b: "^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",
        starts: { e: "$", sL: "bash" },
      },
    ],
  };
});
hljs.registerLanguage("go", function (e) {
  const t = {
    keyword:
      "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
    literal: "true false iota nil",
    built_in:
      "append cap close complex copy imag len make new panic print println real recover delete",
  };
  return {
    aliases: ["golang"],
    k: t,
    i: "</",
    c: [
      e.CLCM,
      e.CBCM,
      {
        cN: "string",
        v: [e.QSM, { b: "'", e: "[^\\\\]'" }, { b: "`", e: "`" }],
      },
      { cN: "number", v: [{ b: e.CNR + "[dflsi]", r: 1 }, e.CNM] },
      { b: /:=/ },
      {
        cN: "function",
        bK: "func",
        e: /\s*\{/,
        eE: !0,
        c: [e.TM, { cN: "params", b: /\(/, e: /\)/, k: t, i: /["']/ }],
      },
    ],
  };
});
hljs.registerLanguage("protobuf", function (e) {
  return {
    k: {
      keyword: "package import option optional required repeated group oneof",
      built_in:
        "double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes",
      literal: "true false",
    },
    c: [
      e.QSM,
      e.NM,
      e.CLCM,
      {
        cN: "class",
        bK: "message enum service",
        e: /\{/,
        i: /\n/,
        c: [e.inherit(e.TM, { starts: { eW: !0, eE: !0 } })],
      },
      { cN: "function", bK: "rpc", e: /;/, eE: !0, k: "rpc returns" },
      { b: /^\s*[A-Z_]+/, e: /\s*=/, eE: !0 },
    ],
  };
});
hljs.registerLanguage("plaintext", function (e) {
  return { disableAutodetect: !0 };
});
hljs.registerLanguage("accesslog", function (T) {
  return {
    c: [
      {
        cN: "number",
        b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b",
      },
      { cN: "number", b: "\\b\\d+\\b", r: 0 },
      {
        cN: "string",
        b: '"(GET|POST|HEAD|PUT|DELETE|CONNECT|OPTIONS|PATCH|TRACE)',
        e: '"',
        k: "GET POST HEAD PUT DELETE CONNECT OPTIONS PATCH TRACE",
        i: "\\n",
        r: 10,
      },
      { cN: "string", b: /\[/, e: /\]/, i: "\\n" },
      { cN: "string", b: '"', e: '"', i: "\\n" },
    ],
  };
});
hljs.registerLanguage("scss", function (e) {
  const t = { cN: "variable", b: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b" };
  const i = { cN: "number", b: "#[0-9A-Fa-f]+" };
  e.CSSNM, e.QSM, e.ASM, e.CBCM;
  return {
    cI: !0,
    i: "[=/|']",
    c: [
      e.CLCM,
      e.CBCM,
      { cN: "selector-id", b: "\\#[A-Za-z0-9_-]+", r: 0 },
      { cN: "selector-class", b: "\\.[A-Za-z0-9_-]+", r: 0 },
      { cN: "selector-attr", b: "\\[", e: "\\]", i: "$" },
      {
        cN: "selector-tag",
        b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
        r: 0,
      },
      {
        b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)",
      },
      {
        b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)",
      },
      t,
      {
        cN: "attribute",
        b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
        i: "[^\\s]",
      },
      {
        b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b",
      },
      {
        b: ":",
        e: ";",
        c: [t, i, e.CSSNM, e.QSM, e.ASM, { cN: "meta", b: "!important" }],
      },
      {
        b: "@",
        e: "[{;]",
        k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
        c: [t, e.QSM, e.ASM, i, e.CSSNM, { b: "\\s[A-Za-z0-9_.-]+", r: 0 }],
      },
    ],
  };
});
hljs.registerLanguage("ini", function (e) {
  const b = {
    cN: "string",
    c: [e.BE],
    v: [
      { b: "'''", e: "'''", r: 10 },
      { b: '"""', e: '"""', r: 10 },
      { b: '"', e: '"' },
      { b: "'", e: "'" },
    ],
  };
  return {
    aliases: ["toml"],
    cI: !0,
    i: /\S/,
    c: [
      e.C(";", "$"),
      e.HCM,
      { cN: "section", b: /^\s*\[+/, e: /\]+/ },
      {
        b: /^[a-z0-9\[\]_\.-]+\s*=\s*/,
        e: "$",
        rB: !0,
        c: [
          { cN: "attr", b: /[a-z0-9\[\]_\.-]+/ },
          {
            b: /=/,
            eW: !0,
            r: 0,
            c: [
              e.C(";", "$"),
              e.HCM,
              { cN: "literal", b: /\bon|off|true|false|yes|no\b/ },
              {
                cN: "variable",
                v: [{ b: /\$[\w\d"][\w\d_]*/ }, { b: /\$\{(.*?)}/ }],
              },
              b,
              { cN: "number", b: /([\+\-]+)?[\d]+_[\d_]+/ },
              e.NM,
            ],
          },
        ],
      },
    ],
  };
});
hljs.registerLanguage("xml", function (s) {
  const e = {
    eW: !0,
    i: /</,
    r: 0,
    c: [
      { cN: "attr", b: "[A-Za-z0-9\\._:-]+", r: 0 },
      {
        b: /=\s*/,
        r: 0,
        c: [
          {
            cN: "string",
            endsParent: !0,
            v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s"'=<>`]+/ }],
          },
        ],
      },
    ],
  };
  return {
    aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
    cI: !0,
    c: [
      {
        cN: "meta",
        b: "<!DOCTYPE",
        e: ">",
        r: 10,
        c: [{ b: "\\[", e: "\\]" }],
      },
      s.C("\x3c!--", "--\x3e", { r: 10 }),
      { b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 },
      { cN: "meta", b: /<\?xml/, e: /\?>/, r: 10 },
      {
        b: /<\?(php)?/,
        e: /\?>/,
        sL: "php",
        c: [
          { b: "/\\*", e: "\\*/", skip: !0 },
          { b: 'b"', e: '"', skip: !0 },
          { b: "b'", e: "'", skip: !0 },
          s.inherit(s.ASM, { i: null, cN: null, c: null, skip: !0 }),
          s.inherit(s.QSM, { i: null, cN: null, c: null, skip: !0 }),
        ],
      },
      {
        cN: "tag",
        b: "<style(?=\\s|>|$)",
        e: ">",
        k: { name: "style" },
        c: [e],
        starts: { e: "</style>", rE: !0, sL: ["css", "xml"] },
      },
      {
        cN: "tag",
        b: "<script(?=\\s|>|$)",
        e: ">",
        k: { name: "script" },
        c: [e],
        starts: {
          e: "</script>",
          rE: !0,
          sL: ["actionscript", "javascript", "handlebars", "xml"],
        },
      },
      {
        cN: "tag",
        b: "</?",
        e: "/?>",
        c: [{ cN: "name", b: /[^\/><\s]+/, r: 0 }, e],
      },
    ],
  };
});
hljs.registerLanguage("markdown", function (e) {
  return {
    aliases: ["md", "mkdown", "mkd"],
    c: [
      {
        cN: "section",
        v: [{ b: "^#{1,6}", e: "$" }, { b: "^.+?\\n[=-]{2,}$" }],
      },
      { b: "<", e: ">", sL: "xml", r: 0 },
      { cN: "bullet", b: "^\\s*([*+-]|(\\d+\\.))\\s+" },
      { cN: "strong", b: "[*_]{2}.+?[*_]{2}" },
      { cN: "emphasis", v: [{ b: "\\*.+?\\*" }, { b: "_.+?_", r: 0 }] },
      { cN: "quote", b: "^>\\s+", e: "$" },
      {
        cN: "code",
        v: [
          { b: "^```w*s*$", e: "^```s*$" },
          { b: "`.+?`" },
          { b: "^( {4}|\t)", e: "$", r: 0 },
        ],
      },
      { b: "^[-\\*]{3,}", e: "$" },
      {
        b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
        rB: !0,
        c: [
          { cN: "string", b: "\\[", e: "\\]", eB: !0, rE: !0, r: 0 },
          { cN: "link", b: "\\]\\(", e: "\\)", eB: !0, eE: !0 },
          { cN: "symbol", b: "\\]\\[", e: "\\]", eB: !0, eE: !0 },
        ],
        r: 10,
      },
      {
        b: /^\[[^\n]+\]:/,
        rB: !0,
        c: [
          { cN: "symbol", b: /\[/, e: /\]/, eB: !0, eE: !0 },
          { cN: "link", b: /:\s*/, e: /$/, eB: !0 },
        ],
      },
    ],
  };
});
hljs.registerLanguage("makefile", function (e) {
  const i = {
    cN: "variable",
    v: [{ b: "\\$\\(" + e.UIR + "\\)", c: [e.BE] }, { b: /\$[@%<?\^\+\*]/ }],
  };
  const r = { cN: "string", b: /"/, e: /"/, c: [e.BE, i] };
  const a = {
    cN: "variable",
    b: /\$\([\w-]+\s/,
    e: /\)/,
    k: {
      built_in:
        "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value",
    },
    c: [i],
  };
  const n = {
    b: "^" + e.UIR + "\\s*[:+?]?=",
    i: "\\n",
    rB: !0,
    c: [{ b: "^" + e.UIR, e: "[:+?]?=", eE: !0 }],
  };
  const t = { cN: "section", b: /^[^\s]+:/, e: /$/, c: [i] };
  return {
    aliases: ["mk", "mak"],
    k: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
    l: /[\w-]+/,
    c: [
      e.HCM,
      i,
      r,
      a,
      n,
      {
        cN: "meta",
        b: /^\.PHONY:/,
        e: /$/,
        k: { "meta-keyword": ".PHONY" },
        l: /[\.\w]+/,
      },
      t,
    ],
  };
});
hljs.registerLanguage("http", function (e) {
  const t = "HTTP/[0-9\\.]+";
  return {
    aliases: ["https"],
    i: "\\S",
    c: [
      { b: "^" + t, e: "$", c: [{ cN: "number", b: "\\b\\d{3}\\b" }] },
      {
        b: "^[A-Z]+ (.*?) " + t + "$",
        rB: !0,
        e: "$",
        c: [
          { cN: "string", b: " ", e: " ", eB: !0, eE: !0 },
          { b: t },
          { cN: "keyword", b: "[A-Z]+" },
        ],
      },
      {
        cN: "attribute",
        b: "^\\w",
        e: ": ",
        eE: !0,
        i: "\\n|\\s|=",
        starts: { e: "$", r: 0 },
      },
      { b: "\\n\\n", starts: { sL: [], eW: !0 } },
    ],
  };
});
hljs.registerLanguage("ruby", function (e) {
  const b =
    "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";
  const r = {
    keyword:
      "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
    literal: "true false nil",
  };
  const c = { cN: "doctag", b: "@[A-Za-z]+" };
  const a = { b: "#<", e: ">" };
  const s = [
    e.C("#", "$", { c: [c] }),
    e.C("^\\=begin", "^\\=end", { c: [c], r: 10 }),
    e.C("^__END__", "\\n$"),
  ];
  const n = { cN: "subst", b: "#\\{", e: "}", k: r };
  const t = {
    cN: "string",
    c: [e.BE, n],
    v: [
      { b: /'/, e: /'/ },
      { b: /"/, e: /"/ },
      { b: /`/, e: /`/ },
      { b: "%[qQwWx]?\\(", e: "\\)" },
      { b: "%[qQwWx]?\\[", e: "\\]" },
      { b: "%[qQwWx]?{", e: "}" },
      { b: "%[qQwWx]?<", e: ">" },
      { b: "%[qQwWx]?/", e: "/" },
      { b: "%[qQwWx]?%", e: "%" },
      { b: "%[qQwWx]?-", e: "-" },
      { b: "%[qQwWx]?\\|", e: "\\|" },
      { b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/ },
      { b: /<<(-?)\w+$/, e: /^\s*\w+$/ },
    ],
  };
  const i = { cN: "params", b: "\\(", e: "\\)", endsParent: !0, k: r };
  const d = [
    t,
    a,
    {
      cN: "class",
      bK: "class module",
      e: "$|;",
      i: /=/,
      c: [
        e.inherit(e.TM, { b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?" }),
        { b: "<\\s*", c: [{ b: "(" + e.IR + "::)?" + e.IR }] },
      ].concat(s),
    },
    {
      cN: "function",
      bK: "def",
      e: "$|;",
      c: [e.inherit(e.TM, { b: b }), i].concat(s),
    },
    { b: e.IR + "::" },
    { cN: "symbol", b: e.UIR + "(\\!|\\?)?:", r: 0 },
    { cN: "symbol", b: ":(?!\\s)", c: [t, { b: b }], r: 0 },
    {
      cN: "number",
      b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      r: 0,
    },
    { b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" },
    { cN: "params", b: /\|/, e: /\|/, k: r },
    {
      b: "(" + e.RSR + "|unless)\\s*",
      k: "unless",
      c: [
        a,
        {
          cN: "regexp",
          c: [e.BE, n],
          i: /\n/,
          v: [
            { b: "/", e: "/[a-z]*" },
            { b: "%r{", e: "}[a-z]*" },
            { b: "%r\\(", e: "\\)[a-z]*" },
            { b: "%r!", e: "![a-z]*" },
            { b: "%r\\[", e: "\\][a-z]*" },
          ],
        },
      ].concat(s),
      r: 0,
    },
  ].concat(s);
  n.c = d;
  const l = [
    { b: /^\s*=>/, starts: { e: "$", c: (i.c = d) } },
    {
      cN: "meta",
      b: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
      starts: { e: "$", c: d },
    },
  ];
  return {
    aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
    k: r,
    i: /\/\*/,
    c: s.concat(l).concat(d),
  };
});
hljs.registerLanguage("yaml", function (e) {
  const b = "true false yes no null";
  const a = "^[ \\-]*";
  const r = "[a-zA-Z_][\\w\\-]*";
  const t = {
    cN: "attr",
    v: [
      { b: a + r + ":" },
      { b: a + '"' + r + '":' },
      { b: a + "'" + r + "':" },
    ],
  };
  const c = {
    cN: "string",
    r: 0,
    v: [{ b: /'/, e: /'/ }, { b: /"/, e: /"/ }, { b: /\S+/ }],
    c: [
      e.BE,
      {
        cN: "template-variable",
        v: [
          { b: "{{", e: "}}" },
          { b: "%{", e: "}" },
        ],
      },
    ],
  };
  return {
    cI: !0,
    aliases: ["yml", "YAML", "yaml"],
    c: [
      t,
      { cN: "meta", b: "^---s*$", r: 10 },
      { cN: "string", b: "[\\|>] *$", rE: !0, c: c.c, e: t.v[0].b },
      { b: "<%[%=-]?", e: "[%-]?%>", sL: "ruby", eB: !0, eE: !0, r: 0 },
      { cN: "type", b: "!" + e.UIR },
      { cN: "type", b: "!!" + e.UIR },
      { cN: "meta", b: "&" + e.UIR + "$" },
      { cN: "meta", b: "\\*" + e.UIR + "$" },
      { cN: "bullet", b: "^ *-", r: 0 },
      e.HCM,
      { bK: b, k: { literal: b } },
      e.CNM,
      c,
    ],
  };
});
hljs.registerLanguage("dockerfile", function (e) {
  return {
    aliases: ["docker"],
    cI: !0,
    k: "from maintainer expose env arg user onbuild stopsignal",
    c: [
      e.HCM,
      e.ASM,
      e.QSM,
      e.NM,
      {
        bK: "run cmd entrypoint volume add copy workdir label healthcheck shell",
        starts: { e: /[^\\]$/, sL: "bash" },
      },
    ],
    i: "</",
  };
});
hljs.registerLanguage("nginx", function (e) {
  const r = {
    cN: "variable",
    v: [{ b: /\$\d+/ }, { b: /\$\{/, e: /}/ }, { b: "[\\$\\@]" + e.UIR }],
  };
  const b = {
    eW: !0,
    l: "[a-z/_]+",
    k: {
      literal:
        "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll",
    },
    r: 0,
    i: "=>",
    c: [
      e.HCM,
      {
        cN: "string",
        c: [e.BE, r],
        v: [
          { b: /"/, e: /"/ },
          { b: /'/, e: /'/ },
        ],
      },
      { b: "([a-z]+):/", e: "\\s", eW: !0, eE: !0, c: [r] },
      {
        cN: "regexp",
        c: [e.BE, r],
        v: [
          { b: "\\s\\^", e: "\\s|{|;", rE: !0 },
          { b: "~\\*?\\s+", e: "\\s|{|;", rE: !0 },
          { b: "\\*(\\.[a-z\\-]+)+" },
          { b: "([a-z\\-]+\\.)+\\*" },
        ],
      },
      {
        cN: "number",
        b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b",
      },
      { cN: "number", b: "\\b\\d+[kKmMgGdshdwy]*\\b", r: 0 },
      r,
    ],
  };
  return {
    aliases: ["nginxconf"],
    c: [
      e.HCM,
      {
        b: e.UIR + "\\s+{",
        rB: !0,
        e: "{",
        c: [{ cN: "section", b: e.UIR }],
        r: 0,
      },
      {
        b: e.UIR + "\\s",
        e: ";|{",
        rB: !0,
        c: [{ cN: "attribute", b: e.UIR, starts: b }],
        r: 0,
      },
    ],
    i: "[^\\s\\}]",
  };
});
hljs.registerLanguage("css", function (e) {
  const c = {
    b: /[A-Z\_\.\-]+\s*:/,
    rB: !0,
    e: ";",
    eW: !0,
    c: [
      {
        cN: "attribute",
        b: /\S/,
        e: ":",
        eE: !0,
        starts: {
          eW: !0,
          eE: !0,
          c: [
            {
              b: /[\w-]+\(/,
              rB: !0,
              c: [
                { cN: "built_in", b: /[\w-]+/ },
                { b: /\(/, e: /\)/, c: [e.ASM, e.QSM] },
              ],
            },
            e.CSSNM,
            e.QSM,
            e.ASM,
            e.CBCM,
            { cN: "number", b: "#[0-9A-Fa-f]+" },
            { cN: "meta", b: "!important" },
          ],
        },
      },
    ],
  };
  return {
    cI: !0,
    i: /[=\/|'\$]/,
    c: [
      e.CBCM,
      { cN: "selector-id", b: /#[A-Za-z0-9_-]+/ },
      { cN: "selector-class", b: /\.[A-Za-z0-9_-]+/ },
      { cN: "selector-attr", b: /\[/, e: /\]/, i: "$" },
      { cN: "selector-pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ },
      { b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page" },
      {
        b: "@",
        e: "[{;]",
        i: /:/,
        c: [
          { cN: "keyword", b: /\w+/ },
          { b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM] },
        ],
      },
      { cN: "selector-tag", b: "[a-zA-Z-][a-zA-Z0-9_-]*", r: 0 },
      { b: "{", e: "}", i: /\S/, c: [e.CBCM, c] },
    ],
  };
});
