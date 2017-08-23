import {Injectable} from '@angular/core';

function _window(): any {
    // return the native window obj
    return window;
}

@Injectable()
export class WindowRef {
    wpInfo: any;
    calendarInfo: any;
    get wpData(): any {
        let window = _window();
        return window.wpInfo;
    }
    get calendarData(): any {
        let window = _window();
        return window.calendarInfo;
    }
}