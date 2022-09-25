import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { CardSectionComponent } from './components/card-section/card-section.component';
import { ServiceComponent } from './components/service/service.component';
import { ProcessComponent } from './components/process/process.component';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { ClientCounterComponent } from './components/client-counter/client-counter.component';
import { OurTestimonialsComponent } from './components/our-testimonials/our-testimonials.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { OurClientComponent } from './components/our-client/our-client.component';
import { OurPartnerComponent } from './components/our-partner/our-partner.component';
import { RevolutionSlider3Module } from './components/revolution-slider3/revolution-slider3.module';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
    ]
  }
];

@NgModule({
  declarations: [WhyChooseUsComponent, CardSectionComponent, ServiceComponent, ProcessComponent, IndexComponent, AboutUsComponent, NavTabsComponent, ClientCounterComponent, OurTestimonialsComponent, OurBlogComponent, OurClientComponent, OurPartnerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule,
    RevolutionSlider3Module,
  ]
})
export class LandingPage3Module { }
