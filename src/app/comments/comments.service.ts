import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WindowRef } from '../shared/windowRef';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Comment } from './comment';

@Injectable()
export class CommentsService {

  private _wpBase = "";

  constructor(private winRef: WindowRef, private http: Http) {
      let wpInfo = winRef.wpData;
      this._wpBase = wpInfo.apiDataUrl;
  }

  getCommentsByPostId(postId, parentId): Observable<Comment[]> {
    return this.http 
      .get(this._wpBase + `comments/?post=${postId}`)
      .map((res: Response) => res.json());
  }

  getComments(): Observable<Comment[]> {
    return this.http 
      .get(this._wpBase + `comments`)
      .map((res: Response) => res.json());
  }

  getComment(id): Observable<Comment> {
    return this.http
      .get(this._wpBase + `comments/${id}`)
      .map((res: Response) => res.json());
  }
}
