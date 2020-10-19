import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouvelleFamilleComposantPage } from './nouvelle-famille-composant.page';

describe('NouvelleFamilleComposantPage', () => {
  let component: NouvelleFamilleComposantPage;
  let fixture: ComponentFixture<NouvelleFamilleComposantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleFamilleComposantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouvelleFamilleComposantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
