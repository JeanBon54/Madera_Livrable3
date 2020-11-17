import { TestBed } from '@angular/core/testing';

import { CoupePrincipaleWebServiceService } from './coupe-principale-web-service.service';

describe('CoupePrincipaleWebServiceService', () => {
  let service: CoupePrincipaleWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoupePrincipaleWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
