import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinDetailComponent } from './penguin-detail.component';

describe('PenguinDetailComponent', () => {
  let component: PenguinDetailComponent;
  let fixture: ComponentFixture<PenguinDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenguinDetailComponent]
    });
    fixture = TestBed.createComponent(PenguinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
