import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WindowRef } from '../../shared/windowRef';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class FrontpageService {
  private _wpBase = "";

  constructor(private winRef: WindowRef, private http: Http) {
      let wp_info = winRef.nativeWindow;
      this._wpBase = wp_info.api_data_url;
  }

  getFrontpage(): Observable<any>{
    return this.http
      .get(this._wpBase + `frontpage`)
      .map((res: Response) => res.json());
  }

}