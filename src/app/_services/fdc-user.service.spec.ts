import { TestBed } from '@angular/core/testing';

import { FdcUserService } from './fdc-user.service';

describe('FdcUserService', () => {
  let service: FdcUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FdcUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
