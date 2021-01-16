(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maintenance-maintenance-module"], {
    /***/
    "VJKz":
    /*!*******************************************************!*\
      !*** ./src/app/pages/maintenance/maintenance.page.ts ***!
      \*******************************************************/

    /*! exports provided: MaintenancePage */

    /***/
    function VJKz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenancePage", function () {
        return MaintenancePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_maintenance_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./maintenance.page.html */
      "kFyi");
      /* harmony import */


      var _maintenance_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./maintenance.page.scss */
      "bSGe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MaintenancePage = /*#__PURE__*/function () {
        function MaintenancePage() {
          _classCallCheck(this, MaintenancePage);
        }

        _createClass(MaintenancePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MaintenancePage;
      }();

      MaintenancePage.ctorParameters = function () {
        return [];
      };

      MaintenancePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-maintenance',
        template: _raw_loader_maintenance_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_maintenance_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MaintenancePage);
      /***/
    },

    /***/
    "bSGe":
    /*!*********************************************************!*\
      !*** ./src/app/pages/maintenance/maintenance.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function bSGe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header::after {\n  background-image: none;\n}\n\n.header {\n  margin-left: 1em;\n  font-weight: bold;\n  font-size: 2em;\n}\n\n.container {\n  margin-top: 3em;\n  margin-left: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWludGVuYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6Im1haW50ZW5hbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "bUxz":
    /*!*********************************************************!*\
      !*** ./src/app/pages/maintenance/maintenance.module.ts ***!
      \*********************************************************/

    /*! exports provided: MaintenancePageModule */

    /***/
    function bUxz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenancePageModule", function () {
        return MaintenancePageModule;
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


      var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./maintenance-routing.module */
      "kwHo");
      /* harmony import */


      var _maintenance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./maintenance.page */
      "VJKz");

      var MaintenancePageModule = function MaintenancePageModule() {
        _classCallCheck(this, MaintenancePageModule);
      };

      MaintenancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__["MaintenancePageRoutingModule"]],
        declarations: [_maintenance_page__WEBPACK_IMPORTED_MODULE_6__["MaintenancePage"]]
      })], MaintenancePageModule);
      /***/
    },

    /***/
    "kFyi":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maintenance/maintenance.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function kFyi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-title>maintenance</ion-title> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"header\">Maintenance</h1>\n\n  <div class=\"container\">\n\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "kwHo":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/maintenance/maintenance-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MaintenancePageRoutingModule */

    /***/
    function kwHo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenancePageRoutingModule", function () {
        return MaintenancePageRoutingModule;
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


      var _maintenance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./maintenance.page */
      "VJKz");

      var routes = [{
        path: '',
        component: _maintenance_page__WEBPACK_IMPORTED_MODULE_3__["MaintenancePage"]
      }];

      var MaintenancePageRoutingModule = function MaintenancePageRoutingModule() {
        _classCallCheck(this, MaintenancePageRoutingModule);
      };

      MaintenancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MaintenancePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-maintenance-maintenance-module-es5.js.map