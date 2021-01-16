import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaiseComplaintPage } from './raise-complaint.page';

describe('RaiseComplaintPage', () => {
  let component: RaiseComplaintPage;
  let fixture: ComponentFixture<RaiseComplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseComplaintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaiseComplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
