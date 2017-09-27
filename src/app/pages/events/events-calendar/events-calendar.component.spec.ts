import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CalendarModule, CalendarDateFormatter} from 'angular-calendar'
import {WindowRef } from '../../../shared/windowRef'
import {HttpModule} from '@angular/http'
import { EventsCalendarComponent } from './events-calendar.component';
import { EventsCalendarCustomViewComponent } from './events-calendar-custom-view/events-calendar-custom-view.component'
import { EventModalComponent } from './event-modal/event-modal.component';
import { CalendarUtils } from 'angular-calendar/dist/esm/src/providers/calendarUtils.provider';
import {CalendarEventTitleFormatter} from 'angular-calendar';


describe('EventsCalendarComponent', () => {
  let component: EventsCalendarComponent;
  let fixture: ComponentFixture<EventsCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CalendarModule, HttpModule],
      declarations: [ EventsCalendarComponent, EventsCalendarCustomViewComponent, EventModalComponent ],
      providers: [WindowRef, CalendarDateFormatter, CalendarUtils, CalendarEventTitleFormatter]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
