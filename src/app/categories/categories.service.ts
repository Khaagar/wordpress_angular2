import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WindowRef } from '../shared/windowRef';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Category } from './category';

@Injectable()
export class CategoriesService {

  private _wpBase = "";

  constructor(private winRef: WindowRef, private http: Http) {
      let wpInfo = winRef.wpData;
      this._wpBase = wpInfo.apiDataUrl;
  }

  getCategories(): Observable<Category[]> {
      return this.http
        .get(this._wpBase + 'categories')
        .map((res: Response) => res.json());

  }

}
