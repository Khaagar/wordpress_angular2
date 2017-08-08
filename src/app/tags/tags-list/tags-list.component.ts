import { Component, OnInit } from '@angular/core';
import { Tag } from '../tag';
import { TagsService } from '../tags.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css'],
  providers: [TagsService]
})
export class TagsListComponent implements OnInit {

  tags: Tag[];
  name: string = 'tag';

  constructor( private TagsService: TagsService, private route: ActivatedRoute, private router: Router) { }

  getTags(){
    this.TagsService
      .getTags()
      .subscribe(res => {
        this.tags = res;
      });
  }

  ngOnInit() {
       this.getTags()

  }

}
