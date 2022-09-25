import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
})
export class CardSectionComponent implements OnInit {

  List : any[] = [
    {
      img:"01.png",
      title:"Perfect Event",
      sub_title:"big data through robust that solutions the power."
    },
    {
      img:"02.png",
      title:"Organization",
      sub_title:"big data through robust that solutions the power."
    },
    {
      img:"03.png",
      title:"Innovation",
      sub_title:"big data through robust that solutions the power."
    },
    {
      img:"04.png",
      title:"Perfect Event",
      sub_title:"big data through robust that solutions the power."
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
