import { TestBed } from '@angular/core/testing';

import { InmemorydbService } from './inmemorydb.service';

describe('InmemorydbService', () => {
  let service: InmemorydbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InmemorydbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
