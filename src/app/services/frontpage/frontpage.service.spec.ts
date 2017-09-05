import { TestBed, inject } from '@angular/core/testing';
import {WindowRef} from '../../shared/windowRef';
import {HttpModule} from '@angular/http';
import { FrontpageService } from './frontpage.service';

describe('FrontpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [FrontpageService, WindowRef]
    });
  });

  it('should be created', inject([FrontpageService], (service: FrontpageService) => {
    expect(service).toBeTruthy();
  }));
});
