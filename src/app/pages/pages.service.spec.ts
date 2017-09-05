/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {WindowRef} from '../shared/windowRef';
import {HttpModule} from '@angular/http';
import { PagesService } from './pages.service';

describe('Service: Pages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PagesService,WindowRef]
    });
  });

  it('should ...', inject([PagesService], (service: PagesService) => {
    expect(service).toBeTruthy();
  }));
});
