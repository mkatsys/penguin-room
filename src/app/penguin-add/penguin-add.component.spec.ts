import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinAddComponent } from './penguin-add.component';

describe('PenguinAddComponent', () => {
  let component: PenguinAddComponent;
  let fixture: ComponentFixture<PenguinAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenguinAddComponent]
    });
    fixture = TestBed.createComponent(PenguinAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
