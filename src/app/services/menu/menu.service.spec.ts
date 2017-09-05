import { TestBed, inject } from '@angular/core/testing';
import {WindowRef} from '../../shared/windowRef';
import {HttpModule} from '@angular/http';
import { MenuService } from './menu.service';

describe('MenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [MenuService,WindowRef]
    });
  });

  it('should be created', inject([MenuService], (service: MenuService) => {
    expect(service).toBeTruthy();
  }));
});
