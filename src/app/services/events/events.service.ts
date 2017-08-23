import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WindowRef } from '../../shared/windowRef';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
@Injectable()
export class EventsService {

  private _calendar_info= [];

  constructor(private winRef: WindowRef, private http: Http) {
      this._calendar_info = winRef.calendarInfo;
  }

  getCalendarItemsList(calName): Observable<any> {
    let calendar = this._calendar_info.find(x=>x.calendar_name == calName);
    return this.http
    .get(calendar.calendar_url)
    .map((res: Response) => {
      return res.json()['items'];
    });
  }
}

