import { Injectable } from '@angular/core';
import { WindowRef } from '../../shared/windowRef';
import { Http } from '@angular/http';

@Injectable()
export class HeaderService {
  private _wpBase = "";

  constructor(private winRef: WindowRef, private http: Http) {
      let wpInfo = winRef.wpData;
      this._wpBase = wpInfo.apiMenusUrl;
  }


}
