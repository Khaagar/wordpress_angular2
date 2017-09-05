import { TestBed, inject } from '@angular/core/testing';
import {WindowRef} from '../../shared/windowRef';
import {HttpModule} from '@angular/http';
import { TeamListService } from './team-list.service';

describe('TeamLisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [TeamListService, WindowRef]
    });
  });

  it('should be created', inject([TeamListService], (service: TeamListService) => {
    expect(service).toBeTruthy();
  }));
});
