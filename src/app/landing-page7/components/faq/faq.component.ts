import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html'
})
export class FaqComponent implements OnInit {

  List: any[] = [
    { title: 'How does your pricing work?' , desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, It is a long established.', active: true },
    { title: 'How does your pricing work?' , desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, It is a long established.' },
    { title: 'How does your pricing work?' , desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, It is a long established.' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
