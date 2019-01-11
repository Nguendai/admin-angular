import { TestBed, inject } from '@angular/core/testing';

import { FixedService } from './fixed.service';

describe('FixedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FixedService]
    });
  });

  it('should be created', inject([FixedService], (service: FixedService) => {
    expect(service).toBeTruthy();
  }));
});
