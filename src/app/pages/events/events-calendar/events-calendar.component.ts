import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import { EventsService } from '../../../services/events/events.service'
import { CustomDateFormatter } from './custom-date-formatter.provider';


import { CalendarEvent, CalendarMonthViewDay, CalendarDateFormatter } from 'angular-calendar';

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.scss'],
  providers: [EventsService, 
    {
    provide: CalendarDateFormatter,
    useClass: CustomDateFormatter
  }]
})
export class EventsCalendarComponent implements OnInit {

  
    view: string = 'month';
    viewDate: Date = new Date();
  
    events: CalendarEvent[];
    clickedEvent: CalendarEvent;

  constructor(private eventsService: EventsService, private rendered: Renderer) { 
    
  }


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
        this.events=this.events.sort((a,b)=>{
          if (a.start<b.start) return -1;
          else if (a.start>b.start) return 1;
          else return 0;
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

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    jQuery('.calendar-placeholder').height(jQuery('.cal-days > div:first').height()*6);
    
  }

  eventClicked({ calendarEvent }: { calendarEvent: CalendarEvent },cardEvent?): void {
    this.clickedEvent = calendarEvent || cardEvent;
    let date = new Date(this.clickedEvent.start);
    document.getElementById("openModalButton").click();
  }

  checkMonth(date){
    return new Date(date).getMonth();
  }

}
