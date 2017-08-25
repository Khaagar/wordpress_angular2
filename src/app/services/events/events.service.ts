import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WindowRef } from '../../shared/windowRef';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
@Injectable()
export class EventsService {

  private _calendarInfo= [];

  constructor(private winRef: WindowRef, private http: Http) {
      this._calendarInfo = winRef.calendarData;
  }

  getCalendarItemsList(): Observable<any> {
    let calendar1 = this._calendarInfo[0];
    let calendar2 = this._calendarInfo[1];
    return Observable.forkJoin(
      this.http
      .get(calendar1.calendarUrl)
      .map((res: Response) => {
        let items = res.json()['items'];
        return this.adjustEventData(items,calendar1.calendarColor,calendar1.calendarName)
      }),
      this.http
      .get(calendar2.calendarUrl)
      .map((res: Response) => {
        let items = res.json()['items'];
        return this.adjustEventData(items,calendar2.calendarColor,calendar2.calendarName)
      }),
  )
  }


  adjustEventData(data,color,name): Object[]{
    let events = [];
    for(var i = 0; i<data.length;i++){
      let entry = data[i];
      var url = entry.htmlLink || null;
      events.push({
        title: entry.summary,
        start: Date.parse(entry.start.dateTime) || entry.start.date, // try timed. will fall back to all-day
        end: Date.parse(entry.end.dateTime) || entry.end.date, // same
        allDay: true,
        draggable: false,
        cssClass: name,
        color: {
          primary: color,
          secondary: color
        }
      });
    }
    return events;
  }

}

// {
//   "start": new Date(),
//   "title":"event1",
//   "color":{
//     "primary":"blue",
//     "secondary":"red"
//   }