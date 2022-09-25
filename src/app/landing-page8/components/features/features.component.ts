import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: '',
    subTitle: 'Popular features that your business needs',
    description: 'Bleeding about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!'
  };

  List1: any[] = [
    {
      class: 'flaticon flaticon-verification',
      title: 'Behavioral-Analytics'
    },
    {
      class: 'flaticon flaticon-accounting',
      title: 'Stock Management'
    },
    {
      class: 'flaticon flaticon-idea',
      title: 'Receivable & Payables'
    },
    {
      class: 'flaticon flaticon-planning-1',
      title: 'Manage Bills & Expenses'
    },
    {
      class: 'flaticon flaticon-transfer',
      title: 'SMS Reminders'
    }
  ];

  List2: any[] =[
    {
      class: 'flaticon flaticon-support',
      title: 'Auto Sync & Backup'
    },
    {
      class: 'flaticon flaticon-plan',
      title: 'Ready & Return Filing'
    },
    {
      class: 'flaticon flaticon-research',
      title: '60+ detailed reports'
    },
    {
      class: 'flaticon flaticon-research',
      title: 'Product Details'
    },
    {
      class: 'flaticon flaticon-customer-1',
      title: 'Customized Rates'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
