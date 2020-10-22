(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parametrage-nouvelle-gamme-nouvelle-gamme-module"],{

/***/ "OuOI":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parametrage/nouvelle-gamme/nouvelle-gamme.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <ion-card>\n        <ion-card-header>\n         <h3>Création d'une gamme</h3>   \n        </ion-card-header>\n        <hr class=\"solid\">\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-input placeholder=\"Libelle\"></ion-input>\n                    </ion-col>\n                    <ion-col>\n\n                    </ion-col>\n        \n                </ion-row>\n\n              </ion-grid>\n\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h2>Resultat</h2>   \n           </ion-card-header>\n            <ion-card-content>\n            </ion-card-content>\n    </ion-card>\n");

/***/ }),

/***/ "fyzS":
/*!***************************************************************************!*\
  !*** ./src/app/pages/parametrage/nouvelle-gamme/nouvelle-gamme.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhcmFtZXRyYWdlL25vdXZlbGxlLWdhbW1lL25vdXZlbGxlLWdhbW1lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "ipnj":
/*!***************************************************************************!*\
  !*** ./src/app/pages/parametrage/nouvelle-gamme/nouvelle-gamme.module.ts ***!
  \***************************************************************************/
/*! exports provided: NouvelleGammePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouvelleGammePageModule", function() { return NouvelleGammePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nouvelle_gamme_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nouvelle-gamme-routing.module */ "v34e");
/* harmony import */ var _nouvelle_gamme_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nouvelle-gamme.page */ "vgJ1");







let NouvelleGammePageModule = class NouvelleGammePageModule {
};
NouvelleGammePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nouvelle_gamme_routing_module__WEBPACK_IMPORTED_MODULE_5__["NouvelleGammePageRoutingModule"]
        ],
        declarations: [_nouvelle_gamme_page__WEBPACK_IMPORTED_MODULE_6__["NouvelleGammePage"]]
    })
], NouvelleGammePageModule);



/***/ }),

/***/ "v34e":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/parametrage/nouvelle-gamme/nouvelle-gamme-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: NouvelleGammePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouvelleGammePageRoutingModule", function() { return NouvelleGammePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nouvelle_gamme_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nouvelle-gamme.page */ "vgJ1");




const routes = [
    {
        path: '',
        component: _nouvelle_gamme_page__WEBPACK_IMPORTED_MODULE_3__["NouvelleGammePage"]
    }
];
let NouvelleGammePageRoutingModule = class NouvelleGammePageRoutingModule {
};
NouvelleGammePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NouvelleGammePageRoutingModule);



/***/ }),

/***/ "vgJ1":
/*!*************************************************************************!*\
  !*** ./src/app/pages/parametrage/nouvelle-gamme/nouvelle-gamme.page.ts ***!
  \*************************************************************************/
/*! exports provided: NouvelleGammePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouvelleGammePage", function() { return NouvelleGammePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nouvelle_gamme_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nouvelle-gamme.page.html */ "OuOI");
/* harmony import */ var _nouvelle_gamme_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nouvelle-gamme.page.scss */ "fyzS");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let NouvelleGammePage = class NouvelleGammePage {
    constructor() { }
    ngOnInit() {
    }
};
NouvelleGammePage.ctorParameters = () => [];
NouvelleGammePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-nouvelle-gamme',
        template: _raw_loader_nouvelle_gamme_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nouvelle_gamme_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _app_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
    })
], NouvelleGammePage);



/***/ })

}]);
//# sourceMappingURL=pages-parametrage-nouvelle-gamme-nouvelle-gamme-module-es2015.js.map