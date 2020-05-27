function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacesOffersOffersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\"color=\"primary\"  slot=\"start\">\n        <ion-menu-button menu=\"first\"></ion-menu-button>\n    </ion-button>\n    <ion-title>offers</ion-title>\n    <ion-button slot=\"primary\" fill=\"clear\" [routerLink]=\"['/','places','tabs','offers','new']\">\n      <ion-icon slot=\"icon-only\"  name=\"add\" ></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-spinner class=\"ion-text-center\"*ngIf=\"isLoading\"></ion-spinner>\n<ion-row>\n  <ion-col size='12' size-sm='8' offset-sm='2'>\n    <ion-list>\n      <ion-item-sliding *ngFor=\"let p of places\" #sliding>\n        <ion-item>\n          <ion-thumbnail>\n            <ion-img [src]=\"p.photoURL\"></ion-img>\n          </ion-thumbnail>\n          <ion-label class=\"ion-text-center\">\n            <h2>{{p.description}}</h2>\n            <p>{{p.price | currency}}/night</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item-options>\n          <ion-item-option color=\"secondary\" (click)=\"onEdit(p.id,sliding)\">\n            <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n      \n    </ion-list>\n  </ion-col>\n</ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/places/offers/offers-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/places/offers/offers-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: OffersPageRoutingModule */

  /***/
  function srcAppPlacesOffersOffersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function () {
      return OffersPageRoutingModule;
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


    var _offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./offers.page */
    "./src/app/places/offers/offers.page.ts");

    var routes = [{
      path: '',
      component: _offers_page__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
    }, {
      path: 'edit-offers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | edit-offers-edit-offers-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./edit-offers/edit-offers.module */
        "./src/app/places/offers/edit-offers/edit-offers.module.ts")).then(function (m) {
          return m.EditOffersPageModule;
        });
      }
    }, {
      path: 'offer-booking',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | offer-booking-offer-booking-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./offer-booking/offer-booking.module */
        "./src/app/places/offers/offer-booking/offer-booking.module.ts")).then(function (m) {
          return m.OfferBookingPageModule;
        });
      }
    }, {
      path: 'new-offer',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | new-offer-new-offer-module */
        [__webpack_require__.e("default~discover-place-detail-place-detail-module~new-offer-new-offer-module~offers-new-offer-new-of~089e34c1"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
        /*! ./new-offer/new-offer.module */
        "./src/app/places/offers/new-offer/new-offer.module.ts")).then(function (m) {
          return m.NewOfferPageModule;
        });
      }
    }];

    var OffersPageRoutingModule = function OffersPageRoutingModule() {
      _classCallCheck(this, OffersPageRoutingModule);
    };

    OffersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OffersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/places/offers/offers.module.ts":
  /*!************************************************!*\
    !*** ./src/app/places/offers/offers.module.ts ***!
    \************************************************/

  /*! exports provided: OffersPageModule */

  /***/
  function srcAppPlacesOffersOffersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPageModule", function () {
      return OffersPageModule;
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


    var _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./offers-routing.module */
    "./src/app/places/offers/offers-routing.module.ts");
    /* harmony import */


    var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./offers.page */
    "./src/app/places/offers/offers.page.ts");

    var OffersPageModule = function OffersPageModule() {
      _classCallCheck(this, OffersPageModule);
    };

    OffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersPageRoutingModule"]],
      declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]]
    })], OffersPageModule);
    /***/
  },

  /***/
  "./src/app/places/offers/offers.page.scss":
  /*!************************************************!*\
    !*** ./src/app/places/offers/offers.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacesOffersOffersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/places/offers/offers.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/places/offers/offers.page.ts ***!
    \**********************************************/

  /*! exports provided: OffersPage */

  /***/
  function srcAppPlacesOffersOffersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPage", function () {
      return OffersPage;
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
    /*! ../place.service */
    "./src/app/places/place.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OffersPage = /*#__PURE__*/function () {
      function OffersPage(router, menu, placeService) {
        _classCallCheck(this, OffersPage);

        this.router = router;
        this.menu = menu;
        this.placeService = placeService;
        this.isLoading = true;
      }

      _createClass(OffersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.placesSubscription = this.placeService.places.subscribe(function (places) {
            _this.places = places;
          });
          this.placeService.fetchData().subscribe();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.placeService.fetchData().subscribe(function () {
            _this2.isLoading = false;
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id, sliding) {
          sliding.close();
          this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', id]);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.placesSubscription) {
            this.placesSubscription.unsubscribe();
          }
        }
      }]);

      return OffersPage;
    }();

    OffersPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"]
      }];
    };

    OffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offers.page.scss */
      "./src/app/places/offers/offers.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"]])], OffersPage);
    /***/
  }
}]);
//# sourceMappingURL=offers-offers-module-es5.js.map