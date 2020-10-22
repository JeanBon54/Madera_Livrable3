(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-parametrage-parametrage-module"], {
    /***/
    "/nR/":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/menu/parametrage/parametrage-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ParametragePageRoutingModule */

    /***/
    function nR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParametragePageRoutingModule", function () {
        return ParametragePageRoutingModule;
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


      var _parametrage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./parametrage.page */
      "ET5R");

      var routes = [{
        path: '',
        component: _parametrage_page__WEBPACK_IMPORTED_MODULE_3__["ParametragePage"]
      }];

      var ParametragePageRoutingModule = function ParametragePageRoutingModule() {
        _classCallCheck(this, ParametragePageRoutingModule);
      };

      ParametragePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ParametragePageRoutingModule);
      /***/
    },

    /***/
    "ET5R":
    /*!************************************************************!*\
      !*** ./src/app/pages/menu/parametrage/parametrage.page.ts ***!
      \************************************************************/

    /*! exports provided: ParametragePage */

    /***/
    function ET5R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParametragePage", function () {
        return ParametragePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_parametrage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./parametrage.page.html */
      "sv/C");
      /* harmony import */


      var _parametrage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./parametrage.page.scss */
      "Weci");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ParametragePage = /*#__PURE__*/function () {
        function ParametragePage(router) {
          _classCallCheck(this, ParametragePage);

          this.router = router;
        }

        _createClass(ParametragePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goTo",
          value: function goTo(numMenu) {
            switch (numMenu) {
              case 1:
                this.router.navigate(['/recherche-gamme']);
                break;

              case 2:
                this.router.navigate(['/nouveau-module']);
                break;

              case 3:
                this.router.navigate(['/recherche-famille-composant']);
                break;

              case 4:
                this.router.navigate(['/recherche-composant']);
                break;

              case 5:
                this.router.navigate(['/nouveau-commercial']);
                break;

              case 6:
                this.router.navigate(['/menu-principal']);
                break;
            }
          }
        }]);

        return ParametragePage;
      }();

      ParametragePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      ParametragePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-parametrage',
        template: _raw_loader_parametrage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parametrage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _app_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
      })], ParametragePage);
      /***/
    },

    /***/
    "Pcnl":
    /*!**************************************************************!*\
      !*** ./src/app/pages/menu/parametrage/parametrage.module.ts ***!
      \**************************************************************/

    /*! exports provided: ParametragePageModule */

    /***/
    function Pcnl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParametragePageModule", function () {
        return ParametragePageModule;
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


      var _parametrage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./parametrage-routing.module */
      "/nR/");
      /* harmony import */


      var _parametrage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./parametrage.page */
      "ET5R");

      var ParametragePageModule = function ParametragePageModule() {
        _classCallCheck(this, ParametragePageModule);
      };

      ParametragePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _parametrage_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParametragePageRoutingModule"]],
        declarations: [_parametrage_page__WEBPACK_IMPORTED_MODULE_6__["ParametragePage"]]
      })], ParametragePageModule);
      /***/
    },

    /***/
    "Weci":
    /*!**************************************************************!*\
      !*** ./src/app/pages/menu/parametrage/parametrage.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function Weci(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".img {\n  width: 140px;\n  height: 130px;\n  padding-left: 10px;\n}\n\n.label {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 13px;\n  word-spacing: 2px;\n  color: #000000;\n  font-weight: 400;\n  padding-left: 20px;\n  text-align: left;\n}\n\n.labelno {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 17px;\n  word-spacing: 2px;\n  color: #000000;\n  font-weight: 400;\n  padding-right: 30px;\n}\n\n.button {\n  align-self: center;\n  padding-bottom: 10px;\n}\n\nw-fill {\n  width: -webkit-fill-available !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9wYXJhbWV0cmFnZS9wYXJhbWV0cmFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L3BhcmFtZXRyYWdlL3BhcmFtZXRyYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWcge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd29yZC1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnRcbn1cblxuLmxhYmVsbm8ge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3b3JkLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5idXR0b24ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG53LWZpbGwge1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZSAhaW1wb3J0YW50O1xufVxuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    "sv/C":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/parametrage/parametrage.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function svC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid style=\"display: flex; flex-direction: column; align-items: center\">\n    <ion-row size=\"12\">\n        <ion-col>\n            <img height=\"225\" width=\"280\" src=\"assets/image/logo-madera.png\">\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"4\">\n            <ion-img class=\"img\" (click)=\"goTo(1)\" src=\"assets/image/menu-gestion_composant.png\"></ion-img>\n        </ion-col>\n        <ion-col size=\"4\">\n            <ion-img class=\"img\" (click)=\"goTo(2)\" src=\"assets/image/menu-gestion_module.png\"></ion-img>\n        </ion-col>\n        <ion-col size=\"4\">\n            <ion-img class=\"img\" (click)=\"goTo(3)\" src=\"assets/image/menu-gestion_famille.png\"></ion-img>\n        </ion-col>\n    </ion-row>\n    <ion-row style=\"width: -webkit-fill-available !important;\">\n        <ion-col size=\"4\">\n            <ion-label color=\"dark\"> Gammes</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n            <ion-label color=\"dark\"> Modules</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n            <ion-label color=\"dark\"> Familles de composants</ion-label>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"4\">\n            <ion-img class=\"img\" (click)=\"goTo(4)\" src=\"assets/image/menu-gestion_composant.png\"></ion-img>\n        </ion-col>\n        <ion-col size=\"4\">\n            <ion-img class=\"img\" (click)=\"goTo(5)\" src=\"assets/image/menu-gestion_commercial.png\"></ion-img>\n        </ion-col>\n        <ion-col size=\"4\">\n            <ion-img class=\"img\" (click)=\"goTo(6)\" src=\"assets/image/menu-menu-principal.png\"></ion-img>\n        </ion-col>\n    </ion-row>\n    <ion-row style=\"width: -webkit-fill-available !important;\">\n        <ion-col size=\"4\">\n            <ion-label color=\"dark\">Composants</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n            <ion-label color=\"dark\">Commerciaux</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n            <ion-label color=\"dark p-x-md\">Menu principal</ion-label>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n<ion-row style=\"display: flex; flex-direction: column; align-items: center\">\n    <ion-col class=\"button\" size=\"5\">\n        <ion-button color=\"danger\" expand=\"block\" (click)=\"logOut()\">Déconnexion</ion-button>\n    </ion-col>\n</ion-row>\n\n<ion-footer>\n    <div class=\"footer\">\n        <div class=\"container-image footer\">\n            <p>Madera 2020</p>\n        </div>\n    </div>\n</ion-footer>\n\n\n\n\n\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-menu-parametrage-parametrage-module-es5.js.map