import { TestBed } from '@angular/core/testing';

import { DevisWebServiceService } from './devis-web-service.service';

describe('DevisWebServiceService', () => {
  let service: DevisWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevisWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
