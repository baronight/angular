import { TestBed } from '@angular/core/testing';

import { ShibaService } from './shiba.service';

describe('ShibaService', () => {
  let service: ShibaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShibaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
