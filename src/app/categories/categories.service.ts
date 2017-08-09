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
      let wp_info = winRef.nativeWindow;
      this._wpBase = wp_info.api_data_url;
  }

  getCategories(): Observable<Category[]> {
      return this.http
        .get(this._wpBase + 'categories')
        .map((res: Response) => res.json());

  }

}
