import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalInitiativesComponent } from './digital-initiatives.component';

describe('DigitalInitiativesComponent', () => {
  let component: DigitalInitiativesComponent;
  let fixture: ComponentFixture<DigitalInitiativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalInitiativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalInitiativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
