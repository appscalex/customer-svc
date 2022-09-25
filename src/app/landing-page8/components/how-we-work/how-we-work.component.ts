import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html'
})
export class HowWeWorkComponent implements OnInit {

titleSectionProp: any = {
    class: 'text-center',
    title: 'HOW WE WORK',
    subTitle: 'How Does Xamin Works'
  };


  List: any[] = [
    {
      title: 'User Behavior',
      subtitle: 'There are established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      image: './assets/images/services/07.png'
    },
    {
      title: 'Apply Algorithm',
      subtitle: 'Contrary to popular fact that a reader will be distracted by the readable when looking at its layout content of a page.',
      image: './assets/images/services/08.png'
    },
    {
      title: 'Apply Algoritham',
      subtitle: 'Many variations established fact reader will be distracted by the readable content of a page when at its layout looking.',
      image: './assets/images/services/09.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
