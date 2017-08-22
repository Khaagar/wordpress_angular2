import { Component, OnInit } from '@angular/core';
import { Page } from '../page';
import { PagesService } from '../pages.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: [
    './events.component.scss',
    "../../../assets/assets-calendar/css/default-calendar-grid.min.css?ver=3.1.9",
    "../../../assets/assets-calendar/css/default-calendar-list.min.css?ver=3.1.9"
  ],
  providers: [PagesService]
})
export class EventsComponent implements OnInit {

  page: Page;
  
    constructor( private pagesService: PagesService, private route: ActivatedRoute ) { }
  
    getPage(slug){
      this.pagesService
        .getPage(slug)
        .subscribe(res => {
          this.page = res[0];
        });
    }
  
    ngOnInit() {
      this.getPage("events")
  
    }
  
  }