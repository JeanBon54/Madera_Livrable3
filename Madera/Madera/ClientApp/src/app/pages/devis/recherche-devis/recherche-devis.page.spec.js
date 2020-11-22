"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var angular_1 = require("@ionic/angular");
var recherche_devis_page_1 = require("./recherche-devis.page");
describe('RechercheDevisPage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [recherche_devis_page_1.RechercheDevisPage],
            imports: [angular_1.IonicModule.forRoot()]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(recherche_devis_page_1.RechercheDevisPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=recherche-devis.page.spec.js.map