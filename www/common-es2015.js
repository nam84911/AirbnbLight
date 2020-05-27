(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
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
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/edit-offers/edit-offers.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/edit-offers/edit-offers.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" color=\"secondary\" slot=\"start\">\n      <ion-back-button [defaultHref]=\"['/','places','tabs','offers']\" ></ion-back-button>\n    </ion-button>\n    <ion-button fill=\"clear\" slot=\"primary\" (click)=\"edit()\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-button>\n    <ion-title>edit-offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-spinner *ngIf=\"isLoading\"></ion-spinner>\n  <form [formGroup]=\"form\" *ngIf=\"!isLoading\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input formControlName=\"title\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Description</ion-label>\n            <ion-textarea formControlName=\"description\" row=\"3\" type=\"text\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Price</ion-label>\n            <ion-input formControlName=\"price\" type=\"number\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Availible from</ion-label>\n            <ion-datetime formControlName=\"availible\" ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">To</ion-label>\n            <ion-datetime formControlName=\"to\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button slot=\"start\" fill=\"clear\" >\n      <ion-back-button defaultHref=\"places/tabs/offers\"></ion-back-button>\n    </ion-button>\n    <ion-button (click)=\"onSubmit()\" fill=\"clear\" slot=\"primary\" [disabled]=\"!form.valid\">\n      <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n    </ion-button>\n    <ion-title>new-offer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input formControlName=\"title\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Description</ion-label>\n            <ion-textarea formControlName=\"description\" row=\"3\" type=\"text\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Price</ion-label>\n            <ion-input formControlName=\"price\" type=\"number\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Availible from</ion-label>\n            <ion-datetime formControlName=\"availible\" ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">To</ion-label>\n            <ion-datetime formControlName=\"to\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <app-location-picker (pickLocation)=\"onPickLocation($event)\"></app-location-picker>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <app-time-picker (imagePicker)=\"onPickImage($event)\"></app-time-picker>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-booking/offer-booking.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-booking/offer-booking.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" color=\"secondary\" slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/offers\" ></ion-back-button>\n    </ion-button>\n    <ion-title>Booling</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button [routerLink]=\"['/','places','tabs','offers','edit',place.id]\">\n      Edit Booking\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/places/offers/edit-offers/edit-offers-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/places/offers/edit-offers/edit-offers-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EditOffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOffersPageRoutingModule", function() { return EditOffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-offers.page */ "./src/app/places/offers/edit-offers/edit-offers.page.ts");




const routes = [
    {
        path: '',
        component: _edit_offers_page__WEBPACK_IMPORTED_MODULE_3__["EditOffersPage"]
    }
];
let EditOffersPageRoutingModule = class EditOffersPageRoutingModule {
};
EditOffersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditOffersPageRoutingModule);



/***/ }),

/***/ "./src/app/places/offers/edit-offers/edit-offers.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/places/offers/edit-offers/edit-offers.module.ts ***!
  \*****************************************************************/
/*! exports provided: EditOffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOffersPageModule", function() { return EditOffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-offers-routing.module */ "./src/app/places/offers/edit-offers/edit-offers-routing.module.ts");
/* harmony import */ var _edit_offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-offers.page */ "./src/app/places/offers/edit-offers/edit-offers.page.ts");







let EditOffersPageModule = class EditOffersPageModule {
};
EditOffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditOffersPageRoutingModule"]
        ],
        declarations: [_edit_offers_page__WEBPACK_IMPORTED_MODULE_6__["EditOffersPage"]]
    })
], EditOffersPageModule);



/***/ }),

/***/ "./src/app/places/offers/edit-offers/edit-offers.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/places/offers/edit-offers/edit-offers.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvZWRpdC1vZmZlcnMvZWRpdC1vZmZlcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/places/offers/edit-offers/edit-offers.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/places/offers/edit-offers/edit-offers.page.ts ***!
  \***************************************************************/
/*! exports provided: EditOffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOffersPage", function() { return EditOffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../place.service */ "./src/app/places/place.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let EditOffersPage = class EditOffersPage {
    constructor(placeService, route, navCtr, loadCtr, router) {
        this.placeService = placeService;
        this.route = route;
        this.navCtr = navCtr;
        this.loadCtr = loadCtr;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.route.paramMap.subscribe(p => {
            if (!p.has('placeId')) {
                this.navCtr.navigateBack('places/tabs/offers');
                return;
            }
            this.placeSubscription = this.placeService.findPlace(p.get('placeId')).subscribe(place => {
                this.place = place;
                console.log(place);
                this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.place.title, {
                        updateOn: 'blur',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                    }),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.place.description, {
                        updateOn: 'blur',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                    }),
                    price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.place.price, {
                        updateOn: 'blur',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]
                    }),
                    availible: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.place.from.toISOString(), {
                        updateOn: 'blur',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                    }),
                    to: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.place.to.toISOString(), {
                        updateOn: 'blur',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                    }),
                    location: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.place.location, {
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                    })
                });
                this.isLoading = false;
            });
        });
    }
    edit() {
        this.loadCtr.create({ message: "Loading..." }).then(ctr => {
            ctr.present();
            this.placeService.updatePlace(this.place.id, this.form.value['title'], this.form.value['description'], +this.form.value['price'], new Date(this.form.value['availible']), new Date(this.form['to']), this.form.value['location']).subscribe(() => {
                ctr.dismiss();
                this.router.navigate(['/', 'places', 'tabs', 'offers']);
            });
        });
    }
    ngOnDestroy() {
        if (this.placeSubscription) {
            this.placeSubscription.unsubscribe();
        }
    }
};
EditOffersPage.ctorParameters = () => [
    { type: _place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditOffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-offers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-offers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/edit-offers/edit-offers.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-offers.page.scss */ "./src/app/places/offers/edit-offers/edit-offers.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], EditOffersPage);



/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NewOfferPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPageRoutingModule", function() { return NewOfferPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _new_offer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-offer.page */ "./src/app/places/offers/new-offer/new-offer.page.ts");




const routes = [
    {
        path: '',
        component: _new_offer_page__WEBPACK_IMPORTED_MODULE_3__["NewOfferPage"]
    }
];
let NewOfferPageRoutingModule = class NewOfferPageRoutingModule {
};
NewOfferPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewOfferPageRoutingModule);



/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.module.ts ***!
  \*************************************************************/
/*! exports provided: NewOfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPageModule", function() { return NewOfferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-offer-routing.module */ "./src/app/places/offers/new-offer/new-offer-routing.module.ts");
/* harmony import */ var _new_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-offer.page */ "./src/app/places/offers/new-offer/new-offer.page.ts");
/* harmony import */ var src_app_sharedfolder_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sharedfolder/shared.module */ "./src/app/sharedfolder/shared.module.ts");








let NewOfferPageModule = class NewOfferPageModule {
};
NewOfferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_sharedfolder_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewOfferPageRoutingModule"]
        ],
        declarations: [_new_offer_page__WEBPACK_IMPORTED_MODULE_6__["NewOfferPage"]]
    })
], NewOfferPageModule);



/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvbmV3LW9mZmVyL25ldy1vZmZlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.page.ts ***!
  \***********************************************************/
/*! exports provided: NewOfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPage", function() { return NewOfferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _place_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../place.model */ "./src/app/places/place.model.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../place.service */ "./src/app/places/place.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let NewOfferPage = class NewOfferPage {
    constructor(authSerivce, placeService, loadCtr, router) {
        this.authSerivce = authSerivce;
        this.placeService = placeService;
        this.loadCtr = loadCtr;
        this.router = router;
    }
    ngOnInit() {
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
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })
        });
    }
    onPickLocation(loc) {
        this.form.patchValue({ location: loc });
    }
    onPickImage(url) {
        if (typeof (url) == 'string') {
            try {
                const file = this.base64toBlob(url.replace("data:image/jpeg;base64,", ''), 'image/jpeg');
                this.form.patchValue({ image: file });
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            this.form.patchValue({ image: url });
        }
    }
    onSubmit() {
        let title = this.form.value['title'];
        let description = this.form.value['description'];
        let price = +this.form.value['price'];
        let availible = new Date(this.form.value['availible']);
        let to = new Date(this.form.value['to']);
        let placeLoc = this.form.value['location'];
        let place = new _place_model__WEBPACK_IMPORTED_MODULE_3__["Place"](Math.random().toString(), description, "https://i.picsum.photos/id/866/200/300.jpg", title, price, availible, to, this.authSerivce.userId, placeLoc);
        this.loadCtr.create({ message: "Loading..." }).then(ctr => {
            ctr.present();
            this.placeService.addPlace(place).subscribe(() => {
                ctr.dismiss();
                this.form.reset();
                this.router.navigate(['/places/tabs/offers']);
            });
        });
    }
    base64toBlob(base64Data, contentType) {
        contentType = contentType || '';
        const sliceSize = 1024;
        const byteCharacters = atob(base64Data);
        const bytesLength = byteCharacters.length;
        const slicesCount = Math.ceil(bytesLength / sliceSize);
        const byteArrays = new Array(slicesCount);
        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            const begin = sliceIndex * sliceSize;
            const end = Math.min(begin + sliceSize, bytesLength);
            const bytes = new Array(end - begin);
            for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, { type: contentType });
    }
};
NewOfferPage.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
NewOfferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-offer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-offer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-offer.page.scss */ "./src/app/places/offers/new-offer/new-offer.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], NewOfferPage);



/***/ }),

/***/ "./src/app/places/offers/offer-booking/offer-booking-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/places/offers/offer-booking/offer-booking-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OfferBookingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferBookingPageRoutingModule", function() { return OfferBookingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _offer_booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offer-booking.page */ "./src/app/places/offers/offer-booking/offer-booking.page.ts");




const routes = [
    {
        path: '',
        component: _offer_booking_page__WEBPACK_IMPORTED_MODULE_3__["OfferBookingPage"]
    }
];
let OfferBookingPageRoutingModule = class OfferBookingPageRoutingModule {
};
OfferBookingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OfferBookingPageRoutingModule);



/***/ }),

/***/ "./src/app/places/offers/offer-booking/offer-booking.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/places/offers/offer-booking/offer-booking.module.ts ***!
  \*********************************************************************/
/*! exports provided: OfferBookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferBookingPageModule", function() { return OfferBookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _offer_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offer-booking-routing.module */ "./src/app/places/offers/offer-booking/offer-booking-routing.module.ts");
/* harmony import */ var _offer_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer-booking.page */ "./src/app/places/offers/offer-booking/offer-booking.page.ts");







let OfferBookingPageModule = class OfferBookingPageModule {
};
OfferBookingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offer_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfferBookingPageRoutingModule"]
        ],
        declarations: [_offer_booking_page__WEBPACK_IMPORTED_MODULE_6__["OfferBookingPage"]]
    })
], OfferBookingPageModule);



/***/ }),

/***/ "./src/app/places/offers/offer-booking/offer-booking.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/places/offers/offer-booking/offer-booking.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXItYm9va2luZy9vZmZlci1ib29raW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/places/offers/offer-booking/offer-booking.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/places/offers/offer-booking/offer-booking.page.ts ***!
  \*******************************************************************/
/*! exports provided: OfferBookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferBookingPage", function() { return OfferBookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../place.service */ "./src/app/places/place.service.ts");





let OfferBookingPage = class OfferBookingPage {
    constructor(placeService, route, navCtr) {
        this.placeService = placeService;
        this.route = route;
        this.navCtr = navCtr;
    }
    ngOnDestroy() {
        if (this.placeSubscripiton) {
            this.placeSubscripiton.unsubscribe();
        }
    }
    ngOnInit() {
        this.route.paramMap.subscribe(p => {
            if (!p.has('placeId')) {
                this.navCtr.navigateBack('places/tabs/offers');
                return;
            }
            this.placeSubscripiton = this.placeService.findPlace(p.get('placeId')).subscribe(place => {
                this.place = place;
            });
        });
    }
};
OfferBookingPage.ctorParameters = () => [
    { type: _place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
OfferBookingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offer-booking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offer-booking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-booking/offer-booking.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offer-booking.page.scss */ "./src/app/places/offers/offer-booking/offer-booking.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], OfferBookingPage);



/***/ }),

/***/ "./src/app/places/place.model.ts":
/*!***************************************!*\
  !*** ./src/app/places/place.model.ts ***!
  \***************************************/
/*! exports provided: Place */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Place", function() { return Place; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Place {
    constructor(id, description, photoURL, title, price, from, to, userId, location) {
        this.id = id;
        this.description = description;
        this.photoURL = photoURL;
        this.title = title;
        this.price = price;
        this.from = from;
        this.to = to;
        this.userId = userId;
        this.location = location;
    }
}


/***/ }),

/***/ "./src/app/places/place.service.ts":
/*!*****************************************!*\
  !*** ./src/app/places/place.service.ts ***!
  \*****************************************/
/*! exports provided: PlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return PlaceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _place_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place.model */ "./src/app/places/place.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let PlaceService = class PlaceService {
    constructor(http) {
        this.http = http;
        this._places = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    get places() {
        return this._places.asObservable();
    }
    fetchData() {
        return this.http.get("https://airbnblight.firebaseio.com/offers.json").
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            let placesList = [];
            for (const s in res) {
                if (res.hasOwnProperty(s)) {
                    placesList.push(new _place_model__WEBPACK_IMPORTED_MODULE_2__["Place"](s, res[s].description, res[s].photoURL, res[s].title, +res[s].price, new Date(res[s].from), new Date(res[s].to), res[s].userId, res[s].location));
                }
            }
            return placesList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(placesList => {
            console.log("chnaging");
            this._places.next(placesList);
        }));
    }
    findPlace(placeId) {
        return this.http.get(`https://airbnblight.firebaseio.com/offers/${placeId}.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
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
    updatePlace(id, title, description, price, availible, to, location) {
        let updatePlaces = [];
        return this._places.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(places => {
            if (!places || places.length <= 0) {
                return this.fetchData();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(places);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(places => {
            const index = places.findIndex(p => {
                return p.id == id;
            });
            updatePlaces = [...places];
            updatePlaces[index].title = title;
            updatePlaces[index].description = description;
            updatePlaces[index].from = availible;
            updatePlaces[index].to = to;
            updatePlaces[index].price = price;
            updatePlaces[index].location = location;
            return this.http.put(`https://airbnblight.firebaseio.com/offers/${id}.json`, Object.assign({}, updatePlaces[index], { id: null }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => {
            this._places.next(updatePlaces);
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
    addPlace(place) {
        let id;
        return this.http.post("https://airbnblight.firebaseio.com/offers.json", Object.assign({}, place, { id: null })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(result => {
            id = result.name;
            return this._places;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(places => {
            place.id = id;
            this._places.next(places.concat(place));
        }));
        //return this._places.pipe(take(1),delay(1000),tap(places=>{
        // this._places.next(places.concat(place))
        //}))
    }
};
PlaceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
PlaceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], PlaceService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map