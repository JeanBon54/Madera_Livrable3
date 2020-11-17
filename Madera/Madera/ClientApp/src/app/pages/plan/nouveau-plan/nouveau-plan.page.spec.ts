import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouveauPlanPage } from './nouveau-plan.page';

describe('NouveauPlanPage', () => {
  let component: NouveauPlanPage;
  let fixture: ComponentFixture<NouveauPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauPlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouveauPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
