import { TestBed } from '@angular/core/testing';

import { ComposantWebServiceService } from './composant-web-service.service';

describe('ComposantWebServiceService', () => {
  let service: ComposantWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposantWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
