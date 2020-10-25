import { TestBed } from '@angular/core/testing';


import { ProjetWebService } from './projet-webservice.service';

describe('ProjetWebserviceService', () => {
  let service: ProjetWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
