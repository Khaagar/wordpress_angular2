import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { EventsComponent } from './events.component';
import { WindowRef } from '../../shared/windowRef'
import { HttpModule} from '@angular/http'
import { PagesService} from '../pages.service';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component'
import { EventsCalendarCustomViewComponent } from './events-calendar/events-calendar-custom-view/events-calendar-custom-view.component'
import { CalendarModule, CalendarDateFormatter, CalendarUtils, CalendarEventTitleFormatter } from 'angular-calendar'
import { EventModalComponent } from './events-calendar/event-modal/event-modal.component'

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CalendarModule, HttpModule],
      declarations: [ EventsComponent, EventsCalendarComponent, EventsCalendarCustomViewComponent, EventModalComponent ],
      providers: [WindowRef, PagesService, CalendarDateFormatter, CalendarUtils, CalendarEventTitleFormatter]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
