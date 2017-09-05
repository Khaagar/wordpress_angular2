import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarModule} from 'angular-calendar';
import { CalendarUtils } from 'angular-calendar/dist/esm/src/providers/calendarUtils.provider';
import { CalendarDateFormatter } from 'angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider';
import { EventsCalendarCustomViewComponent } from './events-calendar-custom-view.component';
import {
  CalendarEvent,
  WeekDay,
  MonthView,
  MonthViewDay
} from 'calendar-utils';

describe('EventsCalendarCustomViewComponent', () => {
  let component: EventsCalendarCustomViewComponent;
  let fixture: ComponentFixture<EventsCalendarCustomViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CalendarModule, ],
      declarations: [ EventsCalendarCustomViewComponent ],
      providers:[CalendarUtils,CalendarDateFormatter]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCalendarCustomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    console.log(component.view);
    expect(component).toBeTruthy();
  });
});
