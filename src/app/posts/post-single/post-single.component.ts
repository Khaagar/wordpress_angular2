import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommentListComponent } from '../../comments/comment-list/comment-list.component';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss'],
  providers: [PostsService],
  entryComponents: [CommentListComponent]
})
export class PostSingleComponent implements OnInit {

  post: Post;

  constructor( private postsService: PostsService, private route: ActivatedRoute ) { }

  getPost(id){
    this.postsService
      .getPost(id)
      .subscribe(res => {
        this.post = res;
        console.log(this.post)
      });
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       let id = params['id'];
       this.getPost(id)
    });

  }

}
