import { TestBed } from '@angular/core/testing';

import { FamilleComposantWebServiceService } from './famille-composant-web-service.service';

describe('FamilleComposantWebServiceService', () => {
  let service: FamilleComposantWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilleComposantWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
