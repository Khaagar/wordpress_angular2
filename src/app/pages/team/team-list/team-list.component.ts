import { Component, OnInit } from '@angular/core';
import { TeamListService } from '../../../services/team-list/team-list.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
  providers: [TeamListService]
})
export class TeamListComponent implements OnInit {

  listzwei : any;
  list: any;
  rows: Array<number>;
  divider: number = 0;
  elements: Array<number>;

  constructor(private teamListService: TeamListService) {
    
   }
  ngOnInit() {
    this.teamListService
      .getTeamMembers()
      .subscribe(res => {   
        this.list = res
      });
  }

}
