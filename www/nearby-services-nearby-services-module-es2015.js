(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nearby-services-nearby-services-module"],{

/***/ "IW59":
/*!*******************************************************************!*\
  !*** ./src/app/nearby-services/nearby-services-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NearbyServicesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyServicesPageRoutingModule", function() { return NearbyServicesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nearby_services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nearby-services.page */ "dLK2");




const routes = [
    {
        path: '',
        component: _nearby_services_page__WEBPACK_IMPORTED_MODULE_3__["NearbyServicesPage"]
    }
];
let NearbyServicesPageRoutingModule = class NearbyServicesPageRoutingModule {
};
NearbyServicesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NearbyServicesPageRoutingModule);



/***/ }),

/***/ "IgtN":
/*!***********************************************************!*\
  !*** ./src/app/nearby-services/nearby-services.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header::after {\n  background-image: none;\n}\n\n.header {\n  margin-left: 1em;\n  font-weight: bold;\n  font-size: 2em;\n}\n\n.container {\n  margin: 2em 1em 0 1em;\n  padding: 0 1em 1em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5lYXJieS1zZXJ2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7QUFBSiIsImZpbGUiOiJuZWFyYnktc2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDJlbSAxZW0gMCAxZW07XHJcbiAgICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xyXG59Il19 */");

/***/ }),

/***/ "JSYt":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nearby-services/nearby-services.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-title>nearby-services</ion-title> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"header\">Nearby Services</h1>\n\n  <div class=\"container\">\n    <p>This service is coming soon.</p>\n  </div>\n</ion-content>");

/***/ }),

/***/ "U0hn":
/*!***********************************************************!*\
  !*** ./src/app/nearby-services/nearby-services.module.ts ***!
  \***********************************************************/
/*! exports provided: NearbyServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyServicesPageModule", function() { return NearbyServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nearby_services_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nearby-services-routing.module */ "IW59");
/* harmony import */ var _nearby_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nearby-services.page */ "dLK2");







let NearbyServicesPageModule = class NearbyServicesPageModule {
};
NearbyServicesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nearby_services_routing_module__WEBPACK_IMPORTED_MODULE_5__["NearbyServicesPageRoutingModule"]
        ],
        declarations: [_nearby_services_page__WEBPACK_IMPORTED_MODULE_6__["NearbyServicesPage"]]
    })
], NearbyServicesPageModule);



/***/ }),

/***/ "dLK2":
/*!*********************************************************!*\
  !*** ./src/app/nearby-services/nearby-services.page.ts ***!
  \*********************************************************/
/*! exports provided: NearbyServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyServicesPage", function() { return NearbyServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nearby_services_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nearby-services.page.html */ "JSYt");
/* harmony import */ var _nearby_services_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nearby-services.page.scss */ "IgtN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NearbyServicesPage = class NearbyServicesPage {
    constructor() { }
    ngOnInit() {
    }
};
NearbyServicesPage.ctorParameters = () => [];
NearbyServicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nearby-services',
        template: _raw_loader_nearby_services_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nearby_services_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NearbyServicesPage);



/***/ })

}]);
//# sourceMappingURL=nearby-services-nearby-services-module-es2015.js.map