import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
})
export class ServiceComponent implements OnInit {

  list: any[] = [
    {
      value: 820,
      icon: 'fa fa-plus',
      text: 'Data Analytics'
    },
    {
      value: 150,
      icon: 'fa fa-plus',
      text: 'Data Management'
    },
    {
      value: 30,
      icon: 'fa fa-plus',
      text: 'Managed Analytics'
    },
    {
      value: 100,
      icon: 'fa fa-plus',
      text: 'Big Data'
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
