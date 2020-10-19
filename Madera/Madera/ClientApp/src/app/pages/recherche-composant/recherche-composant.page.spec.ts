import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechercheComposantPage } from './recherche-composant.page';

describe('RechercheComposantPage', () => {
  let component: RechercheComposantPage;
  let fixture: ComponentFixture<RechercheComposantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheComposantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheComposantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
