import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { IndexComponent } from './index/index.component';
import { RevolutionSlider8Module } from './components/revolution-slider8/revolution-slider8.module';
import { OurPartnerComponent } from './components/our-partner/our-partner.component';
import { UsageComponent } from './components/usage/usage.component';
import { FeaturesComponent } from './components/features/features.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
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
  declarations: [IndexComponent, OurPartnerComponent, UsageComponent, FeaturesComponent, OurServiceComponent, HowWeWorkComponent, PricingComponent, OurTestimonialComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RevolutionSlider8Module,
    XaminModule
  ]
})
export class LandingPage8Module { }
