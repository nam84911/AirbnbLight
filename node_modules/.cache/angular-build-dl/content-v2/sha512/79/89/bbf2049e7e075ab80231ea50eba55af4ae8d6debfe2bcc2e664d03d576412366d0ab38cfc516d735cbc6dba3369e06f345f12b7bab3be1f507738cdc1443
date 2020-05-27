function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~discover-place-detail-place-detail-module~place-detail-place-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/create-booking/create-booking.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/create-booking/create-booking.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingCreateBookingCreateBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-button (click)=\"onCancel()\"fill=\"clear\" color=\"primary\" slot=\"primary\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n        <ion-title>Book this place</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #f=\"ngForm\" (ngSubmit)=\"onBook()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input\n            #first=\"ngModel\"\n            type=\"text\"\n            [(ngModel)]=\"form.first\"\n            name=\"first\"\n            required></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input\n            #last=\"ngModel\"\n            type=\"text\"\n            [(ngModel)]=\"form.last\"\n            name=\"last\"\n            required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Guests</ion-label>\n            <ion-select name=\"numGuests\" value=\"2\" #select>\n              <ion-select-option value=\"1\" checked=\"true\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size-sm=\"3\" offset-sm=\"3\">\n            <ion-item>\n              <ion-label position=\"floating\">Availible from</ion-label>\n              <ion-datetime name=\"availible\" \n                            [ngModel]=\"start?.toISOString()\"\n                            required\n                            [min]=\"selectedPlace.from.toISOString()\"\n                            [max]=\"selectedPlace.to.toISOString()\" #startDate></ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size-sm=\"3\" offset-sm=\"3\">\n            <ion-item>\n              <ion-label position=\"floating\">To</ion-label>\n              <ion-datetime name=\"to\"\n              [ngModel]=\"endDate?.toISOString()\"\n              [disabled]=\"!checkStart()\"\n              required\n              [max]=\"selectedPlace.to.toISOString()\"\n              [min]=\"startDate.value\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size-sm=\"6\" offset-sm=\"3\">\n            <ion-button [disabled]=\"!f.valid || !checkValid()\"type=\"submit\" class=\"ion-margin\" expand=\"block\">\n              Book\n            </ion-button>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacesDiscoverPlaceDetailPlaceDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" color=\"secondary\" slot=\"start\">\n      <ion-back-button defaultHref=\"/places\" ></ion-back-button>\n    </ion-button>\n    <ion-title>place-detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-text-center\" *ngIf=\"isLoading\">\n    <ion-spinner ></ion-spinner>\n  </div>\n  <ion-grid *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\">\n        <ion-img  class=\"img2\" [src]=\"place.photoURL\"></ion-img>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding\">\n      <ion-col class=\"ion-text-center\" size-sm=\"6\" offset-sm=\"3\">\n        <ion-label class=\"ion-text-center\">{{place.title}}</ion-label>\n        <p>{{place.description}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding\">\n      <ion-col class=\"ion-text-center\" size-sm=\"6\" offset-sm=\"3\">\n        <p>{{place.location.address}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\">\n        <ion-img (click)=\"openControl()\" class=\"img\" [src]=\"place.location.imageURL\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-button *ngIf=\"!isLoading&&isBookable()\" class=\"ion-float-right\" (click)=\"onBook()\">\n    Book\n  </ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/booking/booking.model.ts":
  /*!******************************************!*\
    !*** ./src/app/booking/booking.model.ts ***!
    \******************************************/

  /*! exports provided: Booking */

  /***/
  function srcAppBookingBookingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Booking", function () {
      return Booking;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Booking = function Booking(id, placeId, userId, title, guests, first, last, photoURL, from, to) {
      _classCallCheck(this, Booking);

      this.id = id;
      this.placeId = placeId;
      this.userId = userId;
      this.title = title;
      this.guests = guests;
      this.first = first;
      this.last = last;
      this.photoURL = photoURL;
      this.from = from;
      this.to = to;
    };
    /***/

  },

  /***/
  "./src/app/booking/booking.service.ts":
  /*!********************************************!*\
    !*** ./src/app/booking/booking.service.ts ***!
    \********************************************/

  /*! exports provided: BookingService */

  /***/
  function srcAppBookingBookingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingService", function () {
      return BookingService;
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


    var _booking_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./booking.model */
    "./src/app/booking/booking.model.ts");
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
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var BookingService = /*#__PURE__*/function () {
      function BookingService(http, auth) {
        _classCallCheck(this, BookingService);

        this.http = http;
        this.auth = auth;
        this._bookings = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
      }

      _createClass(BookingService, [{
        key: "fetchBooking",
        value: function fetchBooking() {
          var _this = this;

          return this.http.get("https://airbnblight.firebaseio.com/bookings.json?orderBy=\"userId\"&equalTo=\"".concat(this.auth.userId, "\"")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            var bookings = [];

            for (var s in res) {
              if (res.hasOwnProperty(s)) {
                bookings.push(new _booking_model__WEBPACK_IMPORTED_MODULE_2__["Booking"](s, res[s].placeId, res[s].userId, res[s].title, +res[s].guests, res[s].first, res[s].last, res[s].photoURL, new Date(res[s].from), new Date(res[s].to)));
              }
            }

            return bookings;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (bookings) {
            _this._bookings.next(bookings);
          }));
        }
      }, {
        key: "cancelBooking",
        value: function cancelBooking(id) {
          var _this2 = this;

          return this.http["delete"]("https://airbnblight.firebaseio.com/bookings/".concat(id, ".json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (res) {
            console.log(res);
            return _this2._bookings;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (bookings) {
            _this2._bookings.next(bookings.filter(function (b) {
              return b.id != id;
            }));
          }));
          /*return this.bookings.pipe(take(1),delay(1000),tap(bookings=>{
            this._bookings.next(bookings.filter(b=>b.id!=id))
          }))*/
        }
      }, {
        key: "addBooking",
        value: function addBooking(id, placeId, userId, title, guests, first, last, photoURL, from, to) {
          var _this3 = this;

          var booking = new _booking_model__WEBPACK_IMPORTED_MODULE_2__["Booking"](id, placeId, userId, title, guests, first, last, photoURL, from, to);
          var idIs;
          return this.http.post("https://airbnblight.firebaseio.com/bookings.json", Object.assign({}, booking, {
            id: null
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (res) {
            idIs = res.name;
            return _this3._bookings;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (places) {
            booking.id = idIs;

            _this3._bookings.next(places.concat(booking));
          }));
          /*return this._bookings.pipe(take(1),delay(1000),tap(bookings=>{
            this._bookings.next(bookings.concat(booking))
          }))*/
        }
      }, {
        key: "bookings",
        get: function get() {
          return this._bookings.asObservable();
        }
      }]);

      return BookingService;
    }();

    BookingService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    BookingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], BookingService);
    /***/
  },

  /***/
  "./src/app/booking/create-booking/create-booking.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/booking/create-booking/create-booking.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingCreateBookingCreateBookingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvY3JlYXRlLWJvb2tpbmcvY3JlYXRlLWJvb2tpbmcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/booking/create-booking/create-booking.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/booking/create-booking/create-booking.component.ts ***!
    \********************************************************************/

  /*! exports provided: CreateBookingComponent */

  /***/
  function srcAppBookingCreateBookingCreateBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateBookingComponent", function () {
      return CreateBookingComponent;
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


    var src_app_places_place_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/places/place.model */
    "./src/app/places/place.model.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CreateBookingComponent = /*#__PURE__*/function () {
      function CreateBookingComponent(modalCtr) {
        _classCallCheck(this, CreateBookingComponent);

        this.modalCtr = modalCtr;
        this.form = {
          first: "",
          last: ""
        };
      }

      _createClass(CreateBookingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.selectedMode == "Random") {
            this.start = this.selectedPlace.from;
            this.endDate = this.selectedPlace.to;
          }
        }
      }, {
        key: "onBook",
        value: function onBook() {
          if (!this.f.valid || !this.checkValid()) {
            return;
          }

          this.modalCtr.dismiss({
            bookingData: {
              first: this.f.value['first'],
              last: this.f.value['last'],
              num: this.select.value,
              from: this.f.value['availible'],
              to: this.f.value['to']
            }
          }, 'book');
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.modalCtr.dismiss(null, 'cancel');
        }
      }, {
        key: "checkValid",
        value: function checkValid() {
          return this.f.value['availible'] < this.f.value['to'];
        }
      }, {
        key: "checkStart",
        value: function checkStart() {
          return this.f.value['availible'] != null;
        }
      }]);

      return CreateBookingComponent;
    }();

    CreateBookingComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_places_place_model__WEBPACK_IMPORTED_MODULE_2__["Place"])], CreateBookingComponent.prototype, "selectedPlace", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CreateBookingComponent.prototype, "selectedMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])], CreateBookingComponent.prototype, "f", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('select', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelect"])], CreateBookingComponent.prototype, "select", void 0);
    CreateBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-booking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-booking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/create-booking/create-booking.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-booking.component.scss */
      "./src/app/booking/create-booking/create-booking.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], CreateBookingComponent);
    /***/
  },

  /***/
  "./src/app/places/discover/place-detail/place-detail-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/places/discover/place-detail/place-detail-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: PlaceDetailPageRoutingModule */

  /***/
  function srcAppPlacesDiscoverPlaceDetailPlaceDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceDetailPageRoutingModule", function () {
      return PlaceDetailPageRoutingModule;
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


    var _place_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./place-detail.page */
    "./src/app/places/discover/place-detail/place-detail.page.ts");

    var routes = [{
      path: '',
      component: _place_detail_page__WEBPACK_IMPORTED_MODULE_3__["PlaceDetailPage"]
    }];

    var PlaceDetailPageRoutingModule = function PlaceDetailPageRoutingModule() {
      _classCallCheck(this, PlaceDetailPageRoutingModule);
    };

    PlaceDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlaceDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/places/discover/place-detail/place-detail.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/places/discover/place-detail/place-detail.module.ts ***!
    \*********************************************************************/

  /*! exports provided: PlaceDetailPageModule */

  /***/
  function srcAppPlacesDiscoverPlaceDetailPlaceDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function () {
      return PlaceDetailPageModule;
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


    var _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./place-detail-routing.module */
    "./src/app/places/discover/place-detail/place-detail-routing.module.ts");
    /* harmony import */


    var _place_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./place-detail.page */
    "./src/app/places/discover/place-detail/place-detail.page.ts");
    /* harmony import */


    var src_app_booking_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/booking/create-booking/create-booking.component */
    "./src/app/booking/create-booking/create-booking.component.ts");
    /* harmony import */


    var src_app_sharedfolder_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/sharedfolder/shared.module */
    "./src/app/sharedfolder/shared.module.ts");

    var PlaceDetailPageModule = function PlaceDetailPageModule() {
      _classCallCheck(this, PlaceDetailPageModule);
    };

    PlaceDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_sharedfolder_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceDetailPageRoutingModule"]],
      declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlaceDetailPage"], src_app_booking_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_7__["CreateBookingComponent"]],
      entryComponents: [src_app_booking_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_7__["CreateBookingComponent"]]
    })], PlaceDetailPageModule);
    /***/
  },

  /***/
  "./src/app/places/discover/place-detail/place-detail.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/places/discover/place-detail/place-detail.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacesDiscoverPlaceDetailPlaceDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img {\n  width: 100%;\n  height: 25rem;\n  max-height: 30vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid;\n  margin: auto;\n}\n\n.img2 {\n  width: 100%;\n  height: 30rem;\n  max-height: 40vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid;\n  margin: auto;\n}\n\np {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYW1kby9Eb2N1bWVudC9pb25pYy9haXJibmIvc3JjL2FwcC9wbGFjZXMvZGlzY292ZXIvcGxhY2UtZGV0YWlsL3BsYWNlLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9wbGFjZS1kZXRhaWwvcGxhY2UtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENBO0VBQ0ksU0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL3BsYWNlLWRldGFpbC9wbGFjZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1cmVtO1xuICAgIG1heC1oZWlnaHQ6IDMwdmg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyOjFweCBzb2xpZDtcbiAgICBtYXJnaW46YXV0b1xufVxuLmltZzJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHJlbTtcbiAgICBtYXgtaGVpZ2h0OiA0MHZoO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlcjoxcHggc29saWQ7XG4gICAgbWFyZ2luOmF1dG9cbn1cblxucHtcbiAgICBtYXJnaW46MFxufVxuIiwiLmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cmVtO1xuICBtYXgtaGVpZ2h0OiAzMHZoO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmltZzIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHJlbTtcbiAgbWF4LWhlaWdodDogNDB2aDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW46IGF1dG87XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/places/discover/place-detail/place-detail.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/places/discover/place-detail/place-detail.page.ts ***!
    \*******************************************************************/

  /*! exports provided: PlaceDetailPage */

  /***/
  function srcAppPlacesDiscoverPlaceDetailPlaceDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceDetailPage", function () {
      return PlaceDetailPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_booking_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/booking/create-booking/create-booking.component */
    "./src/app/booking/create-booking/create-booking.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../place.service */
    "./src/app/places/place.service.ts");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var src_app_booking_booking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/booking/booking.service */
    "./src/app/booking/booking.service.ts");
    /* harmony import */


    var src_app_sharedfolder_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/sharedfolder/map-modal/map-modal.component */
    "./src/app/sharedfolder/map-modal/map-modal.component.ts");

    var PlaceDetailPage = /*#__PURE__*/function () {
      function PlaceDetailPage(loadingCtr, bookingService, action, placeSerive, modalCtr, navController, navCtr, activateRouter, auth) {
        _classCallCheck(this, PlaceDetailPage);

        this.loadingCtr = loadingCtr;
        this.bookingService = bookingService;
        this.action = action;
        this.placeSerive = placeSerive;
        this.modalCtr = modalCtr;
        this.navController = navController;
        this.navCtr = navCtr;
        this.activateRouter = activateRouter;
        this.auth = auth;
        this.isLoading = true;
      }

      _createClass(PlaceDetailPage, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.placeSubscription) {
            this.placeSubscription.unsubscribe();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.activateRouter.paramMap.subscribe(function (p) {
            if (!p.has('placeId')) {
              _this4.navCtr.navigateBack('places/tabs/offers');

              return;
            }

            _this4.placeSubscription = _this4.placeSerive.findPlace(p.get('placeId')).subscribe(function (place) {
              _this4.place = place;
              _this4.isLoading = false;
            });
          });
        }
      }, {
        key: "onBook",
        value: function onBook() {
          var _this5 = this;

          this.action.create({
            header: "Action",
            buttons: [{
              text: "Select Date",
              handler: function handler() {
                return _this5.modalCreation("Select");
              }
            }, {
              text: "Stay for the full time",
              handler: function handler() {
                return _this5.modalCreation("Random");
              }
            }, {
              text: "Cancel",
              role: 'cancel'
            }]
          }).then(function (ctr) {
            ctr.present();
          });
        }
      }, {
        key: "openControl",
        value: function openControl() {
          this.modalCtr.create({
            component: src_app_sharedfolder_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_8__["MapModalComponent"],
            componentProps: {
              selectable: false,
              loc: {
                lat: this.place.location.lat,
                lng: this.place.location.lng
              },
              title: "Check Location"
            }
          }).then(function (ctr) {
            ctr.present();
          });
        }
      }, {
        key: "modalCreation",
        value: function modalCreation(mode) {
          var _this6 = this;

          if (mode != 'Select' && mode != 'Random') {
            return;
          }

          this.modalCtr.create({
            component: src_app_booking_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_3__["CreateBookingComponent"],
            componentProps: {
              selectedPlace: this.place,
              selectedMode: mode
            }
          }).then(function (m) {
            m.present();
            return m.onDidDismiss();
          }).then(function (result) {
            if (result.role == 'cancel') {
              return;
            } else {
              _this6.loadingCtr.create({
                message: "Loading..."
              }).then(function (ctr) {
                ctr.present();

                _this6.bookingService.addBooking(Math.random().toString, _this6.place.id, _this6.auth.userId, _this6.place.title, +result.data['bookingData']['num'], result.data['bookingData']['first'], result.data['bookingData']['last'], _this6.place.photoURL, new Date(result.data['bookingData']['from']), new Date(result.data['bookingData']['to'])).subscribe(function () {
                  ctr.dismiss();
                });
              });
            }
          });
        }
      }, {
        key: "isBookable",
        value: function isBookable() {
          return this.auth.userId != this.place.userId;
        }
      }]);

      return PlaceDetailPage;
    }();

    PlaceDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_app_booking_booking_service__WEBPACK_IMPORTED_MODULE_7__["BookingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    PlaceDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-place-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./place-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./place-detail.page.scss */
      "./src/app/places/discover/place-detail/place-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], src_app_booking_booking_service__WEBPACK_IMPORTED_MODULE_7__["BookingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], PlaceDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=default~discover-place-detail-place-detail-module~place-detail-place-detail-module-es5.js.map