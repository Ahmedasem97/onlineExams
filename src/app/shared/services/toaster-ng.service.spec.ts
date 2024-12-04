import { TestBed } from '@angular/core/testing';

import { ToasterNgService } from './toaster-ng.service';

describe('ToasterNgService', () => {
  let service: ToasterNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasterNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
