(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gallery-gallery-module"], {
    /***/
    "2Dyw":
    /*!*************************************************!*\
      !*** ./src/app/pages/gallery/gallery.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function Dyw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header::after {\n  background-image: none;\n}\n\n.header {\n  margin-left: 1em;\n  font-weight: bold;\n  font-size: 2em;\n}\n\n.container {\n  margin: 2em 1em 0 1em;\n  padding: 0 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYWxsZXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoiZ2FsbGVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMmVtIDFlbSAwIDFlbTtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG59Il19 */";
      /***/
    },

    /***/
    "68nU":
    /*!*************************************************!*\
      !*** ./src/app/pages/gallery/gallery.module.ts ***!
      \*************************************************/

    /*! exports provided: GalleryPageModule */

    /***/
    function nU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function () {
        return GalleryPageModule;
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


      var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gallery-routing.module */
      "vVf7");
      /* harmony import */


      var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./gallery.page */
      "vwVh");

      var GalleryPageModule = function GalleryPageModule() {
        _classCallCheck(this, GalleryPageModule);
      };

      GalleryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__["GalleryPageRoutingModule"]],
        declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
      })], GalleryPageModule);
      /***/
    },

    /***/
    "BQ+i":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gallery/gallery.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function BQI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>gallery</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"header\">Event Gallery</h1>\n\n  <div class=\"container\">\n    \n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "vVf7":
    /*!*********************************************************!*\
      !*** ./src/app/pages/gallery/gallery-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: GalleryPageRoutingModule */

    /***/
    function vVf7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPageRoutingModule", function () {
        return GalleryPageRoutingModule;
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


      var _gallery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gallery.page */
      "vwVh");

      var routes = [{
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_3__["GalleryPage"]
      }];

      var GalleryPageRoutingModule = function GalleryPageRoutingModule() {
        _classCallCheck(this, GalleryPageRoutingModule);
      };

      GalleryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GalleryPageRoutingModule);
      /***/
    },

    /***/
    "vwVh":
    /*!***********************************************!*\
      !*** ./src/app/pages/gallery/gallery.page.ts ***!
      \***********************************************/

    /*! exports provided: GalleryPage */

    /***/
    function vwVh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPage", function () {
        return GalleryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_gallery_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./gallery.page.html */
      "BQ+i");
      /* harmony import */


      var _gallery_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gallery.page.scss */
      "2Dyw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GalleryPage = /*#__PURE__*/function () {
        function GalleryPage() {
          _classCallCheck(this, GalleryPage);
        }

        _createClass(GalleryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GalleryPage;
      }();

      GalleryPage.ctorParameters = function () {
        return [];
      };

      GalleryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gallery',
        template: _raw_loader_gallery_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gallery_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GalleryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-gallery-gallery-module-es5.js.map