import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSingleComponent } from './page-single.component';

describe('PostListComponent', () => {
  let component: PageSingleComponent;
  let fixture: ComponentFixture<PageSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});