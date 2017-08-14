import { Component, OnInit } from '@angular/core';
import { FrontpageService } from '../services/frontpage/frontpage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [FrontpageService]
})
export class MainComponent implements OnInit {

frontpage: Object;

  constructor(private frontpageService: FrontpageService) { }

  ngOnInit() {
    this.getFrontpage();
  }

  getFrontpage(){
    this.frontpageService
    .getFrontpage()
    .subscribe(res => this.frontpage = res);
  }
}
