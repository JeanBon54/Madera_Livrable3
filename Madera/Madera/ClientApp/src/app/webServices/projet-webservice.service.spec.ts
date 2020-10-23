import { TestBed } from '@angular/core/testing';

import { ClientWebServiceService } from './projet-webservice.service';

describe('ProjetWebServiceService', () => {
  let service: ProjetWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
