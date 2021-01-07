import { TestBed } from '@angular/core/testing';

import { AutocompleteClientService } from './autocomplete-client.service';

describe('AutocompleteClientService', () => {
  let service: AutocompleteClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocompleteClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
