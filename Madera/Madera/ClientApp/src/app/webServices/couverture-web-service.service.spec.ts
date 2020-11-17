import { TestBed } from '@angular/core/testing';

import { CouvertureWebServiceService } from './couverture-web-service.service';

describe('CouvertureWebServiceService', () => {
  let service: CouvertureWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouvertureWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
