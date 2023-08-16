import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinListComponent } from './penguin-list.component';

describe('PenguinListComponent', () => {
  let component: PenguinListComponent;
  let fixture: ComponentFixture<PenguinListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenguinListComponent]
    });
    fixture = TestBed.createComponent(PenguinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
