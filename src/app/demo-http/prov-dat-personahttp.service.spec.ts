import { TestBed } from '@angular/core/testing';

import { ProvDatPersonahttpService } from './prov-dat-personahttp.service';

describe('ProvDatPersonahttpService', () => {
  let service: ProvDatPersonahttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvDatPersonahttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
