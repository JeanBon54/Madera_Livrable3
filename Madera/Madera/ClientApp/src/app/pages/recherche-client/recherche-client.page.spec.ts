import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechercheClientPage } from './recherche-client.page';

describe('RechercheClientPage', () => {
  let component: RechercheClientPage;
  let fixture: ComponentFixture<RechercheClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
