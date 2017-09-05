/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA }          from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { TestBed, async } from '@angular/core/testing';
import {RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { WindowRef } from './shared/windowRef';
import {HttpModule } from '@angular/http'
import { AppComponent } from './app.component';


describe('App: Wpng2Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule,RouterModule.forRoot([]),RouterTestingModule.withRoutes([])],
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: APP_BASE_HREF, useValue : '/' },WindowRef]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
