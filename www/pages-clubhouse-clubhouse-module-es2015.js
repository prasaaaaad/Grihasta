(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clubhouse-clubhouse-module"],{

/***/ "JBQx":
/*!*****************************************************!*\
  !*** ./src/app/pages/clubhouse/clubhouse.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header::after {\n  background-image: none;\n}\n\n.header {\n  margin-left: 1em;\n  font-weight: bold;\n  font-size: 2em;\n}\n\n.container {\n  margin-top: 3em;\n  margin-left: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjbHViaG91c2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSiIsImZpbGUiOiJjbHViaG91c2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG59Il19 */");

/***/ }),

/***/ "OtvL":
/*!*****************************************************!*\
  !*** ./src/app/pages/clubhouse/clubhouse.module.ts ***!
  \*****************************************************/
/*! exports provided: ClubhousePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubhousePageModule", function() { return ClubhousePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _clubhouse_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clubhouse-routing.module */ "ZHyA");
/* harmony import */ var _clubhouse_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clubhouse.page */ "kkq2");







let ClubhousePageModule = class ClubhousePageModule {
};
ClubhousePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _clubhouse_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClubhousePageRoutingModule"]
        ],
        declarations: [_clubhouse_page__WEBPACK_IMPORTED_MODULE_6__["ClubhousePage"]]
    })
], ClubhousePageModule);



/***/ }),

/***/ "ZHyA":
/*!*************************************************************!*\
  !*** ./src/app/pages/clubhouse/clubhouse-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ClubhousePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubhousePageRoutingModule", function() { return ClubhousePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _clubhouse_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clubhouse.page */ "kkq2");




const routes = [
    {
        path: '',
        component: _clubhouse_page__WEBPACK_IMPORTED_MODULE_3__["ClubhousePage"]
    }
];
let ClubhousePageRoutingModule = class ClubhousePageRoutingModule {
};
ClubhousePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClubhousePageRoutingModule);



/***/ }),

/***/ "iOeJ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clubhouse/clubhouse.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-title>clubhouse</ion-title> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"header\">Clubhouse</h1>\n\n  <div class=\"container\">\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "kkq2":
/*!***************************************************!*\
  !*** ./src/app/pages/clubhouse/clubhouse.page.ts ***!
  \***************************************************/
/*! exports provided: ClubhousePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubhousePage", function() { return ClubhousePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clubhouse_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clubhouse.page.html */ "iOeJ");
/* harmony import */ var _clubhouse_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clubhouse.page.scss */ "JBQx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ClubhousePage = class ClubhousePage {
    constructor() { }
    ngOnInit() {
    }
};
ClubhousePage.ctorParameters = () => [];
ClubhousePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-clubhouse',
        template: _raw_loader_clubhouse_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clubhouse_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClubhousePage);



/***/ })

}]);
//# sourceMappingURL=pages-clubhouse-clubhouse-module-es2015.js.map