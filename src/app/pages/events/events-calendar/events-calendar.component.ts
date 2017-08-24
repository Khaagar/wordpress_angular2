import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events/events.service'

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.scss'],
  providers: [EventsService]
})
export class EventsCalendarComponent implements OnInit {

  internalEvents: Object = {
    googleCalendarId: 'roche.com_l4jj87q7fklrbvkii3v6n8gotc@group.calendar.google.com',
    className: 'internal',
    color: "orange"
  }
  externalEvents: Object = {
    googleCalendarId: 'roche.com_3ub091a415lgm5t9so9de7gsok@group.calendar.google.com',
    className: 'external',
    color: "blue"
  }
  items:any;
  

  constructor(private eventsService: EventsService) { }


  ngOnInit() {
    this.getItems('internal');
    
  }

  getItems(calName){
    this.eventsService
      .getCalendarItemsList()
      .subscribe(res => {
        this.buildCalendar(res);
      })
      
  }

  buildCalendar(res){
    jQuery(document).ready(function($){
      $("#eventsFromSpace").fullCalendar({
          header: {
            left:   'prev',
            center: 'title',
            right:  'next'
          },
          defaultView: 'month',
          aspectRatio:1.6,
          defaultDate: new Date(),
          eventLimit:true,
          editable: false,
          eventSources: 
            [
              res[0],
              res[1]
            ],
          eventRender: function eventRender(event, element, view) {
              return $("#"+event.className).is(":checked");
          }    
    });
      $('.cal-filter-container input:checkbox').on('change', function() {
      $('#eventsFromSpace').fullCalendar('rerenderEvents');
      });
  })
  }
}
