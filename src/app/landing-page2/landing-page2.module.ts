import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {RouterModule, Routes} from "@angular/router";
import {XaminModule} from "../xamin/xamin.module";
import { RevolutionSlider2Module } from './components/revolution-slider2/revolution-slider2.module';
import { SectionVerticalOneComponent } from './components/section-vertical-one/section-vertical-one.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUs2Component } from './components/about-us2/about-us2.component';
import { ServiceComponent } from './components/service/service.component';
import { VideoComponent } from './components/video/video.component';
import { TrustedCustomerComponent } from './components/trusted-customer/trusted-customer.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { BlogComponent } from './components/blog/blog.component';
import { OurPartnerComponent } from './components/our-partner/our-partner.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
    ]
  }
];

@NgModule({
    declarations: [IndexComponent, SectionVerticalOneComponent, AboutUsComponent, AboutUs2Component, ServiceComponent, VideoComponent, TrustedCustomerComponent, OurTestimonialComponent, BlogComponent, OurPartnerComponent],
    exports: [
        BlogComponent,
        OurPartnerComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        XaminModule,
        RevolutionSlider2Module

    ]
})
export class LandingPage2Module { }
