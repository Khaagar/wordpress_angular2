import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WindowRef } from '../../shared/windowRef';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class TeamListService {
  private _wpBase = "";
  private teamGalery = "";
  private elementsCount: number;
  
    constructor(private winRef: WindowRef, private http: Http) {
        let wp_info = winRef.nativeWindow;
        this._wpBase = wp_info.api_data_url;
        this.teamGalery = wp_info.team_id;
        this.elementsCount = parseInt(wp_info.team_pp_carousel);
    }
    
    getTeamMembers(): Observable<any>{
        return this.http
          .get(this._wpBase + `media?categories=${this.teamGalery}&per_page=50`)
          .map((res: Response) => res.json())
    }
    getElementsCount(): number{
      return this.elementsCount;
    }
    
  
  }