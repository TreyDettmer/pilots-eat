import { Component, OnInit } from '@angular/core';
import { ReviewPostComponent } from '../review-post/review-post.component';
import { ReviewPost } from '../models/review-post';

@Component({
  selector: 'app-steals-and-deals',
  templateUrl: './steals-and-deals.component.html',
  styleUrls: ['./steals-and-deals.component.css']
})
export class StealsAndDealsComponent implements OnInit {

  constructor() { }


  reviewPosts:ReviewPost[] = [];
  ngOnInit(): void {
    this.initializeReviews();
  }

  initializeReviews()
  {
    for (let i = 0; i < 4; i++)
    {
      this.reviewPosts.push({
        title : "Title",
        author : "Author",
        date : "date",
        store : "Macks",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas vestibulum risus sed facilisis. Nulla facilisi. Cras non enim aliquet, aliquam massa vitae, hendrerit neque. Vestibulum et nibh nisi. Ut a ornare metus. Donec at odio congue, bibendum erat vel, tempor diam. Vestibulum ut est odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        upvotes : 0,
        downvotes : 0,
        
      });
    }
  }

}

