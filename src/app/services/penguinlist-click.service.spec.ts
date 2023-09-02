import { TestBed } from '@angular/core/testing';

import { PenguinlistClickService } from './penguinlist-click.service';

describe('PenguinlistClickService', () => {
  let service: PenguinlistClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenguinlistClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
