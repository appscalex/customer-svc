import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    subTitle: 'Skills'
  };

  progressBar1: boolean = true;
  List1: any[] = [
    {
      title: 'Data Science Capstone',
      percentage: '60'
    },
    {
      title: 'Python',
      percentage: '70'
    },
    {
      title: 'Machine Learning',
      percentage: '80'
    }
  ];

  progressBar2: boolean = true;
  List2: any[] = [
    {
      title: 'SQL',
      percentage: '80'
    },
    {
      title: 'Tableau',
      percentage: '65'
    },
    {
      title: 'java',
      percentage: '70'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
