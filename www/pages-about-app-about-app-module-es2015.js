(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-app-about-app-module"],{

/***/ "+npF":
/*!*****************************************************!*\
  !*** ./src/app/pages/about-app/about-app.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutAppPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutAppPageModule", function() { return AboutAppPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _about_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-app-routing.module */ "Bcgo");
/* harmony import */ var _about_app_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-app.page */ "nWZm");







let AboutAppPageModule = class AboutAppPageModule {
};
AboutAppPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutAppPageRoutingModule"]
        ],
        declarations: [_about_app_page__WEBPACK_IMPORTED_MODULE_6__["AboutAppPage"]]
    })
], AboutAppPageModule);



/***/ }),

/***/ "Bcgo":
/*!*************************************************************!*\
  !*** ./src/app/pages/about-app/about-app-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AboutAppPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutAppPageRoutingModule", function() { return AboutAppPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_app_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-app.page */ "nWZm");




const routes = [
    {
        path: '',
        component: _about_app_page__WEBPACK_IMPORTED_MODULE_3__["AboutAppPage"]
    }
];
let AboutAppPageRoutingModule = class AboutAppPageRoutingModule {
};
AboutAppPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutAppPageRoutingModule);



/***/ }),

/***/ "PqcU":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-app/about-app.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>about-app</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"header\">About App</h1>\n\n  <div class=\"container\">\n    <p><strong>App Version:</strong> 1.0</p>\n    <br>\n    <p><strong>Credits:</strong></p>\n    <p>Ashish Das, Sham Dasappan, Shashank Bhoite, Prasad Patil</p>\n    <br>\n    <p><strong>End User Agreement:</strong></p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Integer quis auctor elit sed vulputate mi sit amet. In hendrerit gravida rutrum quisque. Eu nisl\n      nunc mi ipsum faucibus vitae aliquet nec. Parturient montes nascetur ridiculus mus mauris. Dictum at tempor\n      commodo ullamcorper a lacus vestibulum. Urna neque viverra justo nec. Lacus vel facilisis volutpat est velit.\n      Netus et malesuada fames ac. Consequat semper viverra nam libero justo laoreet sit amet. Dui id ornare arcu odio\n      ut. Tortor at auctor urna nunc id cursus metus. Nulla pellentesque dignissim enim sit amet venenatis urna cursus\n      eget. At tempor commodo ullamcorper a lacus. Faucibus scelerisque eleifend donec pretium vulputate sapien. Odio\n      morbi quis commodo odio aenean. Fermentum iaculis eu non diam phasellus vestibulum lorem. Vestibulum lectus mauris\n      ultrices eros in cursus. Convallis tellus id interdum velit.</p>\n\n    <p>Ullamcorper sit amet risus nullam eget felis. Vestibulum morbi blandit cursus risus. Quisque egestas diam in arcu\n      cursus. Non tellus orci ac auctor. Cursus vitae congue mauris rhoncus aenean. Pretium nibh ipsum consequat nisl\n      vel. A scelerisque purus semper eget duis. Ligula ullamcorper malesuada proin libero nunc consequat interdum\n      varius sit. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Gravida dictum fusce ut placerat orci\n      nulla pellentesque.</p>\n\n    <p>Lobortis elementum nibh tellus molestie nunc non. Eget nulla facilisi etiam dignissim diam quis enim lobortis.\n      Diam sollicitudin tempor id eu nisl nunc. Porta nibh venenatis cras sed. Ultrices tincidunt arcu non sodales neque\n      sodales ut etiam. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Massa ultricies mi quis\n      hendrerit dolor. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Feugiat sed lectus vestibulum\n      mattis ullamcorper velit sed ullamcorper morbi. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis\n      nisl. Diam quis enim lobortis scelerisque fermentum dui. Urna nec tincidunt praesent semper feugiat. Amet massa\n      vitae tortor condimentum. Justo eget magna fermentum iaculis eu. Posuere sollicitudin aliquam ultrices sagittis\n      orci a. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Nisl purus in mollis nunc sed id\n      semper risus. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Ac turpis egestas maecenas pharetra\n      convallis.</p>\n\n    <p>Pretium quam vulputate dignissim suspendisse in. Aliquam id diam maecenas ultricies mi. Imperdiet proin fermentum\n      leo vel. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Ac turpis egestas maecenas pharetra\n      convallis posuere morbi leo urna. Convallis posuere morbi leo urna molestie at. Faucibus ornare suspendisse sed\n      nisi lacus sed viverra tellus in. Viverra vitae congue eu consequat ac felis donec. Eget nulla facilisi etiam\n      dignissim diam quis enim lobortis scelerisque. Urna porttitor rhoncus dolor purus non enim praesent elementum.\n      Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Dolor sit amet consectetur adipiscing\n      elit ut aliquam purus sit. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sodales neque\n      sodales ut etiam sit amet nisl.</p>\n\n    <p>Feugiat in fermentum posuere urna nec tincidunt praesent semper. Mauris a diam maecenas sed enim ut sem. Risus at\n      ultrices mi tempus imperdiet nulla malesuada. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.\n      Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Enim nulla aliquet porttitor lacus luctus.\n      Eget felis eget nunc lobortis mattis. Lobortis mattis aliquam faucibus purus. Pulvinar proin gravida hendrerit\n      lectus. Consectetur lorem donec massa sapien faucibus. Mattis molestie a iaculis at. Sed odio morbi quis commodo.\n      Morbi quis commodo odio aenean sed. Lectus vestibulum mattis ullamcorper velit. Sollicitudin tempor id eu nisl\n      nunc mi. Enim sit amet venenatis urna cursus eget nunc scelerisque. Orci sagittis eu volutpat odio facilisis\n      mauris. Eget arcu dictum varius duis at consectetur. Tincidunt ornare massa eget egestas purus.</p>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "nWZm":
/*!***************************************************!*\
  !*** ./src/app/pages/about-app/about-app.page.ts ***!
  \***************************************************/
/*! exports provided: AboutAppPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutAppPage", function() { return AboutAppPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_app_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-app.page.html */ "PqcU");
/* harmony import */ var _about_app_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-app.page.scss */ "yx7p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AboutAppPage = class AboutAppPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutAppPage.ctorParameters = () => [];
AboutAppPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-app',
        template: _raw_loader_about_app_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_app_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutAppPage);



/***/ }),

/***/ "yx7p":
/*!*****************************************************!*\
  !*** ./src/app/pages/about-app/about-app.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header::after {\n  background-image: none;\n}\n\n.header {\n  margin-left: 1em;\n  font-weight: bold;\n  font-size: 2em;\n}\n\n.container {\n  margin: 2em 1em 0 1em;\n  padding: 0 1em;\n}\n\np {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC1hcHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUoiLCJmaWxlIjoiYWJvdXQtYXBwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyZW0gMWVtIDAgMWVtO1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-about-app-about-app-module-es2015.js.map