import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WindowRef } from '../shared/windowRef';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Tag } from './tag';

@Injectable()
export class TagsService {

  private _wpBase = "";

  constructor(private winRef: WindowRef, private http: Http) {
      let wp_info = winRef.nativeWindow;
      this._wpBase = wp_info.api_url;
  }

  getTags(): Observable<Tag[]> {
      return this.http
        .get(this._wpBase + 'tags')
        .map((res: Response) => res.json());

  }

}
