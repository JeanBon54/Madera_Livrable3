import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouveauProjetPage } from './nouveau-projet.page';

describe('NouveauProjetPage', () => {
  let component: NouveauProjetPage;
  let fixture: ComponentFixture<NouveauProjetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauProjetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouveauProjetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
