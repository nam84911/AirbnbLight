(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-booking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\"color=\"primary\"  slot=\"start\">\n      <ion-menu-button menu=\"first\"></ion-menu-button>\n    </ion-button>\n    <ion-title>Bookings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-text-center\" *ngIf=\"isLoading\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-grid *ngIf=\"!isLoading\"> \n    <ion-row>\n      <ion-col size-md=\"6\" offset-md=\"3\">\n        <ion-list>\n          <ion-item-sliding *ngFor =\"let booking of bookings\" #slider>\n            <ion-item>\n                <ion-thumbnail slot=\"start\">\n                  <ion-img [src]=\"booking.photoURL\"></ion-img>\n                </ion-thumbnail>\n                <ion-title>\n                  <ion-label>\n                        <ion-grid >\n                          <ion-row>\n                            <ion-col class=\"ion-text-start\"size-sm=\"7\">\n                              <h5>{{booking.title}}</h5>\n                            </ion-col>\n                            <ion-col class=\"ion-text-end\" size-sm=\"5\">\n                              <p>Guests: {{booking.guests}}</p>\n                            </ion-col>\n                          </ion-row>\n\n                          <ion-row>\n                            <ion-col class=\"ion-text-start\"size=\"6\">\n                              <ion-icon name=\"calendar\"></ion-icon>\n                              {{booking.from.getFullYear()}}/{{booking.from.getMonth()}}/{{booking.from.getDate()}}\n                            </ion-col>\n                            <ion-col class=\"ion-text-end\" size=\"6\">\n                              <ion-icon name=\"calendar\"></ion-icon>\n                              {{booking.to.getFullYear()}}/{{booking.to.getMonth()}}/{{booking.to.getDate()}}\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                      \n                  </ion-label>\n                </ion-title>\n            </ion-item>\n            <ion-item-options>\n              <ion-item-option color=\"danger\" (click)=\"onDelete(booking.id,slider)\">\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n\n            <ion-item-options side=\"start\" >\n              <ion-item-option color=\"danger\" (click)=\"onDelete(booking.id,slider)\">\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/booking/booking-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/booking/booking-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BookingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPageRoutingModule", function() { return BookingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking.page */ "./src/app/booking/booking.page.ts");




const routes = [
    {
        path: '',
        component: _booking_page__WEBPACK_IMPORTED_MODULE_3__["BookingPage"]
    }
];
let BookingPageRoutingModule = class BookingPageRoutingModule {
};
BookingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingPageRoutingModule);



/***/ }),

/***/ "./src/app/booking/booking.model.ts":
/*!******************************************!*\
  !*** ./src/app/booking/booking.model.ts ***!
  \******************************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Booking {
    constructor(id, placeId, userId, title, guests, first, last, photoURL, from, to) {
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
    }
}


/***/ }),

/***/ "./src/app/booking/booking.module.ts":
/*!*******************************************!*\
  !*** ./src/app/booking/booking.module.ts ***!
  \*******************************************/
/*! exports provided: BookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPageModule", function() { return BookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking-routing.module */ "./src/app/booking/booking-routing.module.ts");
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking.page */ "./src/app/booking/booking.page.ts");







let BookingPageModule = class BookingPageModule {
};
BookingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingPageRoutingModule"]
        ],
        declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_6__["BookingPage"]]
    })
], BookingPageModule);



/***/ }),

/***/ "./src/app/booking/booking.page.scss":
/*!*******************************************!*\
  !*** ./src/app/booking/booking.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvYm9va2luZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/booking/booking.page.ts":
/*!*****************************************!*\
  !*** ./src/app/booking/booking.page.ts ***!
  \*****************************************/
/*! exports provided: BookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPage", function() { return BookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.service */ "./src/app/booking/booking.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let BookingPage = class BookingPage {
    constructor(loading, service) {
        this.loading = loading;
        this.service = service;
        this.isLoading = true;
    }
    ngOnInit() {
        this.service.bookings.subscribe(bookings => {
            this.bookings = bookings;
        });
    }
    ionViewWillEnter() {
        this.isLoading = true;
        this.service.fetchBooking().subscribe(() => {
            this.isLoading = false;
        });
    }
    onDelete(id, slider) {
        slider.close();
        this.loading.create({ message: "Loading" }).then(ctr => {
            ctr.present();
            this.service.cancelBooking(id).subscribe(() => {
                ctr.dismiss();
            });
        });
    }
};
BookingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"] }
];
BookingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./booking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./booking.page.scss */ "./src/app/booking/booking.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"]])
], BookingPage);



/***/ }),

/***/ "./src/app/booking/booking.service.ts":
/*!********************************************!*\
  !*** ./src/app/booking/booking.service.ts ***!
  \********************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _booking_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.model */ "./src/app/booking/booking.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");







let BookingService = class BookingService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this._bookings = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    get bookings() {
        return this._bookings.asObservable();
    }
    fetchBooking() {
        return this.http.get(`https://airbnblight.firebaseio.com/bookings.json?orderBy="userId"&equalTo="${this.auth.userId}"`).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            const bookings = [];
            for (let s in res) {
                if (res.hasOwnProperty(s)) {
                    bookings.push(new _booking_model__WEBPACK_IMPORTED_MODULE_2__["Booking"](s, res[s].placeId, res[s].userId, res[s].title, +res[s].guests, res[s].first, res[s].last, res[s].photoURL, new Date(res[s].from), new Date(res[s].to)));
                }
            }
            return bookings;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(bookings => {
            this._bookings.next(bookings);
        }));
    }
    cancelBooking(id) {
        return this.http.delete(`https://airbnblight.firebaseio.com/bookings/${id}.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(res => {
            console.log(res);
            return this._bookings;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(bookings => {
            this._bookings.next(bookings.filter(b => b.id != id));
        }));
        /*return this.bookings.pipe(take(1),delay(1000),tap(bookings=>{
          this._bookings.next(bookings.filter(b=>b.id!=id))
        }))*/
    }
    addBooking(id, placeId, userId, title, guests, first, last, photoURL, from, to) {
        const booking = new _booking_model__WEBPACK_IMPORTED_MODULE_2__["Booking"](id, placeId, userId, title, guests, first, last, photoURL, from, to);
        let idIs;
        return this.http.post(`https://airbnblight.firebaseio.com/bookings.json`, Object.assign({}, booking, { id: null })).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(res => {
            idIs = res.name;
            return this._bookings;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(places => {
            booking.id = idIs;
            this._bookings.next(places.concat(booking));
        }));
        /*return this._bookings.pipe(take(1),delay(1000),tap(bookings=>{
          this._bookings.next(bookings.concat(booking))
        }))*/
    }
};
BookingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
BookingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], BookingService);



/***/ })

}]);
//# sourceMappingURL=booking-booking-module-es2015.js.map