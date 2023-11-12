import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YatzyComponent } from './yatzy.component';

describe('YatzyComponent', () => {
  let component: YatzyComponent;
  let fixture: ComponentFixture<YatzyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YatzyComponent]
    });
    fixture = TestBed.createComponent(YatzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
