(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-delivery-food-delivery-module"], {
    /***/
    "09N1":
    /*!***************************************************************!*\
      !*** ./src/app/food-delivery/food-delivery-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: FoodDeliveryPageRoutingModule */

    /***/
    function N1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodDeliveryPageRoutingModule", function () {
        return FoodDeliveryPageRoutingModule;
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


      var _food_delivery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./food-delivery.page */
      "kPZH");

      var routes = [{
        path: '',
        component: _food_delivery_page__WEBPACK_IMPORTED_MODULE_3__["FoodDeliveryPage"]
      }];

      var FoodDeliveryPageRoutingModule = function FoodDeliveryPageRoutingModule() {
        _classCallCheck(this, FoodDeliveryPageRoutingModule);
      };

      FoodDeliveryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FoodDeliveryPageRoutingModule);
      /***/
    },

    /***/
    "C0bt":
    /*!*******************************************************!*\
      !*** ./src/app/food-delivery/food-delivery.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function C0bt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header::after {\n  background-image: none;\n}\n\n.header {\n  margin-left: 1em;\n  font-weight: bold;\n  font-size: 2em;\n}\n\n.container {\n  margin: 2em 1em 0 1em;\n  padding: 0 1em 1em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb2QtZGVsaXZlcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FBQUoiLCJmaWxlIjoiZm9vZC1kZWxpdmVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMmVtIDFlbSAwIDFlbTtcclxuICAgIHBhZGRpbmc6IDAgMWVtIDFlbSAxZW07XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "J1HH":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-delivery/food-delivery.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function J1HH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-title>food-delivery</ion-title> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"header\">Food Delivery</h1>\n\n  <div class=\"container\">\n    <p>This service is coming soon.</p>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "kPZH":
    /*!*****************************************************!*\
      !*** ./src/app/food-delivery/food-delivery.page.ts ***!
      \*****************************************************/

    /*! exports provided: FoodDeliveryPage */

    /***/
    function kPZH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodDeliveryPage", function () {
        return FoodDeliveryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_food_delivery_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./food-delivery.page.html */
      "J1HH");
      /* harmony import */


      var _food_delivery_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./food-delivery.page.scss */
      "C0bt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FoodDeliveryPage = /*#__PURE__*/function () {
        function FoodDeliveryPage() {
          _classCallCheck(this, FoodDeliveryPage);
        }

        _createClass(FoodDeliveryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FoodDeliveryPage;
      }();

      FoodDeliveryPage.ctorParameters = function () {
        return [];
      };

      FoodDeliveryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-food-delivery',
        template: _raw_loader_food_delivery_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_food_delivery_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FoodDeliveryPage);
      /***/
    },

    /***/
    "oAbP":
    /*!*******************************************************!*\
      !*** ./src/app/food-delivery/food-delivery.module.ts ***!
      \*******************************************************/

    /*! exports provided: FoodDeliveryPageModule */

    /***/
    function oAbP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodDeliveryPageModule", function () {
        return FoodDeliveryPageModule;
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


      var _food_delivery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./food-delivery-routing.module */
      "09N1");
      /* harmony import */


      var _food_delivery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./food-delivery.page */
      "kPZH");

      var FoodDeliveryPageModule = function FoodDeliveryPageModule() {
        _classCallCheck(this, FoodDeliveryPageModule);
      };

      FoodDeliveryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _food_delivery_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodDeliveryPageRoutingModule"]],
        declarations: [_food_delivery_page__WEBPACK_IMPORTED_MODULE_6__["FoodDeliveryPage"]]
      })], FoodDeliveryPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=food-delivery-food-delivery-module-es5.js.map