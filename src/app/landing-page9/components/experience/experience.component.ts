import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'PROCESS',
    subTitle: 'Experience'
  };

  List: any[] = [
    {
      align: 'timeline-article content-right-container',
      title:'Data Scientist',
      subtitle:'Keeping Group',
      year: '2007-2010',
      address: 'Paris, france',
      contact: [
        'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
    {
      align: 'content-left-container',
      title:'Data Intelligence',
      subtitle:'Keeping Group',
      year: '2006-2007',
      address: 'Paris, france',
      contact: [
          'Learn a group of 5 people',
          'Passages of Lorem Ipsum available.',
          'Easy to Customize List passages of available.'
      ]
    },
    {
      align: 'content-right-container',
      title:'Data Analytics',
      subtitle:'Keeping Group',
      year: '2006-2007',
      address: 'Paris, france',
      contact: [
        'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
    {
      align: 'content-left-container',
      title:'Big Data Services',
      subtitle:'Keeping Group',
      year: '2006-2007',
      address: 'Paris, france',
      contact: [
        'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
