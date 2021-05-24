import { TestBed } from '@angular/core/testing';

import { ExamsectionService } from './examsection.service';

xdescribe('ExamsectionService', () => {
  let service: ExamsectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamsectionService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
