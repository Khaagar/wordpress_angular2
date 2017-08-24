import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {WindowRef} from '../../shared/windowRef';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CarouselService {
    private _wpBase = "";
    private carouselGalery = "";
    private carouselImageName = "";

    constructor(private winRef: WindowRef, private http: Http) {
        let wpInfo = winRef.wpData;
        this._wpBase = wpInfo.apiDataUrl;
        this.carouselGalery = wpInfo.carouselId;
        this.carouselImageName = wpInfo.carouselImageName;
    }

    getCarouselItems(): Observable<any> {
        return this.http
            .get(this._wpBase + `media?categories=${this.carouselGalery}`)
            .map((res: Response) => {
                let items = res.json();
                var tmp = [];
                for (var i = 0; i < items.length; i++) {
                    tmp.push({
                        source_url: items[i].media_details.sizes[this.carouselImageName].source_url,
                        caption: items[i].caption.rendered,
                        alt_text: items[i].alt_text,
                        date: items[i].date
                    });
                };
                return tmp;
            }
            )
    }



}