import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WindowRef } from '../../shared/windowRef';
import { HttpModule } from '@angular/http';
import { HubsComponent } from './hubs.component';

describe('HubsComponent', () => {
  let component: HubsComponent;
  let fixture: ComponentFixture<HubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [ HubsComponent ],
      providers:[WindowRef]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
