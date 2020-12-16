import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionDevisPage } from './gestion-devis.page';

describe('GestionDevisPage', () => {
  let component: GestionDevisPage;
  let fixture: ComponentFixture<GestionDevisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDevisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionDevisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
