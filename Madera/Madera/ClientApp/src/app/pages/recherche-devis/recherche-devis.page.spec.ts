import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechercheDevisPage } from './recherche-devis.page';

describe('RechercheDevisPage', () => {
  let component: RechercheDevisPage;
  let fixture: ComponentFixture<RechercheDevisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheDevisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheDevisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
