import { TestBed } from '@angular/core/testing';

import { GammeWebServiceService } from './gamme-web-service.service';

describe('GammeWebServiceService', () => {
  let service: GammeWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GammeWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
