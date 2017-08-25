import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { AuthorService } from '../../services/author.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommentListComponent } from '../../comments/comment-list/comment-list.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss'],
  providers: [PostsService, AuthorService],
  entryComponents: [CommentListComponent]
})
export class PostSingleComponent implements OnInit {

  author: Object;
  post: Post;

  constructor( private postsService: PostsService, private authorServise: AuthorService, private route: ActivatedRoute ) { }

  getPost(id){
    this.postsService
      .getPost(id)
      .subscribe(res => {
        this.post = res;
        this.getAuthorName(this.post['author'])
      });
  }

  getAuthorName(id){
    this.authorServise
      .getUserById(id)
      .subscribe(res => {
        this.author = res;
      });
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       let id = params['id'];
       this.getPost(id)
    });

  }

}
