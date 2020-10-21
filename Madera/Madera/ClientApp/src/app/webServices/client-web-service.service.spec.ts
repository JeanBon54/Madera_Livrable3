import { TestBed } from '@angular/core/testing';

import { ClientWebServiceService } from './client-web-service.service';

describe('ClientWebServiceService', () => {
  let service: ClientWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
