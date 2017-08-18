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
  rows: Array<number>;
  divider: number = 0;
  elements: Array<number>;

  constructor(private teamListService: TeamListService) {
    
   }
  ngOnInit() {
    this.divider = this.teamListService.getElementsCount();
    this.teamListService
      .getTeamMembers()
      .subscribe(res => {   
        this.rows = Array(Math.ceil(res.length / this.divider)).fill(0).map((x,i)=>i);
        this.elements = Array(this.divider).fill(0).map((x,i)=>i);
        this.list = res
      });
  }

}
