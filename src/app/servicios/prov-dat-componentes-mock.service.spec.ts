import { TestBed } from '@angular/core/testing';

import { ProvDatComponentesMockService } from './prov-dat-componentes-mock.service';

describe('ProvDatComponentesMockService', () => {
  let service: ProvDatComponentesMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvDatComponentesMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
