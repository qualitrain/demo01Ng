import { TestBed } from '@angular/core/testing';

import { ProvDatPerrosService } from './prov-dat-perros.service';

describe('ProvDatPerrosService', () => {
  let service: ProvDatPerrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvDatPerrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
