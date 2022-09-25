import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent implements OnInit {

  @Input() List:  any[];

  @Input() navigation: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
