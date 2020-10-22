(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-client-nouveau-client-nouveau-client-module"],{

/***/ "1MFy":
/*!**********************************************************************!*\
  !*** ./src/app/pages/client/nouveau-client/nouveau-client.module.ts ***!
  \**********************************************************************/
/*! exports provided: NouveauClientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouveauClientPageModule", function() { return NouveauClientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nouveau_client_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nouveau-client-routing.module */ "yfXQ");
/* harmony import */ var _nouveau_client_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nouveau-client.page */ "TRkj");







let NouveauClientPageModule = class NouveauClientPageModule {
};
NouveauClientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nouveau_client_routing_module__WEBPACK_IMPORTED_MODULE_5__["NouveauClientPageRoutingModule"]
        ],
        declarations: [_nouveau_client_page__WEBPACK_IMPORTED_MODULE_6__["NouveauClientPage"]]
    })
], NouveauClientPageModule);



/***/ }),

/***/ "Q6nn":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/client/nouveau-client/nouveau-client.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <ion-card>\n        <ion-card-header>\n         <h2>Création d'un client</h2>   \n        </ion-card-header>\n        <hr class=\"solid\">\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-input placeholder=\"Nom\"></ion-input>\n                    </ion-col>\n                    <ion-col>\n                      <ion-input placeholder=\"Prénom\"></ion-input>\n                    </ion-col>\n                    <ion-col>\n                      <ion-item>\n                        <ion-label>Date de naissance</ion-label>\n                        <ion-datetime displayFormat=\"D MMM YYYY\" min=\"2000\" max=\"2050\" value=\"2005-06-17T11\"></ion-datetime>\n                      </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                      <ion-input placeholder=\"Adresse postale\"></ion-input>\n                  </ion-col>\n                  <ion-col>\n                    <ion-input placeholder=\"Complément\"></ion-input>\n                  </ion-col>\n                  <ion-col>\n                    <ion-input placeholder=\"Code postale\"></ion-input>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                      <ion-input placeholder=\"Ville\"></ion-input>\n                  </ion-col>\n                  <ion-col>\n                    <ion-input placeholder=\"Adresse mail\"></ion-input>\n                  </ion-col>\n                </ion-row>\n                \n                <ion-row class=\"lastRow\">\n                  <ion-col>\n                    <ion-input placeholder=\"Numéro de téléphone\"></ion-input>\n                  </ion-col>\n                  <ion-col>\n                    \n                </ion-col>\n                <ion-col>\n   \n                </ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <ion-col>\n                  </ion-col>\n                  <ion-col>\n                    \n                </ion-col>\n                <ion-col>\n                  <ion-input placeholder=\"Commercial\"></ion-input>\n                </ion-col>\n                </ion-row>\n\n                <ion-row>\n\n                <ion-col>\n                  <ion-input placeholder=\"Remarques\"></ion-input>\n                </ion-col>\n                </ion-row>\n\n              </ion-grid>\n\n        </ion-card-content>\n    </ion-card>");

/***/ }),

/***/ "TRkj":
/*!********************************************************************!*\
  !*** ./src/app/pages/client/nouveau-client/nouveau-client.page.ts ***!
  \********************************************************************/
/*! exports provided: NouveauClientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouveauClientPage", function() { return NouveauClientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nouveau_client_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nouveau-client.page.html */ "Q6nn");
/* harmony import */ var _nouveau_client_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nouveau-client.page.scss */ "yRAj");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let NouveauClientPage = class NouveauClientPage {
    constructor() { }
    ngOnInit() {
    }
};
NouveauClientPage.ctorParameters = () => [];
NouveauClientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-nouveau-client',
        template: _raw_loader_nouveau_client_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nouveau_client_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _app_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
    })
], NouveauClientPage);



/***/ }),

/***/ "yRAj":
/*!**********************************************************************!*\
  !*** ./src/app/pages/client/nouveau-client/nouveau-client.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC9ub3V2ZWF1LWNsaWVudC9ub3V2ZWF1LWNsaWVudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "yfXQ":
/*!******************************************************************************!*\
  !*** ./src/app/pages/client/nouveau-client/nouveau-client-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: NouveauClientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouveauClientPageRoutingModule", function() { return NouveauClientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nouveau_client_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nouveau-client.page */ "TRkj");




const routes = [
    {
        path: '',
        component: _nouveau_client_page__WEBPACK_IMPORTED_MODULE_3__["NouveauClientPage"]
    }
];
let NouveauClientPageRoutingModule = class NouveauClientPageRoutingModule {
};
NouveauClientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NouveauClientPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-client-nouveau-client-nouveau-client-module-es2015.js.map