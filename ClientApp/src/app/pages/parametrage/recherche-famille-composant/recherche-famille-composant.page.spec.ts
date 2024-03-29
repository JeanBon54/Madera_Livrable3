import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechercheFamilleComposantPage } from './recherche-famille-composant.page';

describe('RechercheFamilleComposantPage', () => {
  let component: RechercheFamilleComposantPage;
  let fixture: ComponentFixture<RechercheFamilleComposantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheFamilleComposantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheFamilleComposantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
