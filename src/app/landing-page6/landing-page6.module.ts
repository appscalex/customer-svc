import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { IndexComponent } from './index/index.component';
import { RevolutionSlider6Module } from './components/revolution-slider6/revolution-slider6.module';
import { CountersComponent } from './components/counters/counters.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { FeaturesComponent } from './components/features/features.component';
import { OurServices2Component } from './components/our-services2/our-services2.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { PartnerComponent } from './components/partner/partner.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
    ]
  }
];

@NgModule({
  declarations: [
    IndexComponent,
    CountersComponent,
    AboutUsComponent,
    OurServiceComponent,
    FeaturesComponent,
    OurServices2Component,
    CaseStudiesComponent,
    PartnerComponent,
    OurTestimonialComponent,
    OurBlogComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule,
    RevolutionSlider6Module
  ],
  exports: []
})
export class LandingPage6Module { }
