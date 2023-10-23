import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumEditComponent } from './aquarium-edit.component';

describe('AquariumEditComponent', () => {
  let component: AquariumEditComponent;
  let fixture: ComponentFixture<AquariumEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AquariumEditComponent]
    });
    fixture = TestBed.createComponent(AquariumEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
