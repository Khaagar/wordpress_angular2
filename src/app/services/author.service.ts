import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WindowRef } from '../shared/windowRef';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { Author } from './author'


@Injectable()
export class AuthorService {
  author: Author;
  private _wpBase = "";

  constructor(private winRef: WindowRef, private http: Http) {
      let wp_info = winRef.nativeWindow;
      this._wpBase = wp_info.api_url;
  }

  getUserById(id): Observable<Author> {
      return this.http
        .get(this._wpBase + `users/${id}`)
        .map((res: Response) => res.json()['name']);
  }
}