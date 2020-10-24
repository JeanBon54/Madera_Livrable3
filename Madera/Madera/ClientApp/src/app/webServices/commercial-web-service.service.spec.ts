import { TestBed } from '@angular/core/testing';

import { CommercialWebService } from './commercial-web-service.service';

describe('CommercialWebService', () => {
  let service: CommercialWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommercialWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
