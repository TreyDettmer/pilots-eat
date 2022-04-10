import { Component, Input, OnInit } from '@angular/core';
import { ReviewPost } from '../models/review-post';

@Component({
  selector: 'app-review-post',
  templateUrl: './review-post.component.html',
  styleUrls: ['./review-post.component.css']
})
export class ReviewPostComponent implements OnInit {

  constructor() { }

  @Input() post:ReviewPost = {
    title : "Title",
    author : "Author",
    date : "date",
    address: "",
    description : "description",
    upvotes : 0,
    downvotes : 0,
  };

  upvoted : boolean = false;
  downvoted : boolean = false;

  ngOnInit(): void {
  }

  incrementUpVotes()
  {
    if (!this.upvoted)
    {
      this.post.upvotes += 1;
      this.upvoted = true;
      if (this.downvoted == true) {    
        this.downvoted = false;
        this.post.downvotes -= 1;
      }
    }
  }

  incrementDownVotes()
  {
    if (!this.downvoted)
    {
      this.post.downvotes += 1;
      this.downvoted = true;
      if (this.upvoted == true)
      {
        this.upvoted = false;
        this.post.upvotes -= 1;
      }
    }
  }



}
