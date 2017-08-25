import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Comment } from '../comment';
import { CommentsService } from '../comments.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  providers: [CommentsService]
})

export class CommentListComponent implements OnInit, OnChanges {

  @Input() postId: number;
  comments: Comment[];


  constructor( private commentsService: CommentsService, private router: Router, private route: ActivatedRoute ) { 
  }


  getComments(property, slug){
    this.commentsService
      .getCommentsByPostId(property, slug)
      .subscribe(res => {
        this.comments = res;
      });
  }

  ngOnInit() {
      this.getComments(this.postId,undefined);
  
  }

  ngOnChanges(changes: SimpleChanges){
    this.getComments(this.postId,undefined);
  }


}
