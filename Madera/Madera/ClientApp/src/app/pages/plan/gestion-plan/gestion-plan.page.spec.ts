import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionPlanPage } from './gestion-plan.page';

describe('GestionPlanPage', () => {
  let component: GestionPlanPage;
  let fixture: ComponentFixture<GestionPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
