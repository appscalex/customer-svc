import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis-type',
  templateUrl: './analysis-type.component.html'
})
export class AnalysisTypeComponent implements OnInit {

  List: any [] = [
    {
      title: 'Fine-grained Analysis',
      desc: 'All types of consulting service It is a long established fact .',
      image: './assets/images/services/03.png',
      checklist: ['Positive','Neutral','Negative']
    },
    {
      title: 'Emotion detection',
      desc: 'All types of consulting service It is a long established fact .',
      image: './assets/images/services/15.png',
      checklist: ['Positive','Neutral','Negative']
    },
    {
      title: 'Multilingual analysis',
      desc: 'All types of consulting service It is a long established fact .',
      image: './assets/images/services/03.png',
      checklist: ['Positive','Neutral','Negative']
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
