import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slideshow-image',
  templateUrl: './slideshow-image.component.html',
  styleUrls: ['./slideshow-image.component.css']
})
export class SlideshowImageComponent implements OnInit {

  constructor() { }

  @ViewChild('image1') image1? : any;
  @ViewChild('image2') image2? : any;
  showingImage1 : boolean = true;

  ngOnInit(): void {
  }

  nextSlide()
  {
    if (this.showingImage1)
    {
      if (this.image2)
      {
        this.image1.nativeElement.style.display = "none";
        this.image2.nativeElement.style.display = "block";
        this.showingImage1 = false;
      }
      
    }
    else
    {
      if (this.image1)
      {
        this.image2.nativeElement.style.display = "none";
        this.image1.nativeElement.style.display = "block";
        this.showingImage1 = true;
      }
    }
    
  }

}
