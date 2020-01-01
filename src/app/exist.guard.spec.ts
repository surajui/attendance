import { TestBed, async, inject } from '@angular/core/testing';

import { ExistGuard } from './exist.guard';

describe('ExistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExistGuard]
    });
  });

  it('should ...', inject([ExistGuard], (guard: ExistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
