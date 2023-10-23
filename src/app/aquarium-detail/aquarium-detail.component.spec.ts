import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumDetailComponent } from './aquarium-detail.component';

describe('AquariumDetailComponent', () => {
  let component: AquariumDetailComponent;
  let fixture: ComponentFixture<AquariumDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AquariumDetailComponent]
    });
    fixture = TestBed.createComponent(AquariumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
