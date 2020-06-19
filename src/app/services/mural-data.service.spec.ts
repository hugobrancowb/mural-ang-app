import { TestBed } from '@angular/core/testing';

import { MuralDataService } from './mural-data.service';

describe('MuralDataService', () => {
  let service: MuralDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuralDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
