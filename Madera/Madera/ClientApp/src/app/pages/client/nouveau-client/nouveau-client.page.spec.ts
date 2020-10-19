import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouveauClientPage } from './nouveau-client.page';

describe('NouveauClientPage', () => {
  let component: NouveauClientPage;
  let fixture: ComponentFixture<NouveauClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouveauClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
