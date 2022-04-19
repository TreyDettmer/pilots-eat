import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isExpanded : boolean = false;
  @Input() activeNavLink:string = "home";
  ngOnInit(): void {
  }

  

}
