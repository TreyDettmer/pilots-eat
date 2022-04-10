import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FoodReviewsComponent } from './food-reviews/food-reviews.component';
import { StealsAndDealsComponent } from './steals-and-deals/steals-and-deals.component';
import { OffCampusComponent } from './off-campus/off-campus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewPostComponent } from './review-post/review-post.component';
import { SubmissionFormComponent } from './submission-form/submission-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SlideshowImageComponent } from './slideshow-image/slideshow-image.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodReviewsComponent,
    StealsAndDealsComponent,
    OffCampusComponent,
    NavbarComponent,
    ReviewPostComponent,
    SubmissionFormComponent,
    SlideshowImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
