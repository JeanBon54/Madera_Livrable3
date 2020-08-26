import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechercheProjetPage } from './recherche-projet.page';

describe('RechercheProjetPage', () => {
  let component: RechercheProjetPage;
  let fixture: ComponentFixture<RechercheProjetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheProjetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheProjetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
