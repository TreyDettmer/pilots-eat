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
      title : "Meal 1",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      description : "Best salad ever!",
      upvotes : 10,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/fire_on_the_mountain_salad.jpg"]
    });

    this.reviewPosts.push({
      title : "Meal 2",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      description : "Great coffee shop atmosphere with friendly workers and unique Portland decor!",
      upvotes : 11,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/cathedral_coffee_coffee.jpg"]
    });

    this.reviewPosts.push({
      title : "Meal 3",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      description : "Gyoza!",
      upvotes : 12,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/dehomis.jpg","./assets/img/review-images/dehomis2.jpg"]
    });

    this.reviewPosts.push({
      title : "Meal 4",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      description : "Pasta!",
      upvotes : 10,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/pastini_pasta.jpg"]
    });

    this.reviewPosts.push({
      title : "Meal 5",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      description : "French Toast!",
      upvotes : 10,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/john_street_cafe_toast.jpg"]
    });

    this.sortReviews();
  }

}
