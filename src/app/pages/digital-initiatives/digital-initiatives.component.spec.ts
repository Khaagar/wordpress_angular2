import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WindowRef } from '../../shared/windowRef';
import { HttpModule } from '@angular/http';
import { DigitalInitiativesComponent } from './digital-initiatives.component';

describe('DigitalInitiativesComponent', () => {
  let component: DigitalInitiativesComponent;
  let fixture: ComponentFixture<DigitalInitiativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [ DigitalInitiativesComponent ],
      providers: [WindowRef]
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
