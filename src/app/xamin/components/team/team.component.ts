import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
})
export class TeamComponent implements OnInit {

  List: any[] = [
    {
      img:  "2.jpg",
      name: "Mark McManus",
      position: "COO",

    },
    {
      img:  "3.jpg",
      name: "Jack White",
      position: "CEO",

    },
    {
      img:  "4.jpg",
      name: "Handry White",
      position: "CTO",

    },
    {
      img:  "5.jpg",
      name: "Jack McManus",
      position: "Project Manager",

    },
    {
      img:  "1.jpg",
      name: "Marcash Dane",
      position: "Project Manager",

    }
    ];
  constructor() { }

  ngOnInit() {
  }

}
