import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WindowRef } from '../../shared/windowRef';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class MenuService {
  private _wpBase = "";

  constructor(private winRef: WindowRef, private http: Http) {
      let wp_info = winRef.nativeWindow;
      this._wpBase = wp_info.api_menus_url;
  }


  getMenuByName(name): Observable<any>{
    return this.http
        .get(this._wpBase + `menu-locations/${name}`)
        .map((res: any) => res.json());
  }

  getMenuById(id): Observable<Object>{
    return this.http
      .get(this._wpBase + `menus/${id}`)
      .map((res: Response) => res.json());
  }

}