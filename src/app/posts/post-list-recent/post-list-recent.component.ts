import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-list-recent',
  templateUrl: './post-list-recent.component.html',
  styleUrls: ['./post-list-recent.component.scss'],
  providers: [PostsService]
})
export class PostListRecentComponent implements OnInit {

  posts: Post[];

  constructor( private postsService: PostsService, private route: ActivatedRoute ) { }

  getPosts(property, slug){
    this.postsService
      .getPosts(property, slug)
      .subscribe(res => {
        this.posts = res.slice(0,5);
      });
  }

  ngOnInit() {
    this.getPosts("orderby","date");
  }

}
