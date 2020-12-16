import { TestBed } from '@angular/core/testing';

import { ModuleWebServiceService } from './module-web-service.service';

describe('ModuleWebServiceService', () => {
  let service: ModuleWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
