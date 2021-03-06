function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticCcbda579Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/edit-offers/edit-offers.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/edit-offers/edit-offers.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacesOffersEditOffersEditOffersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" color=\"secondary\" slot=\"start\">\n      <ion-back-button [defaultHref]=\"['/','places','tabs','offers']\" ></ion-back-button>\n    </ion-button>\n    <ion-button fill=\"clear\" slot=\"primary\" (click)=\"edit()\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-button>\n    <ion-title>edit-offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-spinner *ngIf=\"isLoading\"></ion-spinner>\n  <form [formGroup]=\"form\" *ngIf=\"!isLoading\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input formControlName=\"title\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Description</ion-label>\n            <ion-textarea formControlName=\"description\" row=\"3\" type=\"text\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Price</ion-label>\n            <ion-input formControlName=\"price\" type=\"number\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Availible from</ion-label>\n            <ion-datetime formControlName=\"availible\" ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">To</ion-label>\n            <ion-datetime formControlName=\"to\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacesOffersNewOfferNewOfferPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button slot=\"start\" fill=\"clear\" >\n      <ion-back-button defaultHref=\"places/tabs/offers\"></ion-back-button>\n    </ion-button>\n    <ion-button (click)=\"onSubmit()\" fill=\"clear\" slot=\"primary\" [disabled]=\"!form.valid\">\n      <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n    </ion-button>\n    <ion-title>new-offer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input formControlName=\"title\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Description</ion-label>\n            <ion-textarea formControlName=\"description\" row=\"3\" type=\"text\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Price</ion-label>\n            <ion-input formControlName=\"price\" type=\"number\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Availible from</ion-label>\n            <ion-datetime formControlName=\"availible\" ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">To</ion-label>\n            <ion-datetime formControlName=\"to\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <app-location-picker (pickLocation)=\"onPickLocation($event)\"></app-location-picker>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <app-time-picker (imagePicker)=\"onPickImage($event)\"></app-time-picker>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-booking/offer-booking.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-booking/offer-booking.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacesOffersOfferBookingOfferBookingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" color=\"secondary\" slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/offers\" ></ion-back-button>\n    </ion-button>\n    <ion-title>Booling</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button [routerLink]=\"['/','places','tabs','offers','edit',place.id]\">\n      Edit Booking\n  </ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/places/offers/edit-offers/edit-offers-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/places/offers/edit-offers/edit-offers-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: EditOffersPageRoutingModule */

  /***/
  function srcAppPlacesOffersEditOffersEditOffersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditOffersPageRoutingModule", function () {
      return EditOffersPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _edit_offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-offers.page */
    "./src/app/places/offers/edit-offers/edit-offers.page.ts");

    var routes = [{
      path: '',
      component: _edit_offers_page__WEBPACK_IMPORTED_MODULE_3__["EditOffersPage"]
    }];

    var EditOffersPageRoutingModule = function EditOffersPageRoutingModule() {
      _classCallCheck(this, EditOffersPageRoutingModule);
    };

    EditOffersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditOffersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/places/offers/edit-offers/edit-offers.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/places/offers/edit-offers/edit-offers.module.ts ***!
    \*****************************************************************/

  /*! exports provided: EditOffersPageModule */

  /***/
  function srcAppPlacesOffersEditOffersEditOffersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditOffersPageModule", function () {
      return EditOffersPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _edit_offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-offers-routing.module */
    "./src/app/places/offers/edit-offers/edit-offers-routing.module.ts");
    /* harmony import */


    var _edit_offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-offers.page */
    "./src/app/places/offers/edit-offers/edit-offers.page.ts");

    var EditOffersPageModule = function EditOffersPageModule() {
      _classCallCheck(this, EditOffersPageModule);
    };

    EditOffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditOffersPageRoutingModule"]],
      declarations: [_edit_offers_page__WEBPACK_IMPORTED_MODULE_6__["EditOffersPage"]]
    })], EditOffersPageModule);
    /***/
  },

  /***/
  "./src/app/places/offers/edit-offers/edit-offers.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/places/offers/edit-offers/edit-offers.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacesOffersEditOffersEditOffersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvZWRpdC1vZmZlcnMvZWRpdC1vZmZlcnMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/places/offers/edit-offers/edit-offers.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/places/offers/edit-offers/edit-offers.page.ts ***!
    \***************************************************************/

  /*! exports provided: EditOffersPage */

  /***/
  function srcAppPlacesOffersEditOffersEditOffersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditOffersPage", function () {
      return EditOffersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../place.service */
    "./src/app/places/place.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var EditOffersPage = /*#__PURE__*/function () {
      function EditOffersPage(placeService, route, navCtr, loadCtr, router) {
        _classCallCheck(this, EditOffersPage);

        this.placeService = placeService;
        this.route = route;
        this.navCtr = navCtr;
        this.loadCtr = loadCtr;
        this.router = router;
        this.isLoading = false;
      }

      _createClass(EditOffersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.isLoading = true;
          this.route.paramMap.subscribe(function (p) {
            if (!p.has('placeId')) {
              _this.navCtr.navigateBack('places/tabs/offers');

              return;
            }

            _this.placeSubscription = _this.placeService.findPlace(p.get('placeId')).subscribe(function (place) {
              _this.place = place;
              console.log(place);
              _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.place.title, {
                  updateOn: 'blur',
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                }),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.place.description, {
                  updateOn: 'blur',
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                }),
                price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.place.price, {
                  updateOn: 'blur',
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]
                }),
                availible: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.place.from.toISOString(), {
                  updateOn: 'blur',
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                }),
                to: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.place.to.toISOString(), {
                  updateOn: 'blur',
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                }),
                location: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.place.location, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                })
              });
              _this.isLoading = false;
            });
          });
        }
      }, {
        key: "edit",
        value: function edit() {
          var _this2 = this;

          this.loadCtr.create({
            message: "Loading..."
          }).then(function (ctr) {
            ctr.present();

            _this2.placeService.updatePlace(_this2.place.id, _this2.form.value['title'], _this2.form.value['description'], +_this2.form.value['price'], new Date(_this2.form.value['availible']), new Date(_this2.form['to']), _this2.form.value['location']).subscribe(function () {
              ctr.dismiss();

              _this2.router.navigate(['/', 'places', 'tabs', 'offers']);
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.placeSubscription) {
            this.placeSubscription.unsubscribe();
          }
        }
      }]);

      return EditOffersPage;
    }();

    EditOffersPage.ctorParameters = function () {
      return [{
        type: _place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    EditOffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-offers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-offers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/edit-offers/edit-offers.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-offers.page.scss */
      "./src/app/places/offers/edit-offers/edit-offers.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], EditOffersPage);
    /***/
  },

  /***/
  "./src/app/places/offers/new-offer/new-offer-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/places/offers/new-offer/new-offer-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: NewOfferPageRoutingModule */

  /***/
  function srcAppPlacesOffersNewOfferNewOfferRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewOfferPageRoutingModule", function () {
      return NewOfferPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _new_offer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-offer.page */
    "./src/app/places/offers/new-offer/new-offer.page.ts");

    var routes = [{
      path: '',
      component: _new_offer_page__WEBPACK_IMPORTED_MODULE_3__["NewOfferPage"]
    }];

    var NewOfferPageRoutingModule = function NewOfferPageRoutingModule() {
      _classCallCheck(this, NewOfferPageRoutingModule);
    };

    NewOfferPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewOfferPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/places/offers/new-offer/new-offer.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/places/offers/new-offer/new-offer.module.ts ***!
    \*************************************************************/

  /*! exports provided: NewOfferPageModule */

  /***/
  function srcAppPlacesOffersNewOfferNewOfferModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewOfferPageModule", function () {
      return NewOfferPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-offer-routing.module */
    "./src/app/places/offers/new-offer/new-offer-routing.module.ts");
    /* harmony import */


    var _new_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-offer.page */
    "./src/app/places/offers/new-offer/new-offer.page.ts");
    /* harmony import */


    var src_app_sharedfolder_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/sharedfolder/shared.module */
    "./src/app/sharedfolder/shared.module.ts");

    var NewOfferPageModule = function NewOfferPageModule() {
      _classCallCheck(this, NewOfferPageModule);
    };

    NewOfferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], src_app_sharedfolder_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewOfferPageRoutingModule"]],
      declarations: [_new_offer_page__WEBPACK_IMPORTED_MODULE_6__["NewOfferPage"]]
    })], NewOfferPageModule);
    /***/
  },

  /***/
  "./src/app/places/offers/new-offer/new-offer.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/places/offers/new-offer/new-offer.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacesOffersNewOfferNewOfferPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvbmV3LW9mZmVyL25ldy1vZmZlci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/places/offers/new-offer/new-offer.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/places/offers/new-offer/new-offer.page.ts ***!
    \***********************************************************/

  /*! exports provided: NewOfferPage */

  /***/
  function srcAppPlacesOffersNewOfferNewOfferPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewOfferPage", function () {
      return NewOfferPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _place_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../place.model */
    "./src/app/places/place.model.ts");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../place.service */
    "./src/app/places/place.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NewOfferPage = /*#__PURE__*/function () {
      function NewOfferPage(authSerivce, placeService, loadCtr, router) {
        _classCallCheck(this, NewOfferPage);

        this.authSerivce = authSerivce;
        this.placeService = placeService;
        this.loadCtr = loadCtr;
        this.router = router;
      }

      _createClass(NewOfferPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]
            }),
            availible: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
          });
        }
      }, {
        key: "onPickLocation",
        value: function onPickLocation(loc) {
          this.form.patchValue({
            location: loc
          });
        }
      }, {
        key: "onPickImage",
        value: function onPickImage(url) {
          if (typeof url == 'string') {
            try {
              var file = this.base64toBlob(url.replace("data:image/jpeg;base64,", ''), 'image/jpeg');
              this.form.patchValue({
                image: file
              });
            } catch (err) {
              console.log(err);
            }
          } else {
            this.form.patchValue({
              image: url
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          var title = this.form.value['title'];
          var description = this.form.value['description'];
          var price = +this.form.value['price'];
          var availible = new Date(this.form.value['availible']);
          var to = new Date(this.form.value['to']);
          var placeLoc = this.form.value['location'];
          var place = new _place_model__WEBPACK_IMPORTED_MODULE_3__["Place"](Math.random().toString(), description, "https://i.picsum.photos/id/866/200/300.jpg", title, price, availible, to, this.authSerivce.userId, placeLoc);
          this.loadCtr.create({
            message: "Loading..."
          }).then(function (ctr) {
            ctr.present();

            _this3.placeService.addPlace(place).subscribe(function () {
              ctr.dismiss();

              _this3.form.reset();

              _this3.router.navigate(['/places/tabs/offers']);
            });
          });
        }
      }, {
        key: "base64toBlob",
        value: function base64toBlob(base64Data, contentType) {
          contentType = contentType || '';
          var sliceSize = 1024;
          var byteCharacters = atob(base64Data);
          var bytesLength = byteCharacters.length;
          var slicesCount = Math.ceil(bytesLength / sliceSize);
          var byteArrays = new Array(slicesCount);

          for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);
            var bytes = new Array(end - begin);

            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
              bytes[i] = byteCharacters[offset].charCodeAt(0);
            }

            byteArrays[sliceIndex] = new Uint8Array(bytes);
          }

          return new Blob(byteArrays, {
            type: contentType
          });
        }
      }]);

      return NewOfferPage;
    }();

    NewOfferPage.ctorParameters = function () {
      return [{
        type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    NewOfferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-offer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-offer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-offer.page.scss */
      "./src/app/places/offers/new-offer/new-offer.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], NewOfferPage);
    /***/
  },

  /***/
  "./src/app/places/offers/offer-booking/offer-booking-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/places/offers/offer-booking/offer-booking-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: OfferBookingPageRoutingModule */

  /***/
  function srcAppPlacesOffersOfferBookingOfferBookingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferBookingPageRoutingModule", function () {
      return OfferBookingPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _offer_booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./offer-booking.page */
    "./src/app/places/offers/offer-booking/offer-booking.page.ts");

    var routes = [{
      path: '',
      component: _offer_booking_page__WEBPACK_IMPORTED_MODULE_3__["OfferBookingPage"]
    }];

    var OfferBookingPageRoutingModule = function OfferBookingPageRoutingModule() {
      _classCallCheck(this, OfferBookingPageRoutingModule);
    };

    OfferBookingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OfferBookingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/places/offers/offer-booking/offer-booking.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/places/offers/offer-booking/offer-booking.module.ts ***!
    \*********************************************************************/

  /*! exports provided: OfferBookingPageModule */

  /***/
  function srcAppPlacesOffersOfferBookingOfferBookingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferBookingPageModule", function () {
      return OfferBookingPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _offer_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./offer-booking-routing.module */
    "./src/app/places/offers/offer-booking/offer-booking-routing.module.ts");
    /* harmony import */


    var _offer_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./offer-booking.page */
    "./src/app/places/offers/offer-booking/offer-booking.page.ts");

    var OfferBookingPageModule = function OfferBookingPageModule() {
      _classCallCheck(this, OfferBookingPageModule);
    };

    OfferBookingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _offer_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfferBookingPageRoutingModule"]],
      declarations: [_offer_booking_page__WEBPACK_IMPORTED_MODULE_6__["OfferBookingPage"]]
    })], OfferBookingPageModule);
    /***/
  },

  /***/
  "./src/app/places/offers/offer-booking/offer-booking.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/places/offers/offer-booking/offer-booking.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacesOffersOfferBookingOfferBookingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXItYm9va2luZy9vZmZlci1ib29raW5nLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/places/offers/offer-booking/offer-booking.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/places/offers/offer-booking/offer-booking.page.ts ***!
    \*******************************************************************/

  /*! exports provided: OfferBookingPage */

  /***/
  function srcAppPlacesOffersOfferBookingOfferBookingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferBookingPage", function () {
      return OfferBookingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../place.service */
    "./src/app/places/place.service.ts");

    var OfferBookingPage = /*#__PURE__*/function () {
      function OfferBookingPage(placeService, route, navCtr) {
        _classCallCheck(this, OfferBookingPage);

        this.placeService = placeService;
        this.route = route;
        this.navCtr = navCtr;
      }

      _createClass(OfferBookingPage, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.placeSubscripiton) {
            this.placeSubscripiton.unsubscribe();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.paramMap.subscribe(function (p) {
            if (!p.has('placeId')) {
              _this4.navCtr.navigateBack('places/tabs/offers');

              return;
            }

            _this4.placeSubscripiton = _this4.placeService.findPlace(p.get('placeId')).subscribe(function (place) {
              _this4.place = place;
            });
          });
        }
      }]);

      return OfferBookingPage;
    }();

    OfferBookingPage.ctorParameters = function () {
      return [{
        type: _place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    OfferBookingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offer-booking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offer-booking.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-booking/offer-booking.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offer-booking.page.scss */
      "./src/app/places/offers/offer-booking/offer-booking.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], OfferBookingPage);
    /***/
  },

  /***/
  "./src/app/places/place.model.ts":
  /*!***************************************!*\
    !*** ./src/app/places/place.model.ts ***!
    \***************************************/

  /*! exports provided: Place */

  /***/
  function srcAppPlacesPlaceModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Place", function () {
      return Place;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Place = function Place(id, description, photoURL, title, price, from, to, userId, location) {
      _classCallCheck(this, Place);

      this.id = id;
      this.description = description;
      this.photoURL = photoURL;
      this.title = title;
      this.price = price;
      this.from = from;
      this.to = to;
      this.userId = userId;
      this.location = location;
    };
    /***/

  },

  /***/
  "./src/app/places/place.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/places/place.service.ts ***!
    \*****************************************/

  /*! exports provided: PlaceService */

  /***/
  function srcAppPlacesPlaceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceService", function () {
      return PlaceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _place_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./place.model */
    "./src/app/places/place.model.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PlaceService = /*#__PURE__*/function () {
      function PlaceService(http) {
        _classCallCheck(this, PlaceService);

        this.http = http;
        this._places = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
      }

      _createClass(PlaceService, [{
        key: "fetchData",
        value: function fetchData() {
          var _this5 = this;

          return this.http.get("https://airbnblight.firebaseio.com/offers.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            var placesList = [];

            for (var s in res) {
              if (res.hasOwnProperty(s)) {
                placesList.push(new _place_model__WEBPACK_IMPORTED_MODULE_2__["Place"](s, res[s].description, res[s].photoURL, res[s].title, +res[s].price, new Date(res[s].from), new Date(res[s].to), res[s].userId, res[s].location));
              }
            }

            return placesList;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (placesList) {
            console.log("chnaging");

            _this5._places.next(placesList);
          }));
        }
      }, {
        key: "findPlace",
        value: function findPlace(placeId) {
          return this.http.get("https://airbnblight.firebaseio.com/offers/".concat(placeId, ".json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _place_model__WEBPACK_IMPORTED_MODULE_2__["Place"](placeId, res.description, res.photoURL, res.title, +res.price, new Date(res.from), new Date(res.to), res.userId, res.location);
          }));
          /*return this._places.pipe(take(1),map(places=>{
            return places.find(
              p=>
              {
              return p.id==placeId
            })
          }))*/
        }
      }, {
        key: "updatePlace",
        value: function updatePlace(id, title, description, price, availible, to, location) {
          var _this6 = this;

          var updatePlaces = [];
          return this._places.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (places) {
            if (!places || places.length <= 0) {
              return _this6.fetchData();
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(places);
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (places) {
            var index = places.findIndex(function (p) {
              return p.id == id;
            });
            updatePlaces = _toConsumableArray(places);
            updatePlaces[index].title = title;
            updatePlaces[index].description = description;
            updatePlaces[index].from = availible;
            updatePlaces[index].to = to;
            updatePlaces[index].price = price;
            updatePlaces[index].location = location;
            return _this6.http.put("https://airbnblight.firebaseio.com/offers/".concat(id, ".json"), Object.assign({}, updatePlaces[index], {
              id: null
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this6._places.next(updatePlaces);
          }));
          /*return this._places.pipe(take(1),delay(1000),tap(places=>{
              const index=places.findIndex(p=>{
                return p.id==id
              })
              const updatePlaces=[...places]
              updatePlaces[index].title=title
              updatePlaces[index].description=description
              updatePlaces[index].from=availible
              updatePlaces[index].to=to
              updatePlaces[index].price=price
              this._places.next(updatePlaces)
          }))*/
        }
      }, {
        key: "addPlace",
        value: function addPlace(place) {
          var _this7 = this;

          var id;
          return this.http.post("https://airbnblight.firebaseio.com/offers.json", Object.assign({}, place, {
            id: null
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (result) {
            id = result.name;
            return _this7._places;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (places) {
            place.id = id;

            _this7._places.next(places.concat(place));
          })); //return this._places.pipe(take(1),delay(1000),tap(places=>{
          // this._places.next(places.concat(place))
          //}))
        }
      }, {
        key: "places",
        get: function get() {
          return this._places.asObservable();
        }
      }]);

      return PlaceService;
    }();

    PlaceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    PlaceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])], PlaceService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map