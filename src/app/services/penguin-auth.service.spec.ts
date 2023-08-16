import { TestBed } from '@angular/core/testing';

import { PenguinAuthService } from './penguin-auth.service';

describe('PenguinAuthService', () => {
  let service: PenguinAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenguinAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
