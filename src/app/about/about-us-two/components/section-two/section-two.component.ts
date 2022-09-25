import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html'
})
export class SectionTwoComponent implements OnInit {

  checkList1: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
  checkList2: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
  
  constructor() { }

  ngOnInit() {
  }

}
