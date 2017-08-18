import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WindowRef } from '../../shared/windowRef';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CarouselService {
  private _wpBase = "";
  private carouselGalery = "";
  
    constructor(private winRef: WindowRef, private http: Http) {
        let wp_info = winRef.nativeWindow;
        this._wpBase = wp_info.api_data_url;
        this.carouselGalery = wp_info.carousel_id;
    }
    
    getCarouselItems(): Observable<any>{
        return this.http
          .get(this._wpBase + `media?categories=${this.carouselGalery}`)
          .map((res: Response) => res.json())
    }
    
    
  
  }