import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionModelisationPage } from './gestion-modelisation.page';

describe('GestionModelisationPage', () => {
  let component: GestionModelisationPage;
  let fixture: ComponentFixture<GestionModelisationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionModelisationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionModelisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
