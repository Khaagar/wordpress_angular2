import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowRef } from '../../shared/windowRef';
import { HttpModule } from '@angular/http';
import { TeamComponent } from './team.component';
import { TeamListComponent } from './team-list/team-list.component'

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ TeamComponent, TeamListComponent ],
      providers: [WindowRef]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
