import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {WindowRef} from '../../shared/windowRef';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class TeamListService {
    private _wpBase = "";
    private teamGalery = "";
    private teamImageName = "";
    private elementsCount: number;

    constructor(private winRef: WindowRef, private http: Http) {
        let wpInfo = winRef.wpData;
        this._wpBase = wpInfo.apiDataUrl;
        this.teamGalery = wpInfo.teamId;
        this.teamImageName = wpInfo.teamImageName;
        this.elementsCount = parseInt(wpInfo.teamPpCarousel);
    }

    getTeamMembers(): Observable<any> {
        return this.http
            .get(this._wpBase + `media?filter[category_media]=${this.teamGalery}&per_page=50`)
            .map((res: Response) => {
                let items = res.json();
                let tmp = [];
                for (let i = 0; i < items.length;) {
                    let row = [];
                    for (let x = 0; x < this.elementsCount;) {
                        if(typeof items[i]!=="undefined" && items[i].media_details.sizes.hasOwnProperty(this.teamImageName)){
                            row.push({
                                source_url: items[i].media_details.sizes[this.teamImageName].source_url,
                                alt_text: items[i].alt_text
                            });
                        }
                        i++;
                        x++;
                    }
                    if(row.length > 0){
                        tmp.push(row);                        
                    }
                };
                if(tmp.length == 0){
                    console.error("there are no images, for gallery : " + this.teamGalery);
                }                
                return tmp;
            })
    }
}