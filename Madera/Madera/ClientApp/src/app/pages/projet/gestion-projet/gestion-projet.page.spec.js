"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var angular_1 = require("@ionic/angular");
var gestion_projet_page_1 = require("./gestion-projet.page");
describe('GestionProjetPage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [gestion_projet_page_1.GestionProjetPage],
            imports: [angular_1.IonicModule.forRoot()]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(gestion_projet_page_1.GestionProjetPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=gestion-projet.page.spec.js.map