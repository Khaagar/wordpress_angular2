import { Component, OnInit } from '@angular/core';
import { Page } from '../page';
import { PagesService } from '../pages.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hubs',
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.component.scss'],
  providers: [PagesService]
})
export class HubsComponent implements OnInit {

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
         this.getPage("hubs")
  
    }
  
  }