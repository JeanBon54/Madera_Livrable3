import { TestBed } from '@angular/core/testing';

import { CommercialWebServiceService } from './commercial-web-service.service';

describe('CommercialWebServiceService', () => {
  let service: CommercialWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommercialWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
