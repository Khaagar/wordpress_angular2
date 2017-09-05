import { TestBed, inject } from '@angular/core/testing';
import {WindowRef} from '../../shared/windowRef';
import {HttpModule} from '@angular/http';
import { CarouselService } from './carousel.service';

var wpInfo = {
  "apiDataUrl": "http:\/\/new-project.localhost\/wp-json\/wp\/v2\/",
  "apiMenusUrl": "http:\/\/new-project.localhost\/wp-json\/wp-api-menus\/v2\/",
  "templateDirectory": "http:\/\/new-project.localhost\/wp-content\/themes\/angular-theme\/",
  "nonce": "7348b7c58a",
  "isAdmin": "1", "siteTitle": "Strona główna",
  "carouselId": "carousel-front", 
  "teamId": "carousel-team",
  "mainMenu": "header-footer-menu",
  "teamPpCarousel": "4",
  "carouselImageName":"frontpage-carousele-size",
  "teamImageName":"team-carousele-size" 
};

describe('CarouselService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CarouselService, WindowRef]
    });
  });

  it('should be created', inject([CarouselService], (service: CarouselService) => {
    expect(service).toBeTruthy();
  }));
});
