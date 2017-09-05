import { TestBed, inject } from '@angular/core/testing';
import {WindowRef} from '../../shared/windowRef';
import {HttpModule} from '@angular/http';
import { EventsService } from './events.service';

describe('EventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [EventsService, WindowRef]
    });
  });

  it('should be created', inject([EventsService], (service: EventsService) => {
    expect(service).toBeTruthy();
  }));
});
