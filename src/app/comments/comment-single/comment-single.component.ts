import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment';
import { CommentsService } from '../comments.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comment-single',
  templateUrl: './comment-single.component.html',
  styleUrls: ['./comment-single.component.css'],
  providers: [CommentsService]
})
export class CommentSingleComponent implements OnInit {

  @Input() comment: Comment;

  constructor( private commentsService: CommentsService, private route: ActivatedRoute ) { }

  ngOnInit() {

  }


}
