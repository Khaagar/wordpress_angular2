import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {

  posts: Post[];


  constructor( private postsService: PostsService, private router: Router, private route: ActivatedRoute ) { 
  }


  getPosts(property, slug){
    this.postsService
      .getPosts(property, slug)
      .subscribe(res => {
        this.posts = res;
      });
  }

  ngOnInit() {
    
    this.route.params.forEach((params: Params) => {
      let property = params['property'];
      let slug = params['slug'];
      this.getPosts(property,slug);
    });
  }
}
