import { Component, OnInit, Renderer } from '@angular/core';
import { EventsService } from '../../../services/events/events.service'

import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.scss'],
  providers: [EventsService]
})
export class EventsCalendarComponent implements OnInit {

  
  view: string = 'month';
    viewDate: Date = new Date();
  
    events: CalendarEvent[];

  constructor(private eventsService: EventsService, private rendered: Renderer) { }


  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.eventsService
      .getCalendarItemsList()
      .subscribe(res => {
        this.events = res[0];
        res[1].forEach(element => {
          this.events.push(element);
        });
      })
      
  }

  clickCheck(target,value){
    let elements = document.getElementsByClassName(target.id);
    for (var i=0; i<elements.length; i++){
      if(!value){
        elements.item(i).setAttribute("hidden", "true");
      }
      else{
        elements.item(i).removeAttribute("hidden");
      }


    }
  }
}
