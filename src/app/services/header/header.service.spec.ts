import { TestBed, inject } from '@angular/core/testing';
import {WindowRef} from '../../shared/windowRef';
import {HttpModule} from '@angular/http';
import { HeaderService } from './header.service';

describe('HeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HeaderService,WindowRef]
    });
  });

  it('should be created', inject([HeaderService], (service: HeaderService) => {
    expect(service).toBeTruthy();
  }));
});
