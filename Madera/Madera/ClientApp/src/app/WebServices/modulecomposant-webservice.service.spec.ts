import { TestBed } from '@angular/core/testing';


import { ModuleComposantService } from './moduleComposant-webservice.service';

describe('ModuleWebComposantService', () => {
  let service: ModuleComposantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleComposantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
