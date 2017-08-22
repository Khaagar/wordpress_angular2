import { Component, OnInit } from '@angular/core';
import { gcal } from 'fullcalendar/dist/gcal';

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.scss']
})
export class EventsCalendarComponent implements OnInit {

  internalEvents: Object = {
    googleCalendarId: 'roche.com_l4jj87q7fklrbvkii3v6n8gotc@group.calendar.google.com',
    className: 'internal-events',
    color: "orange"
  }
  externalEvents: Object = {
    googleCalendarId: 'roche.com_3ub091a415lgm5t9so9de7gsok@group.calendar.google.com',
    className: 'external-events',
    color: "blue"
  }
  

  constructor() { }

  ngOnInit() {
    var TH = this;
    jQuery(document).ready(function(){
      $("#eventsFromSpace").fullCalendar({
          header: {
            left:   'prev',
            center: 'title',
            right:  'next'
          },
          height: 'auto',
          defaultDate: new Date(),
          editable: true,
          googleCalendarApiKey: 'AIzaSyArQXuswcbAz7NkVt0hiRWMBpkQM-_lKRo',
          eventSources: 
            [
              TH.internalEvents,
              TH.externalEvents
              ]
          
    })
  })
  }
}
