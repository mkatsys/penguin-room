import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumListComponent } from './aquarium-list.component';

describe('AquariumListComponent', () => {
  let component: AquariumListComponent;
  let fixture: ComponentFixture<AquariumListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AquariumListComponent]
    });
    fixture = TestBed.createComponent(AquariumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
