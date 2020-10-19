import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechercheGammePage } from './recherche-gamme.page';

describe('RechercheGammePage', () => {
  let component: RechercheGammePage;
  let fixture: ComponentFixture<RechercheGammePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheGammePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheGammePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
