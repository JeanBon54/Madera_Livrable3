(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parametrage-nouveau-module-nouveau-module-module"], {
    /***/
    "E0xS":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/parametrage/nouveau-module/nouveau-module.page.ts ***!
      \*************************************************************************/

    /*! exports provided: NouveauModulePage */

    /***/
    function E0xS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouveauModulePage", function () {
        return NouveauModulePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nouveau_module_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nouveau-module.page.html */
      "s5Y8");
      /* harmony import */


      var _nouveau_module_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nouveau-module.page.scss */
      "rs2S");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NouveauModulePage = /*#__PURE__*/function () {
        function NouveauModulePage() {
          _classCallCheck(this, NouveauModulePage);
        }

        _createClass(NouveauModulePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NouveauModulePage;
      }();

      NouveauModulePage.ctorParameters = function () {
        return [];
      };

      NouveauModulePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-nouveau-module',
        template: _raw_loader_nouveau_module_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nouveau_module_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _app_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
      })], NouveauModulePage);
      /***/
    },

    /***/
    "WQUI":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/parametrage/nouveau-module/nouveau-module-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: NouveauModulePageRoutingModule */

    /***/
    function WQUI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouveauModulePageRoutingModule", function () {
        return NouveauModulePageRoutingModule;
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


      var _nouveau_module_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nouveau-module.page */
      "E0xS");

      var routes = [{
        path: '',
        component: _nouveau_module_page__WEBPACK_IMPORTED_MODULE_3__["NouveauModulePage"]
      }];

      var NouveauModulePageRoutingModule = function NouveauModulePageRoutingModule() {
        _classCallCheck(this, NouveauModulePageRoutingModule);
      };

      NouveauModulePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NouveauModulePageRoutingModule);
      /***/
    },

    /***/
    "WjJd":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/parametrage/nouveau-module/nouveau-module.module.ts ***!
      \***************************************************************************/

    /*! exports provided: NouveauModulePageModule */

    /***/
    function WjJd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouveauModulePageModule", function () {
        return NouveauModulePageModule;
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


      var _nouveau_module_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nouveau-module-routing.module */
      "WQUI");
      /* harmony import */


      var _nouveau_module_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./nouveau-module.page */
      "E0xS");

      var NouveauModulePageModule = function NouveauModulePageModule() {
        _classCallCheck(this, NouveauModulePageModule);
      };

      NouveauModulePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nouveau_module_routing_module__WEBPACK_IMPORTED_MODULE_5__["NouveauModulePageRoutingModule"]],
        declarations: [_nouveau_module_page__WEBPACK_IMPORTED_MODULE_6__["NouveauModulePage"]]
      })], NouveauModulePageModule);
      /***/
    },

    /***/
    "rs2S":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/parametrage/nouveau-module/nouveau-module.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function rs2S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-datetime {\n  padding-top: 10px;\n}\n\nion-card {\n  border: 2px solid #bbb;\n  padding-bottom: 5px;\n}\n\nion-card-header {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\nion-card-content {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\nion-col {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\nion-row {\n  padding-top: 10px;\n}\n\nion-grid {\n  padding-bottom: 65px;\n}\n\nhr.solid {\n  border-top: 2px solid #bbb;\n  width: 90%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.container-image {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  padding-top: 7px;\n}\n\n.lastRow {\n  margin-bottom: 390px;\n  padding-top: 15px;\n}\n\nh3 {\n  margin-bottom: 5px;\n  margin-top: 10px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFyYW1ldHJhZ2Uvbm91dmVhdS1tb2R1bGUvbm91dmVhdS1tb2R1bGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7QUFBSjs7QUFHRTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxvQkFBQTtBQUFKOztBQUdFO0VBQ0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXJhbWV0cmFnZS9ub3V2ZWF1LW1vZHVsZS9ub3V2ZWF1LW1vZHVsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIQVVUIERFIExBIFBBR0Vcbmlvbi1kYXRldGltZXtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICBcbiAgaW9uLWNhcmR7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2JiYjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG4gIFxuICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG4gIFxuICBpb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuXG4gIGlvbi1jb2x7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cblxuICBpb24tcm93e1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG5cbiAgaW9uLWdyaWR7XG4gICAgcGFkZGluZy1ib3R0b206IDY1cHg7XG4gIH1cbiAgXG4gIGhyLnNvbGlkIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2JiYjtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXItaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbiAgfVxuXG4ubGFzdFJvd3tcbiAgICBtYXJnaW4tYm90dG9tOiAzOTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxuXG4gIGgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "s5Y8":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parametrage/nouveau-module/nouveau-module.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function s5Y8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n    <ion-card>\n        <ion-card-header>\n         <h3>Création d'un module</h3>   \n        </ion-card-header>\n        <hr class=\"solid\">\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-input placeholder=\"Libelle\"></ion-input>\n                        <ion-input placeholder=\"Hauteur\"></ion-input>\n                      </ion-col>\n                  <ion-col>\n                    <ion-item > \n                        <ion-label>Caractéristiques</ion-label>\n                        <ion-select placeholder=\"\">\n                          <ion-select-option value=\"f\">Female</ion-select-option>\n                          <ion-select-option value=\"m\">Male</ion-select-option>\n                        </ion-select>\n                      </ion-item>\n\n                      <ion-input placeholder=\"Longueur\"></ion-input>\n                  </ion-col>\n        \n                </ion-row>\n\n              </ion-grid>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h2>Resultat</h2>   \n           </ion-card-header>\n            <ion-card-content>\n            </ion-card-content>\n    </ion-card>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-parametrage-nouveau-module-nouveau-module-module-es5.js.map