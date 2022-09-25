import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-trick',
  templateUrl: './tips-trick.component.html'
})
export class TipsTrickComponent implements OnInit {

  titleSectionProp1: any = {
    class: 'text-left',
    subTitle: 'Get tips & tricks on how to skyrocket your sales.',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
  };

  titleSectionProp2: any = {
    class: 'text-left',
    subTitle: 'Get tips & tricks on how to skyrocket your sales.',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
  };

  List1: any[] = ['Boost SEO ranking', 'Social Sharing', 'Marketing', 'Retention', 'Visual Reviews', 'Reviews Generation'];
  List2: any[] = ['Boost SEO ranking', 'Social Sharing', 'Marketing', 'Retention', 'Visual Reviews', 'Reviews Generation'];
  constructor() { }

  ngOnInit() {
  }

}
