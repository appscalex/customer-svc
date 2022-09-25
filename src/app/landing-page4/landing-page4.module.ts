import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { IndexComponent } from './index/index.component';
import { RevolutionSlider4Module } from './components/revolution-slider4/revolution-slider4.module';
import { OurPartnerComponent } from './components/our-partner/our-partner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurCounterComponent } from './components/our-counter/our-counter.component';
import { AboutUs1Component } from './components/about-us1/about-us1.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { OurClientComponent } from './components/our-client/our-client.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
    ]
  }
];

@NgModule({
  declarations: [IndexComponent, OurPartnerComponent, AboutUsComponent, OurServicesComponent, OurCounterComponent, AboutUs1Component, OurTestimonialComponent, OurClientComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule,
    RevolutionSlider4Module
  ]
})
export class LandingPage4Module { }
