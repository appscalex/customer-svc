import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-testimonial',
  templateUrl: './our-testimonial.component.html'
})
export class OurTestimonialComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Testimonials',
    subTitle: '100+ Companies are Using Xamin',
  };
  
  navigation: boolean = true;

  List : any[] = [
    {
      img:"1.jpg",
      name:"Jack White",
      designation:"CEO",
      desc:"Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing elit, sed dolore magna aliqua hampden. Latin professor at Hampden-Sydney consectetur."
    },
    {
      img:"2.jpg",
      name:"Walhan Bobe",
      designation:"Business Advisor",
      desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed ut perspiciatis error. Perspiciatis unde omnis iste."
    },
    {
      img:"3.jpg",
      name:"Mark McManus",
      designation:"COO",
      desc:"“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.”"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
