(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-map-map-module"], {
    /***/
    "862v":
    /*!*****************************************!*\
      !*** ./src/app/pages/map/map.module.ts ***!
      \*****************************************/

    /*! exports provided: MapPageModule */

    /***/
    function v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPageModule", function () {
        return MapPageModule;
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


      var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./map-routing.module */
      "oLE7");
      /* harmony import */


      var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./map.page */
      "YKfG");

      var MapPageModule = function MapPageModule() {
        _classCallCheck(this, MapPageModule);
      };

      MapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
      })], MapPageModule);
      /***/
    },

    /***/
    "E/o+":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function EO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>about-app</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"header\">Society Map</h1>\n\n  <div class=\"container\">\n    <ion-img [src]=\"'assets/img/map.png'\"> </ion-img>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "YKfG":
    /*!***************************************!*\
      !*** ./src/app/pages/map/map.page.ts ***!
      \***************************************/

    /*! exports provided: MapPage */

    /***/
    function YKfG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPage", function () {
        return MapPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./map.page.html */
      "E/o+");
      /* harmony import */


      var _map_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./map.page.scss */
      "uob5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MapPage = /*#__PURE__*/function () {
        function MapPage() {
          _classCallCheck(this, MapPage);
        }

        _createClass(MapPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MapPage;
      }();

      MapPage.ctorParameters = function () {
        return [];
      };

      MapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map',
        template: _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MapPage);
      /***/
    },

    /***/
    "oLE7":
    /*!*************************************************!*\
      !*** ./src/app/pages/map/map-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: MapPageRoutingModule */

    /***/
    function oLE7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function () {
        return MapPageRoutingModule;
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


      var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./map.page */
      "YKfG");

      var routes = [{
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
      }];

      var MapPageRoutingModule = function MapPageRoutingModule() {
        _classCallCheck(this, MapPageRoutingModule);
      };

      MapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MapPageRoutingModule);
      /***/
    },

    /***/
    "uob5":
    /*!*****************************************!*\
      !*** ./src/app/pages/map/map.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function uob5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header::after {\n  background-image: none;\n}\n\n.header {\n  margin-left: 1em;\n  font-weight: bold;\n  font-size: 2em;\n}\n\n.container {\n  margin: 2em 1em 0 1em;\n  padding: 0 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFBSiIsImZpbGUiOiJtYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDJlbSAxZW0gMCAxZW07XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-map-map-module-es5.js.map