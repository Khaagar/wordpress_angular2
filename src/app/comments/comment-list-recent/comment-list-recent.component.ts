import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Comment } from '../comment';
import { CommentsService } from '../comments.service';
import { PostsService } from '../../posts/posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comment-list-recent',
  templateUrl: './comment-list-recent.component.html',
  styleUrls: ['./comment-list-recent.component.scss'],
  providers: [CommentsService, PostsService]
})

export class CommentListRecentComponent implements OnInit, OnChanges {

  @Input() postId: number;
  post = [];
  comments: Comment[];
  postTitle: string;


  constructor( private commentsService: CommentsService,private postsService: PostsService, private router: Router, private route: ActivatedRoute ) { 
  }


  getComments(){
    this.commentsService
      .getComments()
      .subscribe(res => {
        this.comments = res;
          this.getPostSlug(this.comments['post'])
      });
      
  }

  ngOnInit() {
      this.getComments();
  
  }

  ngOnChanges(changes: SimpleChanges){
    this.getComments();
  }

  getPostSlug(id){
    this.postsService
      .getPostSlugBy(id)
      .subscribe(res => {
        this.postTitle = res;
        console.log(this.postTitle)
      });
  }

}
