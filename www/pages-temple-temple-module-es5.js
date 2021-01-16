(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-temple-temple-module"], {
    /***/
    "9Xfk":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temple/temple.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xfk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngSwitch]=\"pageType\">\n\n  <!-- Live darshan page -->\n  <div *ngSwitchCase=\"'LiveDarshan'\">\n    <h1 class=\"header\">Live Darshan</h1>\n\n    <div class=\"container\">\n      <iframe height=\"320\" src=\"https://www.youtube.com/embed/ZsvQ_Bi2Fq0\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;\" allowfullscreen></iframe>\n    </div>\n  </div>\n\n  <!-- Digital Aarti page -->\n  <div *ngSwitchCase=\"'DigitalAarti'\">\n    <h1 class=\"header\">Digital Aarti</h1>\n\n    <div class=\"container\">\n    </div>\n  </div>\n\n  <!-- Online dakshina page -->\n  <div *ngSwitchCase=\"'Dakshina'\">\n    <h1 class=\"header\">Dakshina</h1>\n\n    <div class=\"container\">\n    </div>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "bQfW":
    /*!***********************************************!*\
      !*** ./src/app/pages/temple/temple.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function bQfW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header::after {\n  background-image: none;\n}\n\n.header {\n  margin-left: 1em;\n  font-weight: bold;\n  font-size: 2em;\n}\n\n.container {\n  margin: 2em 1em 0 1em;\n  padding: 0 1em 1em 1em;\n}\n\niframe {\n  width: -webkit-fill-available;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZW1wbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtBQUFKIiwiZmlsZSI6InRlbXBsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMmVtIDFlbSAwIDFlbTtcclxuICAgIHBhZGRpbmc6IDAgMWVtIDFlbSAxZW07XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "lAHN":
    /*!*******************************************************!*\
      !*** ./src/app/pages/temple/temple-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: TemplePageRoutingModule */

    /***/
    function lAHN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplePageRoutingModule", function () {
        return TemplePageRoutingModule;
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


      var _temple_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./temple.page */
      "lGbB");

      var routes = [{
        path: '',
        component: _temple_page__WEBPACK_IMPORTED_MODULE_3__["TemplePage"]
      }];

      var TemplePageRoutingModule = function TemplePageRoutingModule() {
        _classCallCheck(this, TemplePageRoutingModule);
      };

      TemplePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TemplePageRoutingModule);
      /***/
    },

    /***/
    "lGbB":
    /*!*********************************************!*\
      !*** ./src/app/pages/temple/temple.page.ts ***!
      \*********************************************/

    /*! exports provided: TemplePage */

    /***/
    function lGbB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplePage", function () {
        return TemplePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_temple_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./temple.page.html */
      "9Xfk");
      /* harmony import */


      var _temple_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./temple.page.scss */
      "bQfW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TemplePage = /*#__PURE__*/function () {
        function TemplePage() {
          _classCallCheck(this, TemplePage);

          this.pageType = 'LiveDarshan';
        }

        _createClass(TemplePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TemplePage;
      }();

      TemplePage.ctorParameters = function () {
        return [];
      };

      TemplePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-temple',
        template: _raw_loader_temple_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_temple_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TemplePage);
      /***/
    },

    /***/
    "qz74":
    /*!***********************************************!*\
      !*** ./src/app/pages/temple/temple.module.ts ***!
      \***********************************************/

    /*! exports provided: TemplePageModule */

    /***/
    function qz74(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplePageModule", function () {
        return TemplePageModule;
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


      var _temple_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./temple-routing.module */
      "lAHN");
      /* harmony import */


      var _temple_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./temple.page */
      "lGbB");

      var TemplePageModule = function TemplePageModule() {
        _classCallCheck(this, TemplePageModule);
      };

      TemplePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _temple_routing_module__WEBPACK_IMPORTED_MODULE_5__["TemplePageRoutingModule"]],
        declarations: [_temple_page__WEBPACK_IMPORTED_MODULE_6__["TemplePage"]]
      })], TemplePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-temple-temple-module-es5.js.map