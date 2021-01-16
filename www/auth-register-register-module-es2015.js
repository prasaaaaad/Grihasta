(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-register-register-module"],{

/***/ "9WYv":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"header\">Register</h1>\n\n  <div class=\"container\">\n    <form class=\"regForm\">\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">First name</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Last name</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-list>\n        <ion-list-header>\n          <ion-label>Select your flat:</ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Wing</ion-label>\n          <ion-select>\n            <ion-select-option value=\"A\">A</ion-select-option>\n            <ion-select-option value=\"B\">B</ion-select-option>\n            <ion-select-option value=\"C\">C</ion-select-option>\n            <ion-select-option value=\"D\">D</ion-select-option>\n            <ion-select-option value=\"E\">E</ion-select-option>\n            <ion-select-option value=\"F\">F</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Flat Number</ion-label>\n          <ion-select>\n            <ion-select-option value=\"11\">11</ion-select-option>\n            <ion-select-option value=\"12\">12</ion-select-option>\n            <ion-select-option value=\"13\">13</ion-select-option>\n            <ion-select-option value=\"14\">14</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-radio-group value=\"ResidentType\">\n          <ion-list-header>\n            <ion-label>Resident type:</ion-label>\n          </ion-list-header>\n\n          <ion-item>\n            <ion-label>Owner</ion-label>\n            <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Tenant</ion-label>\n            <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n\n      <ion-list>\n        <ion-radio-group value=\"\">\n          <ion-list-header>\n            <ion-label>Profile:</ion-label>\n          </ion-list-header>\n\n          <ion-item>\n            <ion-label>Home Manager</ion-label>\n            <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Additional Family Member</ion-label>\n            <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n\n      <ion-row>\n        <ion-col>\n          <ion-button fill=\"outline\" expand=\"block\" class=\"submit\" type=\"submit\" color=\"primary\">Register</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>");

/***/ }),

/***/ "Ro0S":
/*!**********************************************************!*\
  !*** ./src/app/auth/register/register-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "yhyc");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "UrDz":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "Ro0S");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "yhyc");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "r/uw":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header::after {\n  background-image: none;\n}\n\n.header {\n  margin-left: 1em;\n  font-weight: bold;\n  font-size: 2em;\n}\n\n.container {\n  margin: 2em 1em 0 1em;\n  padding: 0 1em;\n}\n\n.regForm {\n  margin-bottom: 2em;\n}\n\nion-item {\n  margin-bottom: 10px;\n}\n\n.submit {\n  margin-top: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyZW0gMWVtIDAgMWVtO1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbi5yZWdGb3JtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "yhyc":
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "9WYv");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "r/uw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RegisterPage = class RegisterPage {
    constructor() { }
    ngOnInit() {
    }
};
RegisterPage.ctorParameters = () => [];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=auth-register-register-module-es2015.js.map