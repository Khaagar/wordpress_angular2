import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit, OnChanges {

  @Input() event: any;
  isAllDay: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.event){
      this.isAllDay = this.event.allDay;
    }
  }

  
}
