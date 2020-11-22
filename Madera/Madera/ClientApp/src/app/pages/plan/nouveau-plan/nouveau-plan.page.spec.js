"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var angular_1 = require("@ionic/angular");
var nouveau_plan_page_1 = require("./nouveau-plan.page");
describe('NouveauPlanPage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [nouveau_plan_page_1.NouveauPlanPage],
            imports: [angular_1.IonicModule.forRoot()]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(nouveau_plan_page_1.NouveauPlanPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nouveau-plan.page.spec.js.map