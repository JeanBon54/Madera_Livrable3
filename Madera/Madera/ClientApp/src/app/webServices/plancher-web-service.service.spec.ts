import { TestBed } from '@angular/core/testing';

import { PlancherWebServiceService } from './plancher-web-service.service';

describe('PlancherWebServiceService', () => {
  let service: PlancherWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlancherWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
