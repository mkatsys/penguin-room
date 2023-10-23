import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinEditComponent } from './penguin-edit.component';

describe('PenguinEditComponent', () => {
  let component: PenguinEditComponent;
  let fixture: ComponentFixture<PenguinEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenguinEditComponent]
    });
    fixture = TestBed.createComponent(PenguinEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
