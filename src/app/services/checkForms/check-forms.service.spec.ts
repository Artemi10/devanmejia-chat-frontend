import { TestBed } from '@angular/core/testing';

import { CheckFormsService } from './check-forms.service';

describe('CheckFormsService', () => {
  let service: CheckFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
