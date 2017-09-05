import {NO_ERRORS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CalendarModule, CalendarDateFormatter} from 'angular-calendar'
import {WindowRef } from '../../../shared/windowRef'
import {HttpModule} from '@angular/http'
import { EventsCalendarComponent } from './events-calendar.component';

describe('EventsCalendarComponent', () => {
  let component: EventsCalendarComponent;
  let fixture: ComponentFixture<EventsCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CalendarModule, HttpModule],
      declarations: [ EventsCalendarComponent ],
      providers: [WindowRef, CalendarDateFormatter],
      schemas: [NO_ERRORS_SCHEMA]
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
