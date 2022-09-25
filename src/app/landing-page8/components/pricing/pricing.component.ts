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
      title: "Starter",
      subtitle: 'Feedback System',
      price: "29$",
      plan_desc: "/Month",
      href: "#",
      services: [ "Live Chat and email" ,"Mobile SDK", "6000 + Intigrations" ,"Email, Chat and Social", 'Basic Help Center' ]
    },
    {
      title: "Growth",
      subtitle: 'Feedback System',
      price: "49$",
      plan_desc: "/Month",
      active: true,
      href: "#",
      services: [ "Mobile SDK" ,"6000 + Intigrations", "Live Chat and email" ,"Email, Chat and Social", 'Basic Help Center' ]
    },
    {
      title: "Enterprise",
      subtitle: 'Feedback System',
      price: "99$",
      plan_desc: "/Month",
      href: "#",
      services: [ "Live Chat and email" ,"Mobile SDK", "6000 + Intigrations" ,"Email, Chat and Social", 'Basic Help Center' ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
