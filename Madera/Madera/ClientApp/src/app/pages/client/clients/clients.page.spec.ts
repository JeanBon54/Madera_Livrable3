import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CLientsPage } from './clients.page';

describe('CLientsPage', () => {
  let component: CLientsPage;
  let fixture: ComponentFixture<CLientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CLientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
