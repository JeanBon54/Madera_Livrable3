import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouveauModulePage } from './nouveau-module.page';

describe('NouveauModulePage', () => {
  let component: NouveauModulePage;
  let fixture: ComponentFixture<NouveauModulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauModulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouveauModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
