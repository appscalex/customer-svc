import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html'
})
export class SectionTwoComponent implements OnInit {

  checkList1: any[] = ['Enhanced Operational Efficiency', 'Frequent Deployment', 'Increased Collaboration', 'Faster Recovery Time'];
  checkList2: any[] = ['Better development velocity', 'Reduce Time for Action', 'Reduced IT Costs', 'More frequent software releases'];

  constructor() { }

  ngOnInit() {
  }

}
