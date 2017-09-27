import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarModule} from 'angular-calendar';
import { CalendarUtils } from 'angular-calendar/dist/esm/src/providers/calendarUtils.provider';
import { CalendarDateFormatter } from 'angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider';
import { EventsCalendarCustomViewComponent } from './events-calendar-custom-view.component';

// var viewDate = new Date();
// var events = [];
describe('EventsCalendarCustomViewComponent', () => {
  let component: EventsCalendarCustomViewComponent;
  let utils: CalendarUtils;
  let fixture: ComponentFixture<EventsCalendarCustomViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CalendarModule ],
      declarations: [ EventsCalendarCustomViewComponent ],
      providers:[CalendarDateFormatter, CalendarUtils]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCalendarCustomViewComponent);
    component = fixture.componentInstance;
    component.refreshBody();
    console.log('in before',component.view);
    fixture.detectChanges();
  });

  it('should be created', () => {
    console.log('in it',component.view);
    expect(component).toBeTruthy();
  });
});
