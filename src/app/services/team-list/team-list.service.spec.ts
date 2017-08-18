import { TestBed, inject } from '@angular/core/testing';

import { TeamListService } from './team-list.service';

describe('TeamLisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamListService]
    });
  });

  it('should be created', inject([TeamListService], (service: TeamListService) => {
    expect(service).toBeTruthy();
  }));
});
