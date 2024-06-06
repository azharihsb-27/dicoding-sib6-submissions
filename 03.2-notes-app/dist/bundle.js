/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      283: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e, n, o, u;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                ((n = this),
                (o = i((o = c))),
                (e = (function (e, n) {
                  if (n && ("object" === t(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(e);
                })(
                  n,
                  r()
                    ? Reflect.construct(o, u || [], i(n).constructor)
                    : o.apply(n, u),
                ))),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(c, n),
            (u = c),
            (s = [
              {
                key: "_styling",
                value: function () {
                  this._style.textContent =
                    "\n        :host {\n            display: block;\n            font-family: var(--main-font);\n        }\n\n        .footer-brand-name {\n            color: var(--base-color);\n            font-size: 1rem;\n        }\n    ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._styling(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n      <div>\n        <p class="footer-brand-name">Notes App &copy; 2024</p>\n      </div>\n    ');
                },
              },
            ]) && e(u.prototype, s),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, s;
        })(n(HTMLElement));
        customElements.define("app-footer", u);
      },
      558: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e, n, o, u;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                ((n = this),
                (o = i((o = c))),
                (e = (function (e, n) {
                  if (n && ("object" === t(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(e);
                })(
                  n,
                  r()
                    ? Reflect.construct(o, u || [], i(n).constructor)
                    : o.apply(n, u),
                ))),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              a(e, "_titleLength", 12),
              a(e, "_bodyLength", 20),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(c, n),
            (u = c),
            (l = [
              {
                key: "observedAttributes",
                get: function () {
                  return ["titleLength", "bodyLength"];
                },
              },
            ]),
            (s = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "_styling",
                value: function () {
                  this._style.textContent =
                    "\n      :host {\n        font-family: var(--main-font);\n      }\n\n      .form-container {\n        padding: 150px 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n      }\n\n      .form-container h1{\n        margin-bottom: 50px;\n        color: #000000;\n      }\n\n      form {\n        height: 100%;\n        width: 500px;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n      }\n\n      .form-group {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        gap: 30px;\n      }\n\n      .form-input {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n      }\n\n      .form-input label {\n        position: absolute;\n        top: -8px;\n        left: 0;\n        font-size: 1rem;\n        margin-block-end: 8px;\n        user-select: none;\n        pointer-events: none;\n        transition: 150ms all ease-in-out;\n        color: var(--primary-color);\n      }\n\n      .form-input input {\n        height: 22px;\n        padding: 8px;\n        border: none;\n        outline: none;\n        border-block-end: 2px solid var(--primary-color);\n      }\n\n      .form-input input:focus-visible ~ label,\n      .form-input input:valid ~ label {\n        top: -20px;\n        color: #000000;\n      }\n\n      .form-input textarea {\n        height: 200px;\n        padding: 8px;\n        border: none;\n        outline: none;\n        border-block-end: 2px solid var(--primary-color);\n        resize: vertical;\n        font-family: var(--main-font);\n      }\n\n      .form-input textarea:focus-visible ~ label,\n      .form-input textarea:valid ~ label {\n        top: -20px;\n        color: #000000;\n      }\n\n      .form-input input:focus-visible,\n      .form-input input:valid,\n      .form-input textarea:focus-visible,\n      .form-input textarea:valid {\n        border: 2px solid var(--primary-color);\n        border-radius: 2px;\n      }\n\n      .form-group button {\n        height: 35px;\n        border:none ;\n        background-color: var(--primary-color);\n        color: var(--base-color);\n        text-transform: uppercase;\n        cursor: pointer;\n      }\n\n      .form-group button:hover {\n        background-color: #7ba1b8;\n      }\n\n      .form-group .form-input p.validation-message {\n        color: #FF204E;\n        font-size: 0.8rem;\n        margin-block-start: 6px;\n        padding-inline-start: 8px;\n      }\n\n      @media screen and (max-width: 568px) {\n        form {\n          width: 80%;\n        }\n      }\n    ";
                },
              },
              {
                key: "titleLength",
                get: function () {
                  return this._titleLength;
                },
                set: function (t) {
                  var e = Number(t);
                  Utils.isValidInteger(e) && (this._titleLength = t);
                },
              },
              {
                key: "bodyLength",
                get: function () {
                  return this._bodyLength;
                },
                set: function (t) {
                  var e = Number(t);
                  Utils.isValidInteger(e) && (this._bodyLength = t);
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._styling(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n        <div class="form-container">\n          <h1>Add Your Notes</h1>\n          <form>\n            <div class="form-group">\n              <div class="form-input">\n                <input type="text" name="title" id="title" minLength='
                        .concat(
                          this.titleLength,
                          ' aria-describedby="titleValidation" required>\n                <label>Title</label>\n                <p id="titleValidation" class="validation-message"></p>\n              </div>\n              <div class="form-input">\n                <textarea name="body" id="body" minLength=',
                        )
                        .concat(
                          this.bodyLength,
                          ' aria-describedby="bodyValidation" required></textarea>\n                <label>Body</label>\n                <p id="bodyValidation" class="validation-message"></p>\n              </div>\n              <button>Add</button>\n            </div>\n          </form>\n        </div>\n    ',
                        ));
                },
              },
              {
                key: "attributeChangeCallback",
                value: function (t, e, n) {
                  switch (t) {
                    case "titleLength":
                      this.titleLength = n;
                      break;
                    case "bodyLength":
                      this.bodyLength = n;
                  }
                  this.render();
                },
              },
            ]) && e(u.prototype, s),
            l && e(u, l),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, s, l;
        })(n(HTMLElement));
        customElements.define("app-form", u);
      },
      561: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e, n, o, u;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                ((n = this),
                (o = i((o = c))),
                (e = (function (e, n) {
                  if (n && ("object" === t(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(e);
                })(
                  n,
                  r()
                    ? Reflect.construct(o, u || [], i(n).constructor)
                    : o.apply(n, u),
                ))),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(c, n),
            (u = c),
            (s = [
              {
                key: "_styling",
                value: function () {
                  this._style.textContent =
                    "\n        :host {\n            display: block;\n            font-family: var(--main-font);\n        }\n\n        .header-brand-name {\n            color: var(--base-color);\n            font-size: 1.6rem;\n            font-weight: 800;\n        }\n    ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._styling(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n        <div>\n            <h1 class="header-brand-name">Notes App</h1>\n        </div>\n    ');
                },
              },
            ]) && e(u.prototype, s),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, s;
        })(n(HTMLElement));
        customElements.define("app-header", u);
      },
      103: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e, n, o, u;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                ((n = this),
                (o = i((o = c))),
                (e = (function (e, n) {
                  if (n && ("object" === t(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(e);
                })(
                  n,
                  r()
                    ? Reflect.construct(o, u || [], i(n).constructor)
                    : o.apply(n, u),
                ))),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(c, n),
            (u = c),
            (s = [
              {
                key: "_styling",
                value: function () {
                  this._style.textContent =
                    "\n        .placeholder {\n          color: var(--primary-color);\n          font-family: var(--main-font);\n        }\n      ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._styling(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n        <div>\n          <h2 class="placeholder">Ups, something\'s went wrong!</h2>\n          <slot></slot>\n        </div>\n      ');
                },
              },
            ]) && e(u.prototype, s),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, s;
        })(n(HTMLElement));
        customElements.define("app-search-error", u);
      },
      940: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e, n, o, u;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                ((n = this),
                (o = i((o = c))),
                (e = (function (e, n) {
                  if (n && ("object" === t(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(e);
                })(
                  n,
                  r()
                    ? Reflect.construct(o, u || [], i(n).constructor)
                    : o.apply(n, u),
                ))),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              a(e, "_submitEvent", "submit"),
              a(e, "_searchEvent", "search"),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(c, n),
            (u = c),
            (s = [
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  var t = this;
                  this._shadowRoot
                    .querySelector("form")
                    .addEventListener("submit", function (e) {
                      return t._onFormSubmit(e, t);
                    }),
                    this.addEventListener(
                      this._submitEvent,
                      this._onAppSearchSubmit,
                    );
                },
              },
              {
                key: "_onFormSubmit",
                value: function (t, e) {
                  e.dispatchEvent(new CustomEvent("submit")),
                    t.preventDefault();
                },
              },
              {
                key: "_onAppSearchSubmit",
                value: function () {
                  var t = this._shadowRoot.querySelector("input#name").value;
                  t &&
                    this.dispatchEvent(
                      new CustomEvent(this._searchEvent, {
                        detail: { query: t },
                        bubbles: !0,
                      }),
                    );
                },
              },
              {
                key: "_styling",
                value: function () {
                  this._style.textContent =
                    "\n        .floating-form {\n            margin: 80px 0;\n        }\n\n        .search-form {\n            display: flex;\n            justify-content: center;\n            gap: 12px;\n        }\n\n        .search-form .form-group input {\n            width: 600px;\n            height: 35px;\n            padding: 8px;\n            border: none;\n            outline: none;\n            border-block-end: 2px solid var(--primary-color);\n        }\n\n        .search-form .form-group input:focus-visible,\n        .search-form .form-group input:valid {\n            border: 2px solid var(--primary-color);\n            border-radius: 2px;\n        }\n\n        .search-form button {\n            padding: 8px 12px;\n            border:none ;\n            background-color: var(--primary-color);\n            color: var(--base-color);\n            text-transform: uppercase;\n            cursor: pointer;\n        }\n\n        .search-form button:hover {\n            background-color: #7ba1b8;\n        }\n        \n        @media screen and (max-width: 568px) {\n          .search-form .form-group input {\n            width: 400px;\n          }\n        }\n\n        @media screen and (max-width: 400px) {\n          .search-form .form-group input {\n            width: 250px;\n          }\n        }\n\n        @media screen and (max-width: 320px) {\n          .search-form .form-group input {\n            width: 180px;\n          }\n        }\n    ";
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._styling(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n          <div class="floating-form">\n            <form id="searchForm" class="search-form">\n              <div class="form-group">\n                <input id="name" name="name" type="search" required placeholder="Note-id"/>\n              </div>\n    \n              <button>Search</button>\n            </form>\n          </div>\n        ');
                },
              },
            ]) && e(u.prototype, s),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, s;
        })(n(HTMLElement));
        customElements.define("app-search", u);
      },
      607: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => c });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          t.id,
          '* {\n  margin: 0;\n  padding: 0;\n  font-family: var(--main-font);\n  box-sizing: border-box;\n}\n\n:root {\n  --primary-color: #8db9d4;\n  --base-color: #ffffff;\n\n  --main-font: "Roboto", sans-serif;\n}\n\nbody {\n  background-color: var(--base-color);\n}\n\nheader {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 80px;\n  padding: 0 80px;\n  display: flex;\n  align-items: center;\n  background-color: var(--primary-color);\n}\n\n.container {\n  width: 100%;\n  padding: 0 80px;\n}\n\n.btnArc-action {\n  display: flex;\n  justify-content: flex-end;\n  gap: 20px;\n}\n\n.btnArc {\n  color: var(--primary-color);\n  border-radius: 2px;\n  border: 0;\n  padding: 10px 20px;\n  cursor: pointer;\n  background-color: var(--primary-color);\n  color: var(--base-color);\n}\n\n.search-loading {\n  width: 100%;\n  padding: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#loader {\n  width: 100px;\n  height: 100px;\n  border-radius: 10px;\n  background-color: var(--primary-color);\n}\n\napp-note-list {\n  padding: 80px 0;\n}\n\n.app-note-container h1 {\n  text-align: center;\n}\n\nfooter {\n  width: 100%;\n  height: 50px;\n  padding: 0 80px;\n  display: flex;\n  align-items: center;\n  background-color: var(--primary-color);\n}\n\n@media screen and (max-width: 320px) {\n  .container {\n    padding: 0 16px;\n  }\n  app-note-list {\n    padding: 26px 0;\n  }\n}\n',
          "",
        ]);
        const c = a;
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var l = [].concat(t[s]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var u = t[c],
              s = r.base ? u[0] + r.base : u[0],
              l = i[s] || 0,
              f = "".concat(s, " ").concat(l);
            i[s] = l + 1;
            var p = n(f),
              d = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(d);
            else {
              var y = o(d, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: f, updater: y, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              e[c].references--;
            }
            for (var u = r(t, o), s = 0; s < i.length; s++) {
              var l = n(i[s]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = u;
          };
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var t = n(72),
        e = n.n(t),
        r = n(825),
        o = n.n(r),
        i = n(659),
        a = n.n(i),
        c = n(56),
        u = n.n(c),
        s = n(540),
        l = n.n(s),
        f = n(113),
        p = n.n(f),
        d = n(607),
        y = {};
      function h(t) {
        return (
          (h =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          h(t)
        );
      }
      function m(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, v(r.key), r);
        }
      }
      function v(t) {
        var e = (function (t, e) {
          if ("object" != h(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != h(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == h(e) ? e : e + "";
      }
      (y.styleTagTransform = p()),
        (y.setAttributes = u()),
        (y.insert = a().bind(null, "head")),
        (y.domAPI = o()),
        (y.insertStyleElement = l()),
        e()(d.A, y),
        d.A && d.A.locals && d.A.locals,
        n(561),
        n(558),
        n(940),
        n(103);
      const b = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }),
          (e = [
            {
              key: "showElement",
              value: function (t) {
                (t.style.display = "flex"), (t.hidden = !1);
              },
            },
            {
              key: "hideElement",
              value: function (t) {
                (t.style.display = "none"), (t.hidden = !0);
              },
            },
            {
              key: "isValidInteger",
              value: function (t) {
                return Number.isNaN(t) || Number.isFinite(t);
              },
            },
          ]),
          null && m(t.prototype, null),
          e && m(t, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function g(t) {
        return (
          (g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          g(t)
        );
      }
      function w(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, E(r.key), r);
        }
      }
      function _(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (_ = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (x()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && O(o, n.prototype), o;
              })(t, arguments, j(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              O(n, t)
            );
          }),
          _(t)
        );
      }
      function x() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (x = function () {
          return !!t;
        })();
      }
      function O(t, e) {
        return (
          (O = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          O(t, e)
        );
      }
      function j(t) {
        return (
          (j = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          j(t)
        );
      }
      function S(t, e, n) {
        return (
          (e = E(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function E(t) {
        var e = (function (t, e) {
          if ("object" != g(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != g(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == g(e) ? e : e + "";
      }
      var k,
        T = (function (t) {
          function e() {
            var t, n, r, o;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              S(
                ((n = this),
                (r = j((r = e))),
                (t = (function (t, e) {
                  if (e && ("object" === g(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(t);
                })(
                  n,
                  x()
                    ? Reflect.construct(r, o || [], j(n).constructor)
                    : r.apply(n, o),
                ))),
                "_shadowRoot",
                null,
              ),
              S(t, "_style", null),
              S(t, "_gutter", 16),
              (t._shadowRoot = t.attachShadow({ mode: "open" })),
              (t._style = document.createElement("style")),
              t.render(),
              t
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && O(t, e);
            })(e, t),
            (n = e),
            (o = [
              {
                key: "observedAttributes",
                get: function () {
                  return ["gutter"];
                },
              },
            ]),
            (r = [
              {
                key: "_styling",
                value: function () {
                  this._style.textContent =
                    "\n      :host {\n        display: block;\n      }\n\n      .note-list {\n        display: grid;\n        grid-template-columns: repeat(3, minmax(250px, 1fr));\n        gap: ".concat(
                      this.gutter,
                      "px;\n      }\n\n      @media screen and (max-width: 942px) {\n        .note-list {\n          grid-template-columns: repeat(2, minmax(150px, 1fr));\n        }\n      }\n      @media screen and (max-width: 568px) {\n        .note-list {\n          grid-template-columns: repeat(1, 1fr);\n        }\n      }\n    ",
                    );
                },
              },
              {
                key: "gutter",
                get: function () {
                  return this._gutter;
                },
                set: function (t) {
                  var e = Number(t);
                  b.isValidInteger(e) && (this._gutter = t);
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._styling(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n    <div class="note-list">\n      <slot></slot>\n    </div>\n    ');
                },
              },
              {
                key: "attributeChangeCallback",
                value: function (t, e, n) {
                  "gutter" === t && (this.gutter = n), this.render();
                },
              },
            ]) && w(n.prototype, r),
            o && w(n, o),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, r, o;
        })(_(HTMLElement));
      function P() {
        P = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function s(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, "");
        } catch (t) {
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var i = e && e.prototype instanceof v ? e : v,
            a = Object.create(i.prototype),
            c = new R(r || []);
          return o(a, "_invoke", { value: E(t, n, c) }), a;
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var p = "suspendedStart",
          d = "suspendedYield",
          y = "executing",
          h = "completed",
          m = {};
        function v() {}
        function b() {}
        function g() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var _ = Object.getPrototypeOf,
          x = _ && _(_(C([])));
        x && x !== n && r.call(x, a) && (w = x);
        var O = (g.prototype = v.prototype = Object.create(w));
        function j(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, i, a, c) {
            var u = f(t[o], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == M(l) && r.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      (s.value = t), a(s);
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function E(e, n, r) {
          var o = p;
          return function (i, a) {
            if (o === y) throw Error("Generator is already running");
            if (o === h) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = k(c, r);
                if (u) {
                  if (u === m) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = h), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = y;
              var s = f(e, n, r);
              if ("normal" === s.type) {
                if (((o = r.done ? h : d), s.arg === m)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = h), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function k(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                k(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            );
          var i = f(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), m
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                m)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              m);
        }
        function T(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function R(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(T, this),
            this.reset(!0);
        }
        function C(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(M(e) + " is not iterable");
        }
        return (
          (b.prototype = g),
          o(O, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: b, configurable: !0 }),
          (b.displayName = s(g, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === b || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(O)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          j(S.prototype),
          s(S.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(l(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          j(O),
          s(O, u, "Generator"),
          s(O, a, function () {
            return this;
          }),
          s(O, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = C),
          (R.prototype = {
            constructor: R,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(L),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                m
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), L(n), m;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    L(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: C(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                m
              );
            },
          }),
          e
        );
      }
      function L(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function R(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              L(i, r, o, a, c, "next", t);
            }
            function c(t) {
              L(i, r, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function M(t) {
        return (
          (M =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          M(t)
        );
      }
      function C(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, D(r.key), r);
        }
      }
      function A(t, e, n) {
        return (
          e && C(t.prototype, e),
          n && C(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function N(t, e, n) {
        return (
          (e = D(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function D(t) {
        var e = (function (t, e) {
          if ("object" != M(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != M(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == M(e) ? e : e + "";
      }
      customElements.define("app-note-list", T);
      var H = "https://notes-api.dicoding.dev/v2",
        q = A(function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        });
      (k = q),
        N(
          q,
          "createNote",
          (function () {
            var t = R(
              P().mark(function t(e) {
                var n, r, o;
                return P().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (n = {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(e),
                            }),
                            (t.next = 4),
                            fetch("".concat(H, "/notes"), n)
                          );
                        case 4:
                          return (r = t.sent), (t.next = 7), r.json();
                        case 7:
                          (o = t.sent),
                            k.showResponseMessage(o.message),
                            k.getNotes(),
                            (t.next = 15);
                          break;
                        case 12:
                          (t.prev = 12),
                            (t.t0 = t.catch(0)),
                            k.showResponseMessage(t.t0);
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 12]],
                );
              }),
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        ),
        N(
          q,
          "getNotes",
          R(
            P().mark(function t() {
              var e, n, r;
              return P().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          fetch("".concat(H, "/notes"))
                        );
                      case 3:
                        return (e = t.sent), (t.next = 6), e.json();
                      case 6:
                        return (
                          (n = t.sent), (r = n.data), t.abrupt("return", r)
                        );
                      case 11:
                        (t.prev = 11),
                          (t.t0 = t.catch(0)),
                          k.showResponseMessage(t.t0);
                      case 14:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 11]],
              );
            }),
          ),
        ),
        N(
          q,
          "getArchivedNotes",
          R(
            P().mark(function t() {
              var e, n, r;
              return P().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          fetch("".concat(H, "/notes/archived"))
                        );
                      case 3:
                        return (e = t.sent), (t.next = 6), e.json();
                      case 6:
                        return (
                          (n = t.sent), (r = n.data), t.abrupt("return", r)
                        );
                      case 11:
                        (t.prev = 11),
                          (t.t0 = t.catch(0)),
                          k.showResponseMessage(t.t0);
                      case 14:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 11]],
              );
            }),
          ),
        ),
        N(
          q,
          "getSingleNote",
          (function () {
            var t = R(
              P().mark(function t(e) {
                var n, r, o;
                return P().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2), fetch("".concat(H, "/notes/").concat(e))
                        );
                      case 2:
                        return (n = t.sent), (t.next = 5), n.json();
                      case 5:
                        return (
                          (r = t.sent), (o = r.data), t.abrupt("return", o)
                        );
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        ),
        N(
          q,
          "archiveNote",
          (function () {
            var t = R(
              P().mark(function t(e) {
                var n, r, o;
                return P().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (n = {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                            }),
                            (t.next = 4),
                            fetch(
                              "".concat(H, "/notes/").concat(e, "/archive"),
                              n,
                            )
                          );
                        case 4:
                          return (r = t.sent), (t.next = 7), r.json();
                        case 7:
                          (o = t.sent),
                            k.showResponseMessage(o.message),
                            (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            k.showResponseMessage(t.t0);
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]],
                );
              }),
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        ),
        N(
          q,
          "unarchiveNote",
          (function () {
            var t = R(
              P().mark(function t(e) {
                var n, r, o;
                return P().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (n = {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                            }),
                            (t.next = 4),
                            fetch(
                              "".concat(H, "/notes/").concat(e, "/unarchive"),
                              n,
                            )
                          );
                        case 4:
                          return (r = t.sent), (t.next = 7), r.json();
                        case 7:
                          (o = t.sent),
                            k.showResponseMessage(o.message),
                            (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            k.showResponseMessage(t.t0);
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]],
                );
              }),
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        ),
        N(
          q,
          "deleteNote",
          (function () {
            var t = R(
              P().mark(function t(e) {
                var n, r, o;
                return P().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (n = {
                              method: "DELETE",
                              headers: { "Content-Type": "application/json" },
                            }),
                            (t.next = 4),
                            fetch("".concat(H, "/notes/").concat(e), n)
                          );
                        case 4:
                          return (r = t.sent), (t.next = 7), r.json();
                        case 7:
                          (o = t.sent),
                            k.showResponseMessage(o.message),
                            k.getNotes(),
                            (t.next = 15);
                          break;
                        case 12:
                          (t.prev = 12),
                            (t.t0 = t.catch(0)),
                            k.showResponseMessage(t.t0);
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 12]],
                );
              }),
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        ),
        N(q, "showResponseMessage", function () {
          alert(
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "Ups, something's went wrong!",
          );
        });
      const F = q;
      function I(t) {
        return (
          (I =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          I(t)
        );
      }
      function B(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Y(r.key), r);
        }
      }
      function V(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (V = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (U()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && z(o, n.prototype), o;
              })(t, arguments, $(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              z(n, t)
            );
          }),
          V(t)
        );
      }
      function U() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (U = function () {
          return !!t;
        })();
      }
      function z(t, e) {
        return (
          (z = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          z(t, e)
        );
      }
      function $(t) {
        return (
          ($ = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          $(t)
        );
      }
      function G(t, e, n) {
        return (
          (e = Y(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Y(t) {
        var e = (function (t, e) {
          if ("object" != I(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != I(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == I(e) ? e : e + "";
      }
      var W = (function (t) {
        function e() {
          var t, n, r, o;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            G(
              ((n = this),
              (r = $((r = e))),
              (t = (function (t, e) {
                if (e && ("object" === I(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(t);
              })(
                n,
                U()
                  ? Reflect.construct(r, o || [], $(n).constructor)
                  : r.apply(n, o),
              ))),
              "_shadowRoot",
              null,
            ),
            G(t, "_style", null),
            G(t, "_note", {
              id: null,
              title: null,
              body: null,
              createdAt: null,
              archived: null,
            }),
            (t._shadowRoot = t.attachShadow({ mode: "open" })),
            (t._style = document.createElement("style")),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && z(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "_emptyContent",
              value: function () {
                this._shadowRoot.innerHTML = "";
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var t = this,
                  e = this._shadowRoot.querySelector(".btn-actions");
                (e.innerText = this._note.archived ? "Unarchive" : "Archive"),
                  e.addEventListener("click", function () {
                    var e = t._note.id;
                    t._note.archived
                      ? (F.unarchiveNote(e), b.hideElement(t))
                      : (F.archiveNote(e), b.hideElement(t));
                  }),
                  this._shadowRoot
                    .querySelector(".btn-delete")
                    .addEventListener("click", function () {
                      var e = t._note.id;
                      F.deleteNote(e), b.hideElement(t);
                    });
              },
            },
            {
              key: "disconnectedCallbak",
              value: function () {
                this._shadowRoot
                  .querySelector(".btn-actions")
                  .removeEventListener();
              },
            },
            {
              key: "note",
              get: function () {
                return this._note;
              },
              set: function (t) {
                (this._note = t), this.render();
              },
            },
            {
              key: "_styling",
              value: function () {
                this._style.textContent =
                  "\n        :host {\n        display: block;\n        border-radius: 6px;\n        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);\n        font-family: var(--main-font);\n        }\n\n        .note-item {\n          padding: 0 16px 20px;\n        }\n\n        .note-item.completed .note-item__title, \n        .note-item.completed .note-item__body {\n          color: #b8b8b8;\n          text-decoration-line: line-through;\n        }\n\n        .note-item.completed .btn-actions {\n          background-color: #b8b8b8;\n        }\n        \n        .note-item .note-item__title {\n          font-size: 1.1rem;\n          color: var(--primary-color);\n        }\n\n        \n        .note-item .note-item__body {\n          font-size: 0.9rem;\n          margin-block-start: -16px;\n        }\n        \n        .note-item .note-item__body h6 {\n          color: #b5c0d0;\n        }\n\n        .btn {\n          border: none;\n          padding: 8px 12px;\n          border-radius: 2px;\n          cursor: pointer;\n        }\n\n        .btn-actions {\n          background-color: var(--primary-color);\n          color: var(--base-color);\n        }\n        \n        .btn-actions:hover {\n          background-color: #7ba1b8;\n        }\n\n        .btn-delete {\n          background-color: #FA7070;\n          color: var(--base-color);\n        }\n\n        .btn-delete:hover {\n          background-color: #dd6363;\n        }\n    ";
              },
            },
            {
              key: "render",
              value: function () {
                this._emptyContent(),
                  this._styling(),
                  this._shadowRoot.appendChild(this._style),
                  (this._shadowRoot.innerHTML +=
                    '\n        <div class="note-item">\n          <div class="note-item__title">\n            <h3>'
                      .concat(
                        this._note.title,
                        '</h3>\n          </div>\n          <div class="note-item__body">\n            <p>',
                      )
                      .concat(
                        this._note.body,
                        "</p>\n            <span>\n              <h6>id: ",
                      )
                      .concat(
                        this._note.id,
                        '</h6>\n            </span>\n          </div>\n          <div>\n            <button class="btn btn-actions" id=',
                      )
                      .concat(
                        this._note.id,
                        '>Archive</button>\n            <button class="btn btn-delete" id=',
                      )
                      .concat(
                        this._note.id,
                        ">Delete</button>\n          </div>\n        </div>\n      ",
                      ));
              },
            },
          ]) && B(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(V(HTMLElement));
      function J(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      customElements.define("app-note-item", W), n(283);
      const K = function () {
          var t = document
              .querySelector("app-form")
              ._shadowRoot.querySelector("form"),
            e = t.elements.title,
            n = t.elements.body,
            r = document.querySelector("app-note-list"),
            o = document.querySelector("app-search-error"),
            i = document.querySelector(".search-loading");
          t.addEventListener("submit", function (t) {
            t.preventDefault();
            var r = { title: e.value, body: n.value };
            F.createNote(r), p();
          });
          var a = function (t) {
              var r = e.getAttribute("minLength"),
                o = n.getAttribute("minLength");
              t.target.setCustomValidity(""),
                t.target.validity.valueMissing
                  ? t.target.setCustomValidity("Mohon diisi.")
                  : t.target.validity.tooShort && "title" == t.target.id
                    ? t.target.setCustomValidity(
                        "Minimal panjang karakter adalah ".concat(
                          r,
                          " karakter.",
                        ),
                      )
                    : t.target.validity.tooShort &&
                      "body" == t.target.id &&
                      t.target.setCustomValidity(
                        "Minimal panjang karakter adalah ".concat(
                          o,
                          " karakter.",
                        ),
                      );
            },
            c = function (t) {
              var e = t.target.validity.valid,
                n = t.target.validationMessage,
                r = t.target.getAttribute("aria-describedby"),
                o = r
                  ? document
                      .querySelector("app-form")
                      ._shadowRoot.getElementById(r)
                  : null;
              o.innerText = o && n && !e ? n : "";
            };
          e.addEventListener("change", a),
            e.addEventListener("invalid", a),
            e.addEventListener("blur", c),
            n.addEventListener("change", a),
            n.addEventListener("invalid", a),
            n.addEventListener("blur", c);
          var u = document.querySelector("app-search"),
            s = document.querySelector(".btn-non-archive"),
            l = document.querySelector(".btn-archive");
          s.addEventListener("click", function () {
            (r.innerHTML = ""), p();
          }),
            l.addEventListener("click", function () {
              (r.innerHTML = ""), d();
            });
          var f = function (t) {
              b.hideElement(o),
                (r.innerHTML = ""),
                b.showElement(i),
                setTimeout(function () {
                  var e,
                    n = t.map(function (t) {
                      var e = document.createElement("app-note-item");
                      return (e.note = t), e;
                    });
                  (r.innerHTML = ""),
                    r.append.apply(
                      r,
                      (function (t) {
                        if (Array.isArray(t)) return J(t);
                      })((e = n)) ||
                        (function (t) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != t[Symbol.iterator]) ||
                            null != t["@@iterator"]
                          )
                            return Array.from(t);
                        })(e) ||
                        (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return J(t, e);
                            var n = Object.prototype.toString
                              .call(t)
                              .slice(8, -1);
                            return (
                              "Object" === n &&
                                t.constructor &&
                                (n = t.constructor.name),
                              "Map" === n || "Set" === n
                                ? Array.from(t)
                                : "Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n,
                                    )
                                  ? J(t, e)
                                  : void 0
                            );
                          }
                        })(e) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                          );
                        })(),
                    ),
                    b.hideElement(i);
                }, 1e3);
            },
            p = function () {
              F.getNotes().then(function (t) {
                f(t);
              });
            },
            d = function () {
              F.getArchivedNotes().then(function (t) {
                f(t);
              });
            };
          b.hideElement(o),
            u.addEventListener("search", function (t) {
              var e;
              t.preventDefault(),
                (e = t.detail.query),
                b.hideElement(o),
                (r.innerHTML = ""),
                b.showElement(i),
                setTimeout(function () {
                  F.getSingleNote(e)
                    .then(function (t) {
                      var e = document.createElement("app-note-item");
                      (e.note = t), (r.innerHTML = ""), r.appendChild(e);
                    })
                    .catch(function () {
                      (o.textContent = "Id was not found"), b.showElement(o);
                    }),
                    b.hideElement(i);
                }, 1e3);
            }),
            p();
        },
        X = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: "ease" },
        Z = (t) => 1e3 * t,
        Q = (t) => t / 1e3,
        tt = () => {},
        et = (t) => t;
      function nt(t, e = !0) {
        if (t && "finished" !== t.playState)
          try {
            t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
          } catch (t) {}
      }
      const rt = (t) => t(),
        ot = (t, e, n = X.duration) =>
          new Proxy(
            { animations: t.map(rt).filter(Boolean), duration: n, options: e },
            it,
          ),
        it = {
          get: (t, e) => {
            const n = t.animations[0];
            switch (e) {
              case "duration":
                return t.duration;
              case "currentTime":
                return Q((null == n ? void 0 : n[e]) || 0);
              case "playbackRate":
              case "playState":
                return null == n ? void 0 : n[e];
              case "finished":
                return (
                  t.finished ||
                    (t.finished = Promise.all(t.animations.map(at)).catch(tt)),
                  t.finished
                );
              case "stop":
                return () => {
                  t.animations.forEach((t) => nt(t));
                };
              case "forEachNative":
                return (e) => {
                  t.animations.forEach((n) => e(n, t));
                };
              default:
                return void 0 === (null == n ? void 0 : n[e])
                  ? void 0
                  : () => t.animations.forEach((t) => t[e]());
            }
          },
          set: (t, e, n) => {
            switch (e) {
              case "currentTime":
                n = Z(n);
              case "playbackRate":
                for (let r = 0; r < t.animations.length; r++)
                  t.animations[r][e] = n;
                return !0;
            }
            return !1;
          },
        },
        at = (t) => t.finished,
        ct = (t) => "object" == typeof t && Boolean(t.createAnimation),
        ut = (t) => "number" == typeof t,
        st = (t) => Array.isArray(t) && !ut(t[0]),
        lt = (t, e, n) => -n * t + n * e + t,
        ft = (t, e, n) => (e - t == 0 ? 1 : (n - t) / (e - t));
      function pt(t, e) {
        const n = t[t.length - 1];
        for (let r = 1; r <= e; r++) {
          const o = ft(0, e, r);
          t.push(lt(n, 1, o));
        }
      }
      const dt = (t, e, n) => Math.min(Math.max(n, t), e);
      const yt = (t, e, n) =>
          (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
        ht = 1e-7,
        mt = 12;
      function vt(t, e, n, r) {
        if (t === e && n === r) return et;
        return (o) =>
          0 === o || 1 === o
            ? o
            : yt(
                (function (t, e, n, r, o) {
                  let i,
                    a,
                    c = 0;
                  do {
                    (a = e + (n - e) / 2),
                      (i = yt(a, r, o) - t),
                      i > 0 ? (n = a) : (e = a);
                  } while (Math.abs(i) > ht && ++c < mt);
                  return a;
                })(o, 0, 1, t, n),
                e,
                r,
              );
      }
      const bt = (t) => "function" == typeof t,
        gt = (t) => Array.isArray(t) && ut(t[0]),
        wt = {
          ease: vt(0.25, 0.1, 0.25, 1),
          "ease-in": vt(0.42, 0, 1, 1),
          "ease-in-out": vt(0.42, 0, 0.58, 1),
          "ease-out": vt(0, 0, 0.58, 1),
        },
        _t = /\((.*?)\)/;
      function xt(t) {
        if (bt(t)) return t;
        if (gt(t)) return vt(...t);
        if (wt[t]) return wt[t];
        if (t.startsWith("steps")) {
          const e = _t.exec(t);
          if (e) {
            const t = e[1].split(",");
            return (
              (t, e = "end") =>
              (n) => {
                const r =
                    (n =
                      "end" === e ? Math.min(n, 0.999) : Math.max(n, 0.001)) *
                    t,
                  o = "end" === e ? Math.floor(r) : Math.ceil(r);
                return dt(0, 1, o / t);
              }
            )(parseFloat(t[0]), t[1].trim());
          }
        }
        return et;
      }
      class Ot {
        constructor(
          t,
          e = [0, 1],
          {
            easing: n,
            duration: r = X.duration,
            delay: o = X.delay,
            endDelay: i = X.endDelay,
            repeat: a = X.repeat,
            offset: c,
            direction: u = "normal",
            autoplay: s = !0,
          } = {},
        ) {
          if (
            ((this.startTime = null),
            (this.rate = 1),
            (this.t = 0),
            (this.cancelTimestamp = null),
            (this.easing = et),
            (this.duration = 0),
            (this.totalDuration = 0),
            (this.repeat = 0),
            (this.playState = "idle"),
            (this.finished = new Promise((t, e) => {
              (this.resolve = t), (this.reject = e);
            })),
            (n = n || X.easing),
            ct(n))
          ) {
            const t = n.createAnimation(e);
            (n = t.easing), (e = t.keyframes || e), (r = t.duration || r);
          }
          (this.repeat = a),
            (this.easing = st(n) ? et : xt(n)),
            this.updateDuration(r);
          const l = (function (
            t,
            e = (function (t) {
              const e = [0];
              return pt(e, t - 1), e;
            })(t.length),
            n = et,
          ) {
            const r = t.length,
              o = r - e.length;
            return (
              o > 0 && pt(e, o),
              (o) => {
                let i = 0;
                for (; i < r - 2 && !(o < e[i + 1]); i++);
                let a = dt(0, 1, ft(e[i], e[i + 1], o));
                const c = (function (t, e) {
                  return st(t)
                    ? t[
                        ((t, e, n) => {
                          const r = e - t;
                          return ((((n - t) % r) + r) % r) + t;
                        })(0, t.length, e)
                      ]
                    : t;
                })(n, i);
                return (a = c(a)), lt(t[i], t[i + 1], a);
              }
            );
          })(e, c, st(n) ? n.map(xt) : et);
          (this.tick = (e) => {
            var n;
            let r = 0;
            (r =
              void 0 !== this.pauseTime
                ? this.pauseTime
                : (e - this.startTime) * this.rate),
              (this.t = r),
              (r /= 1e3),
              (r = Math.max(r - o, 0)),
              "finished" === this.playState &&
                void 0 === this.pauseTime &&
                (r = this.totalDuration);
            const a = r / this.duration;
            let c = Math.floor(a),
              s = a % 1;
            !s && a >= 1 && (s = 1), 1 === s && c--;
            const f = c % 2;
            ("reverse" === u ||
              ("alternate" === u && f) ||
              ("alternate-reverse" === u && !f)) &&
              (s = 1 - s);
            const p = r >= this.totalDuration ? 1 : Math.min(s, 1),
              d = l(this.easing(p));
            t(d),
              void 0 === this.pauseTime &&
              ("finished" === this.playState || r >= this.totalDuration + i)
                ? ((this.playState = "finished"),
                  null === (n = this.resolve) ||
                    void 0 === n ||
                    n.call(this, d))
                : "idle" !== this.playState &&
                  (this.frameRequestId = requestAnimationFrame(this.tick));
          }),
            s && this.play();
        }
        play() {
          const t = performance.now();
          (this.playState = "running"),
            void 0 !== this.pauseTime
              ? (this.startTime = t - this.pauseTime)
              : this.startTime || (this.startTime = t),
            (this.cancelTimestamp = this.startTime),
            (this.pauseTime = void 0),
            (this.frameRequestId = requestAnimationFrame(this.tick));
        }
        pause() {
          (this.playState = "paused"), (this.pauseTime = this.t);
        }
        finish() {
          (this.playState = "finished"), this.tick(0);
        }
        stop() {
          var t;
          (this.playState = "idle"),
            void 0 !== this.frameRequestId &&
              cancelAnimationFrame(this.frameRequestId),
            null === (t = this.reject) || void 0 === t || t.call(this, !1);
        }
        cancel() {
          this.stop(), this.tick(this.cancelTimestamp);
        }
        reverse() {
          this.rate *= -1;
        }
        commitStyles() {}
        updateDuration(t) {
          (this.duration = t), (this.totalDuration = t * (this.repeat + 1));
        }
        get currentTime() {
          return this.t;
        }
        set currentTime(t) {
          void 0 !== this.pauseTime || 0 === this.rate
            ? (this.pauseTime = t)
            : (this.startTime = performance.now() - t / this.rate);
        }
        get playbackRate() {
          return this.rate;
        }
        set playbackRate(t) {
          this.rate = t;
        }
      }
      class jt {
        setAnimation(t) {
          (this.animation = t),
            null == t ||
              t.finished.then(() => this.clearAnimation()).catch(() => {});
        }
        clearAnimation() {
          this.animation = this.generator = void 0;
        }
      }
      const St = new WeakMap();
      function Et(t) {
        return (
          St.has(t) || St.set(t, { transforms: [], values: new Map() }),
          St.get(t)
        );
      }
      const kt = ["", "X", "Y", "Z"],
        Tt = { x: "translateX", y: "translateY", z: "translateZ" },
        Pt = {
          syntax: "<angle>",
          initialValue: "0deg",
          toDefaultUnit: (t) => t + "deg",
        },
        Lt = {
          translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: (t) => t + "px",
          },
          rotate: Pt,
          scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: et },
          skew: Pt,
        },
        Rt = new Map(),
        Mt = (t) => `--motion-${t}`,
        Ct = ["x", "y", "z"];
      ["translate", "scale", "rotate", "skew"].forEach((t) => {
        kt.forEach((e) => {
          Ct.push(t + e), Rt.set(Mt(t + e), Lt[t]);
        });
      });
      const At = (t, e) => Ct.indexOf(t) - Ct.indexOf(e),
        Nt = new Set(Ct),
        Dt = (t) => Nt.has(t),
        Ht = (t) => t.sort(At).reduce(qt, "").trim(),
        qt = (t, e) => `${t} ${e}(var(${Mt(e)}))`,
        Ft = (t) => t.startsWith("--"),
        It = new Set(),
        Bt = (t, e) => document.createElement("div").animate(t, e),
        Vt = {
          cssRegisterProperty: () =>
            "undefined" != typeof CSS &&
            Object.hasOwnProperty.call(CSS, "registerProperty"),
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
          partialKeyframes: () => {
            try {
              Bt({ opacity: [1] });
            } catch (t) {
              return !1;
            }
            return !0;
          },
          finished: () =>
            Boolean(Bt({ opacity: [0, 1] }, { duration: 0.001 }).finished),
          linearEasing: () => {
            try {
              Bt({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch (t) {
              return !1;
            }
            return !0;
          },
        },
        Ut = {},
        zt = {};
      for (const t in Vt)
        zt[t] = () => (void 0 === Ut[t] && (Ut[t] = Vt[t]()), Ut[t]);
      const $t = (t, e) =>
          bt(t)
            ? zt.linearEasing()
              ? `linear(${((t, e) => {
                  let n = "";
                  const r = Math.round(e / 0.015);
                  for (let e = 0; e < r; e++) n += t(ft(0, r - 1, e)) + ", ";
                  return n.substring(0, n.length - 2);
                })(t, e)})`
              : X.easing
            : gt(t)
              ? Gt(t)
              : t,
        Gt = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`;
      function Yt(t) {
        return Tt[t] && (t = Tt[t]), Dt(t) ? Mt(t) : t;
      }
      const Wt = (t, e) => {
          e = Yt(e);
          let n = Ft(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
          if (!n && 0 !== n) {
            const t = Rt.get(e);
            t && (n = t.initialValue);
          }
          return n;
        },
        Jt = (t, e, n) => {
          (e = Yt(e)), Ft(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
        };
      function Kt(t, e, n, r = {}, o) {
        const i = window.__MOTION_DEV_TOOLS_RECORD,
          a = !1 !== r.record && i;
        let c,
          {
            duration: u = X.duration,
            delay: s = X.delay,
            endDelay: l = X.endDelay,
            repeat: f = X.repeat,
            easing: p = X.easing,
            persist: d = !1,
            direction: y,
            offset: h,
            allowWebkitAcceleration: m = !1,
            autoplay: v = !0,
          } = r;
        const b = Et(t),
          g = Dt(e);
        let w = zt.waapi();
        g &&
          ((t, e) => {
            Tt[e] && (e = Tt[e]);
            const { transforms: n } = Et(t);
            var r, o;
            (o = e),
              -1 === (r = n).indexOf(o) && r.push(o),
              (t.style.transform = Ht(n));
          })(t, e);
        const _ = Yt(e),
          x = (function (t, e) {
            return t.has(e) || t.set(e, new jt()), t.get(e);
          })(b.values, _),
          O = Rt.get(_);
        return (
          nt(x.animation, !(ct(p) && x.generator) && !1 !== r.record),
          () => {
            const b = () => {
              var e, n;
              return null !==
                (n =
                  null !== (e = Wt(t, _)) && void 0 !== e
                    ? e
                    : null == O
                      ? void 0
                      : O.initialValue) && void 0 !== n
                ? n
                : 0;
            };
            let j = (function (t, e) {
              for (let n = 0; n < t.length; n++)
                null === t[n] && (t[n] = n ? t[n - 1] : e());
              return t;
            })(((t) => (Array.isArray(t) ? t : [t]))(n), b);
            const S = (function (t, e) {
              var n;
              let r = (null == e ? void 0 : e.toDefaultUnit) || et;
              const o = t[t.length - 1];
              if ("string" == typeof o) {
                const t =
                  (null === (n = o.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === n
                    ? void 0
                    : n[2]) || "";
                t && (r = (e) => e + t);
              }
              return r;
            })(j, O);
            if (ct(p)) {
              const t = p.createAnimation(j, "opacity" !== e, b, _, x);
              (p = t.easing), (j = t.keyframes || j), (u = t.duration || u);
            }
            if (
              (Ft(_) &&
                (zt.cssRegisterProperty()
                  ? (function (t) {
                      if (!It.has(t)) {
                        It.add(t);
                        try {
                          const { syntax: e, initialValue: n } = Rt.has(t)
                            ? Rt.get(t)
                            : {};
                          CSS.registerProperty({
                            name: t,
                            inherits: !1,
                            syntax: e,
                            initialValue: n,
                          });
                        } catch (t) {}
                      }
                    })(_)
                  : (w = !1)),
              g &&
                !zt.linearEasing() &&
                (bt(p) || (st(p) && p.some(bt))) &&
                (w = !1),
              w)
            ) {
              O && (j = j.map((t) => (ut(t) ? O.toDefaultUnit(t) : t))),
                1 !== j.length ||
                  (zt.partialKeyframes() && !a) ||
                  j.unshift(b());
              const e = {
                delay: Z(s),
                duration: Z(u),
                endDelay: Z(l),
                easing: st(p) ? void 0 : $t(p, u),
                direction: y,
                iterations: f + 1,
                fill: "both",
              };
              (c = t.animate(
                {
                  [_]: j,
                  offset: h,
                  easing: st(p) ? p.map((t) => $t(t, u)) : void 0,
                },
                e,
              )),
                c.finished ||
                  (c.finished = new Promise((t, e) => {
                    (c.onfinish = t), (c.oncancel = e);
                  }));
              const n = j[j.length - 1];
              c.finished
                .then(() => {
                  d || (Jt(t, _, n), c.cancel());
                })
                .catch(tt),
                m || (c.playbackRate = 1.000001);
            } else if (o && g)
              (j = j.map((t) => ("string" == typeof t ? parseFloat(t) : t))),
                1 === j.length && j.unshift(parseFloat(b())),
                (c = new o(
                  (e) => {
                    Jt(t, _, S ? S(e) : e);
                  },
                  j,
                  Object.assign(Object.assign({}, r), {
                    duration: u,
                    easing: p,
                  }),
                ));
            else {
              const e = j[j.length - 1];
              Jt(t, _, O && ut(e) ? O.toDefaultUnit(e) : e);
            }
            return (
              a &&
                i(
                  t,
                  e,
                  j,
                  { duration: u, delay: s, easing: p, repeat: f, offset: h },
                  "motion-one",
                ),
              x.setAnimation(c),
              c && !v && c.pause(),
              c
            );
          }
        );
      }
      const Xt = (t, e) =>
        t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);
      function Zt(t, e, n) {
        return bt(t) ? t(e, n) : t;
      }
      const Qt =
        ((te = Ot),
        function (t, e, n = {}) {
          const r = (t = (function (t, e) {
            return (
              "string" == typeof t
                ? (t = document.querySelectorAll(t))
                : t instanceof Element && (t = [t]),
              Array.from(t || [])
            );
          })(t)).length;
          Boolean(r), Boolean(e);
          const o = [];
          for (let i = 0; i < r; i++) {
            const a = t[i];
            for (const t in e) {
              const c = Xt(n, t);
              c.delay = Zt(c.delay, i, r);
              const u = Kt(a, t, e[t], c, te);
              o.push(u);
            }
          }
          return ot(o, n, n.duration);
        });
      var te;
      function ee(t, e = {}) {
        return ot(
          [
            () => {
              const n = new Ot(t, [0, 1], e);
              return n.finished.catch(() => {}), n;
            },
          ],
          e,
          e.duration,
        );
      }
      document.addEventListener("DOMContentLoaded", function () {
        var t;
        K(),
          (bt((t = "#loader")) ? ee : Qt)(
            t,
            { rotate: 180 },
            {
              duration: 1,
              easing: "ease-in-out",
              repeat: 1 / 0,
              direction: "alternate",
            },
          );
      });
    })();
})();
