import { Component, OnInit } from '@angular/core';
import { ReviewPostComponent } from '../review-post/review-post.component';
import { ReviewPost } from '../models/review-post';

@Component({
  selector: 'app-off-campus',
  templateUrl: './off-campus.component.html',
  styleUrls: ['./off-campus.component.css']
})
export class OffCampusComponent implements OnInit {

  constructor() { }

  reviewPosts:ReviewPost[] = [];
  ngOnInit(): void {
    this.initializeReviews();
  }

  initializeReviews()
  {
    //hard coded reviews
    this.reviewPosts.push({
      title : "Fire On The Mountain",
      author : "dettmer23@up.edu",
      date : "4/18/2022",
      address: "1708 E Burnside St. Portland, OR 97214",
      description : "Best salad ever!",
      upvotes : 10,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/fire_on_the_mountain_salad.jpg"]
    });

    this.reviewPosts.push({
      title : "Cathedral Coffee",
      author : "dettmer23@up.edu",
      date : "4/18/2022",
      address: "7530 N Willamette Blvd. Portland, OR 97203",
      description : "Great coffee shop atmosphere with friendly workers and unique Portland decor!",
      upvotes : 11,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/cathedral_coffee_coffee.jpg"]
    });

    this.reviewPosts.push({
      title : "Dehomis",
      author : "dettmer23@up.edu",
      date : "4/18/2022",
      address: "7316 N Lombard St, Portland, OR 97203",
      description : "Gyoza!",
      upvotes : 12,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/dehomis.jpg","./assets/img/review-images/dehomis2.jpg"]
    });

    this.reviewPosts.push({
      title : "Pastini",
      author : "dettmer23@up.edu",
      date : "4/18/2022",
      address: "1426 NE Broadway, Portland, OR 97232",
      description : "Pasta!",
      upvotes : 10,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/pastini_pasta.jpg"]
    });

    this.reviewPosts.push({
      title : "John Street Cafe",
      author : "dettmer23@up.edu",
      date : "4/18/2022",
      address: "8338 N Lombard St, Portland, OR 97203",
      description : "French Toast!",
      upvotes : 10,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/john_street_cafe_toast.jpg"]
    });

  }
  
}


