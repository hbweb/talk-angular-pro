import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicListingComponent } from './topic-listing.component';

describe('TopicListingComponent', () => {
  let component: TopicListingComponent;
  let fixture: ComponentFixture<TopicListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicListingComponent]
    });
    fixture = TestBed.createComponent(TopicListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
