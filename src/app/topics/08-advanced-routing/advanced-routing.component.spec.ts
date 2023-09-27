import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedRoutingComponent } from './advanced-routing.component';

describe('AdvancedRoutingComponent', () => {
  let component: AdvancedRoutingComponent;
  let fixture: ComponentFixture<AdvancedRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancedRoutingComponent]
    });
    fixture = TestBed.createComponent(AdvancedRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
