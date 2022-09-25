import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})
export class VideoComponent implements OnInit {

  // @ts-ignore
  videoDetail: any = {
    img:"09.jpg",
    link:"http://www.youtube.com/watch?v=0O2aH4XLbto"
  };
  constructor() { }

  ngOnInit() {
  }

}
