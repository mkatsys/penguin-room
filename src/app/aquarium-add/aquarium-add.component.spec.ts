import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumAddComponent } from './aquarium-add.component';

describe('AquariumAddComponent', () => {
  let component: AquariumAddComponent;
  let fixture: ComponentFixture<AquariumAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AquariumAddComponent]
    });
    fixture = TestBed.createComponent(AquariumAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
