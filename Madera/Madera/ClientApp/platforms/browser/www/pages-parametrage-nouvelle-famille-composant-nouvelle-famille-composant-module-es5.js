(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parametrage-nouvelle-famille-composant-nouvelle-famille-composant-module"], {
    /***/
    "7sOv":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parametrage/nouvelle-famille-composant/nouvelle-famille-composant.page.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sOv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n    <ion-card>\n        <ion-card-header>\n         <h3>Création d'une famille de composant</h3>   \n        </ion-card-header>\n        <hr class=\"solid\">\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-input placeholder=\"Libelle\"></ion-input>\n                    </ion-col>\n                    <ion-col>\n\n                    </ion-col>\n        \n                </ion-row>\n\n              </ion-grid>\n\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h2>Resultat</h2>   \n           </ion-card-header>\n            <ion-card-content>\n            </ion-card-content>\n    </ion-card>\n\n";
      /***/
    },

    /***/
    "Hg3M":
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/parametrage/nouvelle-famille-composant/nouvelle-famille-composant.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: NouvelleFamilleComposantPageModule */

    /***/
    function Hg3M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouvelleFamilleComposantPageModule", function () {
        return NouvelleFamilleComposantPageModule;
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


      var _nouvelle_famille_composant_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nouvelle-famille-composant-routing.module */
      "NGV2");
      /* harmony import */


      var _nouvelle_famille_composant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./nouvelle-famille-composant.page */
      "VxbW");

      var NouvelleFamilleComposantPageModule = function NouvelleFamilleComposantPageModule() {
        _classCallCheck(this, NouvelleFamilleComposantPageModule);
      };

      NouvelleFamilleComposantPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nouvelle_famille_composant_routing_module__WEBPACK_IMPORTED_MODULE_5__["NouvelleFamilleComposantPageRoutingModule"]],
        declarations: [_nouvelle_famille_composant_page__WEBPACK_IMPORTED_MODULE_6__["NouvelleFamilleComposantPage"]]
      })], NouvelleFamilleComposantPageModule);
      /***/
    },

    /***/
    "NGV2":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/pages/parametrage/nouvelle-famille-composant/nouvelle-famille-composant-routing.module.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: NouvelleFamilleComposantPageRoutingModule */

    /***/
    function NGV2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouvelleFamilleComposantPageRoutingModule", function () {
        return NouvelleFamilleComposantPageRoutingModule;
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


      var _nouvelle_famille_composant_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nouvelle-famille-composant.page */
      "VxbW");

      var routes = [{
        path: '',
        component: _nouvelle_famille_composant_page__WEBPACK_IMPORTED_MODULE_3__["NouvelleFamilleComposantPage"]
      }];

      var NouvelleFamilleComposantPageRoutingModule = function NouvelleFamilleComposantPageRoutingModule() {
        _classCallCheck(this, NouvelleFamilleComposantPageRoutingModule);
      };

      NouvelleFamilleComposantPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NouvelleFamilleComposantPageRoutingModule);
      /***/
    },

    /***/
    "VxbW":
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/parametrage/nouvelle-famille-composant/nouvelle-famille-composant.page.ts ***!
      \*************************************************************************************************/

    /*! exports provided: NouvelleFamilleComposantPage */

    /***/
    function VxbW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouvelleFamilleComposantPage", function () {
        return NouvelleFamilleComposantPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nouvelle_famille_composant_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nouvelle-famille-composant.page.html */
      "7sOv");
      /* harmony import */


      var _nouvelle_famille_composant_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nouvelle-famille-composant.page.scss */
      "zKTE");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NouvelleFamilleComposantPage = /*#__PURE__*/function () {
        function NouvelleFamilleComposantPage() {
          _classCallCheck(this, NouvelleFamilleComposantPage);
        }

        _createClass(NouvelleFamilleComposantPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NouvelleFamilleComposantPage;
      }();

      NouvelleFamilleComposantPage.ctorParameters = function () {
        return [];
      };

      NouvelleFamilleComposantPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-nouvelle-famille-composant',
        template: _raw_loader_nouvelle_famille_composant_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nouvelle_famille_composant_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _app_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
      })], NouvelleFamilleComposantPage);
      /***/
    },

    /***/
    "zKTE":
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/parametrage/nouvelle-famille-composant/nouvelle-famille-composant.page.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zKTE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhcmFtZXRyYWdlL25vdXZlbGxlLWZhbWlsbGUtY29tcG9zYW50L25vdXZlbGxlLWZhbWlsbGUtY29tcG9zYW50LnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-parametrage-nouvelle-famille-composant-nouvelle-famille-composant-module-es5.js.map