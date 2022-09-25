import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { IndexComponent } from './index/index.component';
import { RevolutionSlider7Module } from './components/revolution-slider7/revolution-slider7.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AnalysisTypeComponent } from './components/analysis-type/analysis-type.component';
import { HowItWorkComponent } from './components/how-it-work/how-it-work.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FaqComponent } from './components/faq/faq.component';
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
  declarations: [IndexComponent, AboutUsComponent, AnalysisTypeComponent, HowItWorkComponent, BenefitsComponent, PricingComponent, FaqComponent, OurTestimonialComponent, OurBlogComponent, ContactFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RevolutionSlider7Module,
    XaminModule
  ]
})
export class LandingPage7Module { }
