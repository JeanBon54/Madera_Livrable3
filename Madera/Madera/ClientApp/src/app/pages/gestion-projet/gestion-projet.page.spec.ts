import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionProjetPage } from './gestion-projet.page';

describe('GestionProjetPage', () => {
  let component: GestionProjetPage;
  let fixture: ComponentFixture<GestionProjetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionProjetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionProjetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
