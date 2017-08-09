import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListRecentComponent } from './comment-list-recent.component';

describe('CommentListRecentComponent', () => {
  let component: CommentListRecentComponent;
  let fixture: ComponentFixture<CommentListRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});