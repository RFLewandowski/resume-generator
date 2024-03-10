import { TestBed } from '@angular/core/testing';

import { SheetStateService } from './sheet-state.service';

describe('SheetStateService', () => {
  let service: SheetStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheetStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
