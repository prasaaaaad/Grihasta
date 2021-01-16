(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-visitor-pass-visitor-pass-module"],{

/***/ "E7Xa":
/*!*********************************************************!*\
  !*** ./src/app/pages/visitor-pass/visitor-pass.page.ts ***!
  \*********************************************************/
/*! exports provided: VisitorPassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorPassPage", function() { return VisitorPassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visitor_pass_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visitor-pass.page.html */ "ffLf");
/* harmony import */ var _visitor_pass_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitor-pass.page.scss */ "xWHN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let VisitorPassPage = class VisitorPassPage {
    constructor() {
        this.currentDate = new Date().toISOString();
        this.passType = 'single';
    }
    ngOnInit() { }
};
VisitorPassPage.ctorParameters = () => [];
VisitorPassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-visitor-pass',
        template: _raw_loader_visitor_pass_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visitor_pass_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VisitorPassPage);



/***/ }),

/***/ "e/gk":
/*!***********************************************************!*\
  !*** ./src/app/pages/visitor-pass/visitor-pass.module.ts ***!
  \***********************************************************/
/*! exports provided: VisitorPassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorPassPageModule", function() { return VisitorPassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _visitor_pass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitor-pass-routing.module */ "rWS+");
/* harmony import */ var _visitor_pass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitor-pass.page */ "E7Xa");







let VisitorPassPageModule = class VisitorPassPageModule {
};
VisitorPassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _visitor_pass_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitorPassPageRoutingModule"]
        ],
        declarations: [_visitor_pass_page__WEBPACK_IMPORTED_MODULE_6__["VisitorPassPage"]]
    })
], VisitorPassPageModule);



/***/ }),

/***/ "ffLf":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visitor-pass/visitor-pass.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngSwitch]=\"passType\">\n  <h1 class=\"header\">Visitor Pass</h1>\n\n  <ion-item class=\"pass-type\">\n    <ion-label>Pass type:</ion-label>\n    <ion-select value=\"single\" interface=\"action-sheet\" placeholder=\"Select One\">\n      <ion-select-option value=\"single\">Single day</ion-select-option>\n      <ion-select-option value=\"weekly\">Weekly</ion-select-option>\n      <ion-select-option value=\"monthly\">Monthly</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <!-- Single day pass -->\n  <div *ngSwitchCase=\"'single'\">\n    <form class=\"visitorForm\">\n\n      <ion-item lines=\"full\">\n        <ion-label>Date</ion-label>\n        <ion-datetime min=\"{{ currentDate }}\" displayFormat=\"D MMMM, YYYY\" value=\"{{ currentDate }}\"\n          placeholder=\"Select Date\"></ion-datetime>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">First name</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Last name</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Additional members</ion-label>\n        <ion-input inputmode=\"numeric\" type=\"number\" min=\"0\" max=\"1000\" maxlength=\"4\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Mobile number</ion-label>\n        <ion-input inputmode=\"tel\" type=\"tel\" pattern=\"tel\" maxlength=\"10\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-textarea rows=\"3\" placeholder=\"Reason for visit\"></ion-textarea>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button fill=\"outline\" expand=\"block\" class=\"submit\" type=\"submit\" color=\"primary\">Submit</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n\n  <!-- Weekly pass -->\n  <div *ngSwitchCase=\"'weekly'\">\n    <!-- <h1 class=\"header\">Visitor Pass</h1> -->\n    <form class=\"visitorForm\">\n\n      <ion-item lines=\"full\">\n        <ion-label>Start date</ion-label>\n        <ion-datetime min=\"{{ currentDate }}\" displayFormat=\"D MMMM, YYYY\" value=\"{{ currentDate }}\"\n          placeholder=\"Select Date\"></ion-datetime>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>End date</ion-label>\n        <ion-datetime min=\"{{ currentDate }}\" displayFormat=\"D MMMM, YYYY\" value=\"{{ currentDate }}\"\n          placeholder=\"Select Date\"></ion-datetime>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">First name</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Last name</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Additional members</ion-label>\n        <ion-input inputmode=\"numeric\" type=\"number\" min=\"0\" max=\"1000\" maxlength=\"4\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Mobile number</ion-label>\n        <ion-input inputmode=\"tel\" type=\"tel\" pattern=\"tel\" maxlength=\"10\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-textarea rows=\"3\" placeholder=\"Reason for visit\"></ion-textarea>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button fill=\"outline\" expand=\"block\" class=\"submit\" type=\"submit\" color=\"primary\">Submit</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n\n  <!-- Monthly pass -->\n  <div *ngSwitchCase=\"'monthly'\">\n    <!-- <h1 class=\"header\">Visitor Pass</h1> -->\n    <form class=\"visitorForm\">\n\n      <ion-item lines=\"full\">\n        <ion-label>Start month</ion-label>\n        <ion-datetime min=\"{{ currentDate }}\" displayFormat=\"MMMM, YYYY\" value=\"{{ currentDate }}\"\n          placeholder=\"Select Date\"></ion-datetime>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>End month</ion-label>\n        <ion-datetime min=\"{{ currentDate }}\" displayFormat=\"MMMM, YYYY\" value=\"{{ currentDate }}\"\n          placeholder=\"Select Date\"></ion-datetime>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">First name</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Last name</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Additional members</ion-label>\n        <ion-input inputmode=\"numeric\" type=\"number\" min=\"0\" max=\"1000\" maxlength=\"4\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Mobile number</ion-label>\n        <ion-input inputmode=\"tel\" type=\"tel\" pattern=\"tel\" maxlength=\"10\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-textarea rows=\"3\" placeholder=\"Reason for visit\"></ion-textarea>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button fill=\"outline\" expand=\"block\" class=\"submit\" type=\"submit\" color=\"primary\">Submit</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "rWS+":
/*!*******************************************************************!*\
  !*** ./src/app/pages/visitor-pass/visitor-pass-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VisitorPassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorPassPageRoutingModule", function() { return VisitorPassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _visitor_pass_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitor-pass.page */ "E7Xa");




const routes = [
    {
        path: '',
        component: _visitor_pass_page__WEBPACK_IMPORTED_MODULE_3__["VisitorPassPage"]
    }
];
let VisitorPassPageRoutingModule = class VisitorPassPageRoutingModule {
};
VisitorPassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VisitorPassPageRoutingModule);



/***/ }),

/***/ "xWHN":
/*!***********************************************************!*\
  !*** ./src/app/pages/visitor-pass/visitor-pass.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header::after {\n  background-image: none;\n}\n\n.header {\n  margin-left: 1em;\n  font-weight: bold;\n  font-size: 2em;\n}\n\n.pass-type {\n  margin-top: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.visitorForm {\n  margin-left: 1em;\n  margin-right: 1em;\n  padding-bottom: 2em;\n}\n\nion-item {\n  margin-bottom: 10px;\n}\n\n.submit {\n  margin-top: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aXNpdG9yLXBhc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBR0EsaUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7QUFESiIsImZpbGUiOiJ2aXNpdG9yLXBhc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4ucGFzcy10eXBlIHtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnZpc2l0b3JGb3JtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-visitor-pass-visitor-pass-module-es2015.js.map