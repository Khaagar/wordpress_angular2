import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../../services/carousel/carousel.service'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [CarouselService]
})
export class CarouselComponent implements OnInit {

  items: any;
  constructor(private carouselService: CarouselService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.carouselService
      .getCarouselItems()
      .subscribe(res => {
        console.log(res)
        this.items = res;
      });
      
  }
}
