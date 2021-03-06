function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["places-places-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/places/places.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/places.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacesPlacesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"discover\">\n      <ion-label> Search</ion-label>\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"offers\">\n      <ion-label> Offer</ion-label>\n      <ion-icon name=\"card\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/places/places-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/places/places-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: PlacesPageRoutingModule */

  /***/
  function srcAppPlacesPlacesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlacesPageRoutingModule", function () {
      return PlacesPageRoutingModule;
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


    var _places_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./places.page */
    "./src/app/places/places.page.ts");

    var routes = [{
      path: 'tabs',
      component: _places_page__WEBPACK_IMPORTED_MODULE_3__["PlacesPage"],
      children: [{
        path: 'discover',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | discover-discover-module */
            [__webpack_require__.e("common"), __webpack_require__.e("discover-discover-module")]).then(__webpack_require__.bind(null,
            /*! ./discover/discover.module */
            "./src/app/places/discover/discover.module.ts")).then(function (m) {
              return m.DiscoverPageModule;
            });
          }
        }, {
          path: ":placeId",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | discover-place-detail-place-detail-module */
            [__webpack_require__.e("default~discover-place-detail-place-detail-module~new-offer-new-offer-module~offers-new-offer-new-of~089e34c1"), __webpack_require__.e("default~discover-place-detail-place-detail-module~place-detail-place-detail-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
            /*! ./discover/place-detail/place-detail.module */
            "./src/app/places/discover/place-detail/place-detail.module.ts")).then(function (m) {
              return m.PlaceDetailPageModule;
            });
          }
        }]
      }, {
        path: 'offers',
        children: [{
          path: "",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | offers-offers-module */
            [__webpack_require__.e("common"), __webpack_require__.e("offers-offers-module")]).then(__webpack_require__.bind(null,
            /*! ./offers/offers.module */
            "./src/app/places/offers/offers.module.ts")).then(function (m) {
              return m.OffersPageModule;
            });
          }
        }, {
          path: "new",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | offers-new-offer-new-offer-module */
            [__webpack_require__.e("default~discover-place-detail-place-detail-module~new-offer-new-offer-module~offers-new-offer-new-of~089e34c1"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
            /*! ./offers/new-offer/new-offer.module */
            "./src/app/places/offers/new-offer/new-offer.module.ts")).then(function (m) {
              return m.NewOfferPageModule;
            });
          }
        }, {
          path: "edit/:placeId",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | offers-edit-offers-edit-offers-module */
            "common").then(__webpack_require__.bind(null,
            /*! ./offers/edit-offers/edit-offers.module */
            "./src/app/places/offers/edit-offers/edit-offers.module.ts")).then(function (m) {
              return m.EditOffersPageModule;
            });
          }
        }, {
          path: ":placeId",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | offers-offer-booking-offer-booking-module */
            "common").then(__webpack_require__.bind(null,
            /*! ./offers/offer-booking/offer-booking.module */
            "./src/app/places/offers/offer-booking/offer-booking.module.ts")).then(function (m) {
              return m.OfferBookingPageModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: "full"
      }]
    }, {
      path: '',
      redirectTo: '/places/tabs/discover',
      pathMatch: "full"
    }];

    var PlacesPageRoutingModule = function PlacesPageRoutingModule() {
      _classCallCheck(this, PlacesPageRoutingModule);
    };

    PlacesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlacesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/places/places.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/places/places.module.ts ***!
    \*****************************************/

  /*! exports provided: PlacesPageModule */

  /***/
  function srcAppPlacesPlacesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlacesPageModule", function () {
      return PlacesPageModule;
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


    var _places_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./places-routing.module */
    "./src/app/places/places-routing.module.ts");
    /* harmony import */


    var _places_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./places.page */
    "./src/app/places/places.page.ts");

    var PlacesPageModule = function PlacesPageModule() {
      _classCallCheck(this, PlacesPageModule);
    };

    PlacesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _places_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlacesPageRoutingModule"]],
      declarations: [_places_page__WEBPACK_IMPORTED_MODULE_6__["PlacesPage"]]
    })], PlacesPageModule);
    /***/
  },

  /***/
  "./src/app/places/places.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/places/places.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacesPlacesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9wbGFjZXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/places/places.page.ts":
  /*!***************************************!*\
    !*** ./src/app/places/places.page.ts ***!
    \***************************************/

  /*! exports provided: PlacesPage */

  /***/
  function srcAppPlacesPlacesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlacesPage", function () {
      return PlacesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PlacesPage = /*#__PURE__*/function () {
      function PlacesPage() {
        _classCallCheck(this, PlacesPage);
      }

      _createClass(PlacesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlacesPage;
    }();

    PlacesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-places',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./places.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/places/places.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./places.page.scss */
      "./src/app/places/places.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PlacesPage);
    /***/
  }
}]);
//# sourceMappingURL=places-places-module-es5.js.map