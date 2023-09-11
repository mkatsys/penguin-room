import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinLoginComponent } from './penguin-login.component';

describe('PenguinLoginComponent', () => {
  let component: PenguinLoginComponent;
  let fixture: ComponentFixture<PenguinLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenguinLoginComponent]
    });
    fixture = TestBed.createComponent(PenguinLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
