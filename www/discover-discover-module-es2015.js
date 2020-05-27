(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\"color=\"primary\"  slot=\"start\">\n      <ion-menu-button menu=\"first\"></ion-menu-button>\n    </ion-button>\n    <ion-title>discover</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-segment value=\"all\" (ionChange)=\"onChange($event)\" #segment>\n    <ion-segment-button value=\"all\">All places</ion-segment-button>\n    <ion-segment-button value=\"bookable\">Bookable</ion-segment-button>\n  </ion-segment>\n  <div class=\"ion-text-center\" *ngIf=\"isLoading\">\n    <ion-spinner ></ion-spinner>\n  </div>\n    <ion-row *ngIf=\"places.length>0\">\n      <ion-col  text-center> \n          <ion-card size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n            <ion-card-header>\n              <ion-card-title class=\"ion-text-center\">\n                {{places[0].description}}\n              </ion-card-title>\n              <ion-card-subtitle>\n                {{places[0].price | currency}}/night\n              </ion-card-subtitle>\n            </ion-card-header>\n            <ion-img [src]=\"places[0].photoURL\"></ion-img>\n            <ion-card-content text-center>\n              <p>{{places[0].title}}</p>\n            </ion-card-content>\n            <div class=\"ion-text-end\">\n              <ion-button  color=\"primary\" fill=\"clear\" [routerLink]=\"[places[0].id]\">\n                More\n              </ion-button>\n            </div>\n          </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center> \n       <ion-list>\n         <ion-item *ngFor=\"let p of places.slice(1)\" [routerLink]=\"[p.id]\" detail>\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"p.photoURL\"></ion-img>\n            </ion-thumbnail>\n            <ion-label class=\"ion-text-center\">\n              <h2>{{p.description}}</h2>\n              <p>{{p.price | currency}}/night</p>\n            </ion-label>\n         </ion-item>\n       </ion-list>\n      </ion-col>\n    </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/places/discover/discover-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/places/discover/discover-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DiscoverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageRoutingModule", function() { return DiscoverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discover.page */ "./src/app/places/discover/discover.page.ts");




const routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_3__["DiscoverPage"]
    },
    {
        path: 'place-detail',
        loadChildren: () => Promise.all(/*! import() | place-detail-place-detail-module */[__webpack_require__.e("default~discover-place-detail-place-detail-module~new-offer-new-offer-module~offers-new-offer-new-of~089e34c1"), __webpack_require__.e("default~discover-place-detail-place-detail-module~place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ./place-detail/place-detail.module */ "./src/app/places/discover/place-detail/place-detail.module.ts")).then(m => m.PlaceDetailPageModule)
    }
];
let DiscoverPageRoutingModule = class DiscoverPageRoutingModule {
};
DiscoverPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DiscoverPageRoutingModule);



/***/ }),

/***/ "./src/app/places/discover/discover.module.ts":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.module.ts ***!
  \****************************************************/
/*! exports provided: DiscoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _discover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover-routing.module */ "./src/app/places/discover/discover-routing.module.ts");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover.page */ "./src/app/places/discover/discover.page.ts");







let DiscoverPageModule = class DiscoverPageModule {
};
DiscoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _discover_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverPageRoutingModule"]
        ],
        declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_6__["DiscoverPage"]]
    })
], DiscoverPageModule);



/***/ }),

/***/ "./src/app/places/discover/discover.page.scss":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kaXNjb3Zlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/places/discover/discover.page.ts":
/*!**************************************************!*\
  !*** ./src/app/places/discover/discover.page.ts ***!
  \**************************************************/
/*! exports provided: DiscoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPage", function() { return DiscoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../place.service */ "./src/app/places/place.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let DiscoverPage = class DiscoverPage {
    constructor(placeService, authService) {
        this.placeService = placeService;
        this.authService = authService;
        this.isLoading = true;
    }
    ionViewWillEnter() {
        if (this.segment.value == 'all') {
            this.places = this.allPlaces;
        }
        else if (this.segment.value == 'bookable') {
            this.places = this.allPlaces.filter(p => p.userId != this.authService.userId);
        }
        this.placeService.fetchData().subscribe(() => {
            this.isLoading = false;
        });
    }
    ngOnInit() {
        this.placesSubscription = this.placeService.places.subscribe(places => {
            this.allPlaces = places;
            this.places = this.allPlaces;
        });
    }
    onChange(event) {
        if (event.detail.value == 'all') {
            this.places = this.allPlaces;
        }
        else if (event.detail.value == 'bookable') {
            this.places = this.allPlaces.filter(p => p.userId != this.authService.userId);
        }
    }
    ngOnDestroy() {
        if (this.placesSubscription) {
            this.placesSubscription.unsubscribe();
        }
    }
};
DiscoverPage.ctorParameters = () => [
    { type: _place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('segment', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegment"])
], DiscoverPage.prototype, "segment", void 0);
DiscoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-discover',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./discover.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./discover.page.scss */ "./src/app/places/discover/discover.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], DiscoverPage);



/***/ })

}]);
//# sourceMappingURL=discover-discover-module-es2015.js.map