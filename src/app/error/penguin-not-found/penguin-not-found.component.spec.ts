import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinNotFoundComponent } from './penguin-not-found.component';

describe('PenguinNotFoundComponent', () => {
  let component: PenguinNotFoundComponent;
  let fixture: ComponentFixture<PenguinNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenguinNotFoundComponent]
    });
    fixture = TestBed.createComponent(PenguinNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
