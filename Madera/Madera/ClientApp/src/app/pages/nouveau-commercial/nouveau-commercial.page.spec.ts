import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouveauCommercialPage } from './nouveau-commercial.page';

describe('NouveauCommercialPage', () => {
  let component: NouveauCommercialPage;
  let fixture: ComponentFixture<NouveauCommercialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauCommercialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouveauCommercialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
