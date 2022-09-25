import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
})
export class OurTeamComponent implements OnInit {

  titleSectionProp: any = {
    class:'text-center',
    title: 'TEAM',
    subTitle: 'Management Team',
    description: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
