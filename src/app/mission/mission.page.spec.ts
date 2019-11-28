import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MissionPage } from './mission.page';

describe('MissionPage', () => {
  let component: MissionPage;
  let fixture: ComponentFixture<MissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
