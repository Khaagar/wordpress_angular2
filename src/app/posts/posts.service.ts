import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WindowRef } from '../shared/windowRef';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Post } from './post';

@Injectable()
export class PostsService {

  private _wpBase = "";

  constructor(private winRef: WindowRef, private http: Http) {
      let wpInfo = winRef.wpData;
      this._wpBase = wpInfo.apiDataUrl;
  }

  getPosts(property, propId): Observable<Post[]> {
    switch(property){
      case 'category':
        return this.http
          .get(this._wpBase + `posts/?filter[category_name]=${propId}`)
          .map((res: Response) => res.json());
      case 'tag':
        return this.http
          .get(this._wpBase + `posts/?filter[tag]=${propId}`)
          .map((res: Response) => res.json());
      case 'author':
        return this.http
          .get(this._wpBase + `posts/?filter[author]=${propId}`)
          .map((res: Response) => res.json());
      case 'orderby':
        return this.http
          .get(this._wpBase + `posts/?filter[orderby]=${propId}`)
          .map((res: Response) => res.json());
      default:
        return this.http
            .get(this._wpBase + 'posts')
            .map((res: Response) => res.json());
    }
  }

  getPost(id): Observable<Post> {
      return this.http
        .get(this._wpBase + `posts/${id}`)
        .map((res: Response) => res.json());
  }

  getPostSlugBy(id): Observable<string> {
    return this.http
        .get(this._wpBase + `posts/${id}`)
        .map((res: Response) => res.json()['title'].rendered);

  }

}
