import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechercheModulePage } from './recherche-module.page';

describe('RechercheModulePage', () => {
  let component: RechercheModulePage;
  let fixture: ComponentFixture<RechercheModulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheModulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
