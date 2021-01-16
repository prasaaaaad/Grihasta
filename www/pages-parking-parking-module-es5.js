(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parking-parking-module"], {
    /***/
    "K7it":
    /*!*************************************************!*\
      !*** ./src/app/pages/parking/parking.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function K7it(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header::after {\n  background-image: none;\n}\n\n.header {\n  margin-left: 1em;\n  font-weight: bold;\n  font-size: 2em;\n}\n\n.container {\n  margin: 2em 1em 0 1em;\n}\n\n.parkingForm {\n  padding-bottom: 2em;\n}\n\nion-item {\n  margin-bottom: 10px;\n}\n\n.submit {\n  margin-top: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYXJraW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJwYXJraW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyZW0gMWVtIDAgMWVtO1xyXG59XHJcblxyXG4ucGFya2luZ0Zvcm0ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "Y65Z":
    /*!*************************************************!*\
      !*** ./src/app/pages/parking/parking.module.ts ***!
      \*************************************************/

    /*! exports provided: ParkingPageModule */

    /***/
    function Y65Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParkingPageModule", function () {
        return ParkingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _parking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./parking-routing.module */
      "coVr");
      /* harmony import */


      var _parking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./parking.page */
      "dEc+");

      var ParkingPageModule = function ParkingPageModule() {
        _classCallCheck(this, ParkingPageModule);
      };

      ParkingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _parking_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParkingPageRoutingModule"]],
        declarations: [_parking_page__WEBPACK_IMPORTED_MODULE_6__["ParkingPage"]]
      })], ParkingPageModule);
      /***/
    },

    /***/
    "coVr":
    /*!*********************************************************!*\
      !*** ./src/app/pages/parking/parking-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ParkingPageRoutingModule */

    /***/
    function coVr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParkingPageRoutingModule", function () {
        return ParkingPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _parking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./parking.page */
      "dEc+");

      var routes = [{
        path: '',
        component: _parking_page__WEBPACK_IMPORTED_MODULE_3__["ParkingPage"]
      }];

      var ParkingPageRoutingModule = function ParkingPageRoutingModule() {
        _classCallCheck(this, ParkingPageRoutingModule);
      };

      ParkingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ParkingPageRoutingModule);
      /***/
    },

    /***/
    "dEc+":
    /*!***********************************************!*\
      !*** ./src/app/pages/parking/parking.page.ts ***!
      \***********************************************/

    /*! exports provided: ParkingPage */

    /***/
    function dEc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParkingPage", function () {
        return ParkingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_parking_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./parking.page.html */
      "f7y0");
      /* harmony import */


      var _parking_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./parking.page.scss */
      "K7it");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ParkingPage = /*#__PURE__*/function () {
        function ParkingPage() {
          _classCallCheck(this, ParkingPage);

          this.currentDate = new Date().toISOString();
        }

        _createClass(ParkingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ParkingPage;
      }();

      ParkingPage.ctorParameters = function () {
        return [];
      };

      ParkingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-parking',
        template: _raw_loader_parking_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parking_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ParkingPage);
      /***/
    },

    /***/
    "f7y0":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parking/parking.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function f7y0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-title>parking</ion-title> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"header\">Parking</h1>\n\n  <div class=\"container\">\n\n    <form class=\"parkingForm\">\n      <!-- <ion-item lines=\"full\">\n        <ion-label position=\"floating\">First name</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Last name</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Mobile number</ion-label>\n        <ion-input inputmode=\"tel\" type=\"tel\" pattern=\"tel\" maxlength=\"10\" required></ion-input>\n      </ion-item> -->\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Vehicle number</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-list>\n        <ion-radio-group value=\"vehicleType\">\n          <ion-list-header>\n            <ion-label>Vehicle type</ion-label>\n          </ion-list-header>\n\n          <ion-item>\n            <ion-label>Two Wheeler</ion-label>\n            <ion-radio slot=\"start\" value=\"twoWheeler\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Four wheeler</ion-label>\n            <ion-radio slot=\"start\" value=\"fourWheeler\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n\n      <ion-row>\n        <ion-col>\n          <ion-button fill=\"outline\" expand=\"block\" class=\"submit\" type=\"submit\" color=\"primary\">Submit</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-parking-parking-module-es5.js.map