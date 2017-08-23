import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WindowRef } from '../shared/windowRef';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Page } from './page';

@Injectable()
export class PagesService {

  private _wpBase = "";

  constructor(private winRef: WindowRef, private http: Http) {
      let wpInfo = winRef.wpData;
      this._wpBase = wpInfo.apiDataUrl;
  }

  getPage(slug): Observable<Page> {

      return this.http
        .get(this._wpBase + `pages/?slug=${slug}`)
        .map((res: Response) => res.json());

  }

}
