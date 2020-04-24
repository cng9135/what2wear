import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventSchedPage } from './event-sched.page';

describe('EventSchedPage', () => {
  let component: EventSchedPage;
  let fixture: ComponentFixture<EventSchedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSchedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventSchedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
