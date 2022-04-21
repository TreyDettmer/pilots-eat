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

  sortReviews()
  {
    this.reviewPosts.sort((a,b) => (a.upvotes/((a.downvotes == 0) ? 1 : a.downvotes) >  b.upvotes/((b.downvotes == 0) ? 1 : b.downvotes)) ? -1 : 1);
  }

  initializeReviews()
  {

    this.reviewPosts.push({
      title : "Mint Yerba Mate",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      store: "Macks",
      description : "Minty!",
      upvotes : 20,
      downvotes : 3,
      img_paths : ["./assets/img/review-images/yerba_mate.jpg"]
    });

    this.reviewPosts.push({
      title : "Chobani Flip",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      store: "Fred Meyer",
      description : "Current sale is 10 for $10!",
      upvotes : 5,
      downvotes : 1,
      img_paths : ["./assets/img/review-images/chobani_flip.jpeg"]
    });

    this.reviewPosts.push({
      title : "Dole Sesame Asian Salad Kit",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      store: "Fred Meyer",
      description : "A perfect side to a pasta dinner!",
      upvotes : 3,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/salad_kit_sesame_asian.jpeg"]
    });

    this.reviewPosts.push({
      title : "Weighted Plush Dino",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      store: "Target",
      description : "A great companion for lounging and watching TV!",
      upvotes : 0,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/weighted_plush_dino.jfif"]
    });

    this.reviewPosts.push({
      title : "Granola Clusters",
      author : "dettmer23@up.edu",
      date : "4/21/2022",
      store: "Fred Meyer",
      description : "Goes great with greek yogurt!",
      upvotes : 4,
      downvotes : 0,
      img_paths : ["./assets/img/review-images/granola_clusters.jpg"]
    });
  
    this.sortReviews();
  }

}

