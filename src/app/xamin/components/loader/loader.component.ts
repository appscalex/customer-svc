import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {

  isLoaded: boolean = false;
  isFading: boolean = false;

  constructor() { }

  ngOnInit() {
    // Spinner loading time should be minimum 2 seconds (2000ms)
    setTimeout(() => {
      this.isFading = true; // start smooth fade-out at 2.0s
      setTimeout(() => {
        this.isLoaded = true; // remove permanently from DOM at 2.4s
      }, 400);
    }, 2000);
  }

}
