import { TestBed } from '@angular/core/testing';

import { ItemCheckerService } from './item-checker.service';

describe('ItemCheckerService', () => {
  let service: ItemCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
