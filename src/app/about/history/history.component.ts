import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'OUR HISTORY',
    subTitle: 'Xamin Company History',
    description: ''
  };

  List: any[] = [
    {
        class:  'bg-gray',
        img :   './assets/images/about-us/01.png',
        year :  '2012 - 2013',
        desc :  'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.'
    },
    {
        class:  'border',
        img :   './assets/images/about-us/07.png',
        year :  '2013 - 2014',
        desc :  'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.'
    },
    {
        class:  'bg-gray',
        img :   './assets/images/about-us/03.png',
        year :  '2014 - 2015',
        desc :  'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.'
    },
    {
        class:  'border',
        img :   './assets/images/about-us/02.png',
        year :  '2015 - 2016',
        desc :  'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
