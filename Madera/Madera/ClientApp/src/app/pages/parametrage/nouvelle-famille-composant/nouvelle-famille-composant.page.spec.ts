import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouvelleFamilleComposantPage } from './nouvelle-famille-composant.page';

describe('NouvelleFamilleComposantPage', () => {
  let component: NouvelleFamilleComposantPage;
  let fixture: ComponentFixture<NouvelleFamilleComposantPage>;

  beforeEach(waitForAsync(() => {
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
