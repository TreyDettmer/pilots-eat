import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodReviewsComponent } from './food-reviews/food-reviews.component';
import { HomeComponent } from './home/home.component';     // Add your component here
import { OffCampusComponent } from './off-campus/off-campus.component';
import { StealsAndDealsComponent } from './steals-and-deals/steals-and-deals.component';


//This is my case 
const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'food-reviews', component: FoodReviewsComponent},
    {path: 'steals-and-deals', component: StealsAndDealsComponent},
    {path: 'off-campus', component: OffCampusComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }