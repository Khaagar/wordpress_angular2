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
    console.log('jestem111')
    this.getFrontpage();
  }

  getFrontpage(){
    console.log('front func')
    this.frontpageService
    .getFrontpage()
    .subscribe(res => {
      console.log('front: ',res);
      this.frontpage = res;
    });
  }
}
