import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    subtitle: 'Education'
  }
  
  List: any[] = [
    {
      title:'B.S Computer Science',
      subtitle:'University of Altoona',
      year: '2007-2010',
      grade: 'GPA',
      gpa: '4.50/5.00',
      image: './assets/images/fancybox/9-1.png'
    },
    {
      title:'M.S Computer Application.',
      subtitle:'University of Data Science Altoona',
      year: '2006-2007',
      grade: 'GPA',
      gpa: '3.50/4.400',
      image: './assets/images/fancybox/9-1.png'
    },
    {
      title:'BSc in Mathematics and Statistics',
      subtitle:'University of Data Altoona',
      year: '2006-2007',
      grade: 'GPA',
      gpa: '3.50/4.400',
      image: './assets/images/fancybox/9-1.png'
    },
    {
      title:'B.S Computer Science',
      subtitle:'University of Altoona',
      year: '2007-2010',
      grade: 'GPA',
      gpa: '4.50/5.00',
      image: './assets/images/fancybox/9-1.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
