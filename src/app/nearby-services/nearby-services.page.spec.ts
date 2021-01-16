import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbyServicesPage } from './nearby-services.page';

describe('NearbyServicesPage', () => {
  let component: NearbyServicesPage;
  let fixture: ComponentFixture<NearbyServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
