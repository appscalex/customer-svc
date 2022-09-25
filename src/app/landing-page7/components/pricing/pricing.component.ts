import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'PRICING',
    subTitle: 'Simple and Transparent Pricing',
  };

  List: any[] = [
    {
      title: "Free",
      subtitle: 'Feedback System',
      description: "It is a long established fact that a reader will be distracted",
      price: "0$",
      plan_desc: "/Month",
      href: "#",
      services: [ "Social Integration" ,"Push Notifications", "Relevant App Content" ,"Log-in via Social Media" ]
    },
    {
      title: "Team",
      subtitle: 'Feedback System',
      description: "It is a long established fact that a reader will be distracted",
      price: "49$",
      plan_desc: "/Month",
      active: true,
      href: "#",
      services: [ "Social Integration" ,"Push Notifications", "Relevant App Content" ,"Log-in via Social Media" ]
    },
    {
      title: "Enterprise",
      subtitle: 'Feedback System',
      description: "It is a long established fact that a reader will be distracted",
      price: "99$",
      plan_desc: "/Month",
      href: "#",
      services: [ "Social Integration" ,"Push Notifications", "Relevant App Content" ,"Log-in via Social Media" ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
