import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { AboutUsOneComponent } from './about-us-one/about-us-one.component';
import { HistoryComponent } from './history/history.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { AboutUsTwoComponent } from './about-us-two/about-us-two.component';
import { OurServicesComponent } from './about-us-two/components/our-services/our-services.component';
import { SectionTwoComponent } from './about-us-two/components/section-two/section-two.component';
import { SectionThreeComponent } from './about-us-two/components/section-three/section-three.component';
import { OurTestimonialComponent } from './about-us-two/components/our-testimonial/our-testimonial.component';
import { OurPartnerComponent } from './about-us-two/components/our-partner/our-partner.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsOneComponent,
  },
  {
    path: 'about-us-two',
    component: AboutUsTwoComponent
  }
];

@NgModule({
  declarations: [AboutUsOneComponent, HistoryComponent, OurTeamComponent, AboutUsTwoComponent, OurServicesComponent, SectionTwoComponent, SectionThreeComponent, OurTestimonialComponent, OurPartnerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule
  ]
})
export class AboutModule { }
