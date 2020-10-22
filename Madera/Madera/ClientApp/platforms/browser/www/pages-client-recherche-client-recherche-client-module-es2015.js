(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-client-recherche-client-recherche-client-module"],{

/***/ "7RrU":
/*!***********************************************************!*\
  !*** ./src/app/webServices/client-web-service.service.ts ***!
  \***********************************************************/
/*! exports provided: ClientWebServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientWebServiceService", function() { return ClientWebServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let ClientWebServiceService = class ClientWebServiceService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getData() {
        return this.http.get('/Client');
    }
};
ClientWebServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClientWebServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClientWebServiceService);



/***/ }),

/***/ "DGui":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/client/recherche-client/recherche-client.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <ion-card>\n        <ion-card-header>\n         <h3>Rechercher client</h3>   \n        </ion-card-header>\n        <hr class=\"solid\">\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-input placeholder=\"Nom du client\"></ion-input>\n                    </ion-col>\n                    <ion-col>\n                    <div class=\"container-image\">\n                      <div class=\"enregistrer\">\n                          <ion-button color=\"success\">Rechercher</ion-button>\n                      </div>\n                    </div>\n                    </ion-col>\n        \n                </ion-row>\n\n              </ion-grid>\n\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h2>Resultat</h2>   \n           </ion-card-header>\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>Nom</ion-col>\n                    <ion-col>Prenom</ion-col>\n                    <ion-col>Date-création</ion-col>\n                    <ion-col>Date-modification</ion-col>\n                    <ion-col>Commercial</ion-col>\n                    <ion-col>Actif</ion-col>\n                </ion-row>\n                <ion-row *ngFor=\"let cli of client\">\n                    <ion-col>\n                        <ion-label center text-center>{{cli.clientNom}}</ion-label>\n                    </ion-col>\n                    <ion-col>\n                        <ion-label center text-center>{{cli.clientPrenom}}</ion-label>\n                    </ion-col>\n                    <ion-col>\n                        <ion-label center text-center>{{cli.clientDateCrea}}</ion-label>\n                    </ion-col>\n                    <ion-col>\n                        <ion-label center text-center>{{cli.clientDateModif}}</ion-label>\n                    </ion-col>\n                    <ion-col>\n                        <ion-label center text-center>{{cli.clientNom}}</ion-label>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-content>\n    </ion-card>\n\n");

/***/ }),

/***/ "EcsW":
/*!**************************************************************************!*\
  !*** ./src/app/pages/client/recherche-client/recherche-client.module.ts ***!
  \**************************************************************************/
/*! exports provided: RechercheClientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechercheClientPageModule", function() { return RechercheClientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _recherche_client_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recherche-client-routing.module */ "RfQe");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _webServices_client_web_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../webServices/client-web-service.service */ "7RrU");
/* harmony import */ var _recherche_client_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recherche-client.page */ "kWty");









let RechercheClientPageModule = class RechercheClientPageModule {
};
RechercheClientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _recherche_client_routing_module__WEBPACK_IMPORTED_MODULE_5__["RechercheClientPageRoutingModule"]
        ],
        declarations: [_recherche_client_page__WEBPACK_IMPORTED_MODULE_8__["RechercheClientPage"]],
        providers: [_webServices_client_web_service_service__WEBPACK_IMPORTED_MODULE_7__["ClientWebServiceService"]]
    })
], RechercheClientPageModule);



/***/ }),

/***/ "RfQe":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/client/recherche-client/recherche-client-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: RechercheClientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechercheClientPageRoutingModule", function() { return RechercheClientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recherche_client_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recherche-client.page */ "kWty");




const routes = [
    {
        path: '',
        component: _recherche_client_page__WEBPACK_IMPORTED_MODULE_3__["RechercheClientPage"]
    }
];
let RechercheClientPageRoutingModule = class RechercheClientPageRoutingModule {
};
RechercheClientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RechercheClientPageRoutingModule);



/***/ }),

/***/ "hlJL":
/*!**************************************************************************!*\
  !*** ./src/app/pages/client/recherche-client/recherche-client.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC9yZWNoZXJjaGUtY2xpZW50L3JlY2hlcmNoZS1jbGllbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "kWty":
/*!************************************************************************!*\
  !*** ./src/app/pages/client/recherche-client/recherche-client.page.ts ***!
  \************************************************************************/
/*! exports provided: RechercheClientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechercheClientPage", function() { return RechercheClientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recherche_client_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recherche-client.page.html */ "DGui");
/* harmony import */ var _recherche_client_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recherche-client.page.scss */ "hlJL");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _webServices_client_web_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../webServices/client-web-service.service */ "7RrU");






let RechercheClientPage = class RechercheClientPage {
    constructor(ServiceService) {
        this.ServiceService = ServiceService;
        this.client = [];
    }
    ngOnInit() {
        this.getdata();
    }
    getdata() {
        this.ServiceService.getData().subscribe((data) => {
            this.client = data;
        });
    }
};
RechercheClientPage.ctorParameters = () => [
    { type: _webServices_client_web_service_service__WEBPACK_IMPORTED_MODULE_5__["ClientWebServiceService"] }
];
RechercheClientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-recherche-client',
        template: _raw_loader_recherche_client_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recherche_client_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _app_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
    })
], RechercheClientPage);



/***/ })

}]);
//# sourceMappingURL=pages-client-recherche-client-recherche-client-module-es2015.js.map