import { Component, OnInit } from '@angular/core';
import { ReviewPostComponent } from '../review-post/review-post.component';
import { ReviewPost } from '../models/review-post';

@Component({
  selector: 'app-food-reviews',
  templateUrl: './food-reviews.component.html',
  styleUrls: ['./food-reviews.component.css']
})
export class FoodReviewsComponent implements OnInit {

  constructor() { }

  reviewPosts:ReviewPost[] = [];
  ngOnInit(): void {
    this.initializeReviews();
  }

  sortReviews()
  {
    this.reviewPosts.sort((a,b) => (a.upvotes/((a.downvotes == 0) ? 1 : a.downvotes) >  b.upvotes/((b.downvotes == 0) ? 1 : b.downvotes)) ? -1 : 1);
  }

  initializeReviews()
  {
    //hard coded reviews
    this.reviewPosts.push({
      title : "Grilled Fish Tostadas",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      description : "Very good!",
      upvotes : 10,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/grilled_fish_tostadas.JPG"]
    });

    this.reviewPosts.push({
      title : "Chorizo Breakfast Plate",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      description : "I would rate this 7/10",
      upvotes : 11,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/chorizo_breakfast_plate.JPG"]
    });

    this.reviewPosts.push({
      title : "Shepard's Pie",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      description : "Very hearty and delicious!",
      upvotes : 12,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/shepards_pie.JPG"]
    });

    this.reviewPosts.push({
      title : "Turkey Chorizo Chilaquiles",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      description : "I would rate this 7/10",
      upvotes : 10,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/turkey_chorizo_chilaquiles.JPG"]
    });

    this.reviewPosts.push({
      title : "Fish and Chips",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      description : "Hit the spot! 9/10 rating",
      upvotes : 10,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/fish_and_chips.JPG"]
    });

    this.sortReviews();
  }

}
