import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specializing2',
  templateUrl: './specializing2.component.html'
})
export class Specializing2Component implements OnInit {

  List: any[] = [
    {
      title: 'Data Science with Python',
      subtitle: 'Many variations of passages fact that a reader will be distracted content of a page when looking at its layout.',
      href: '#'
    },
    {
      title: 'Machine Learning',
      subtitle: 'Contrary to popular established fact that a reader will be distracted by the readable content of a page when looking.',
      href: '#'
    },
    {
      title: 'Data Science Capstone',
      subtitle: 'Many variations of passages fact that a reader will be distracted content of a page when looking at its layout.',
      href: '#'
    }
  ]  
  constructor() { }

  ngOnInit() {
  }

}
