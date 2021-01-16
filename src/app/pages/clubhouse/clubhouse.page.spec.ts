import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClubhousePage } from './clubhouse.page';

describe('ClubhousePage', () => {
  let component: ClubhousePage;
  let fixture: ComponentFixture<ClubhousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubhousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClubhousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
