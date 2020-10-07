import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouvelleGammePage } from './nouvelle-gamme.page';

describe('NouvelleGammePage', () => {
  let component: NouvelleGammePage;
  let fixture: ComponentFixture<NouvelleGammePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleGammePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouvelleGammePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
