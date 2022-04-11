import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor() { }

  devMode : boolean = isDevMode();
  ngOnInit(): void {
  }

}
