import { Component, OnInit } from '@angular/core';
import { TeamListService } from '../../../services/team-list/team-list.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
  providers: [TeamListService]
})
export class TeamListComponent implements OnInit {

  list: any;
  columns : Number;
  
  constructor(private teamListService: TeamListService) {
    
   }
  ngOnInit() {
      this.columns = this.teamListService.getColumns();
    this.teamListService
      .getTeamMembers()
      .subscribe(res => {   
        this.list = res
      });
     
  }

}
