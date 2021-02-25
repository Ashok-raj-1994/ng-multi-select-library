import { TestBed } from '@angular/core/testing';

import { NgMultiSelectService } from './ng-multi-select-library.service';

describe('NgMultiSelectService', () => {
  let service: NgMultiSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMultiSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
