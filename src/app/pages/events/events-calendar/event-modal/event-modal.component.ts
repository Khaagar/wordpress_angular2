import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit, OnChanges {

  @Input() event: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  }
}
