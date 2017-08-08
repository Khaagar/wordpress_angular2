import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListRecentComponent } from './post-list-recent.component';

describe('PostListComponent', () => {
  let component: PostListRecentComponent;
  let fixture: ComponentFixture<PostListRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});