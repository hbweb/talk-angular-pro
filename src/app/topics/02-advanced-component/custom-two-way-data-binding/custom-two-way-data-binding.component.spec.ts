import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTwoWayDataBindingComponent } from './custom-two-way-data-binding.component';

describe('CustomTwoWayDataBindingComponent', () => {
  let component: CustomTwoWayDataBindingComponent;
  let fixture: ComponentFixture<CustomTwoWayDataBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTwoWayDataBindingComponent]
    });
    fixture = TestBed.createComponent(CustomTwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
