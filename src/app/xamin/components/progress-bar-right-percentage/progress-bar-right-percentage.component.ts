import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar-right-percentage',
  templateUrl: './progress-bar-right-percentage.component.html'
})
export class ProgressBarRightPercentageComponent implements OnInit {

  @Input() progressBar1: string;
  @Input() progressBarDetail: any[];

  constructor() { }

  ngOnInit() {
  }

}
