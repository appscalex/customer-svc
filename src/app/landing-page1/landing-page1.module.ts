import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { XaminModule } from '../xamin/xamin.module';
import { RevolutionSlider1Module } from './components/revolution-slider1/revolution-slider1.module';
import { SectionVerticalOneComponent } from './components/section-vertical-one/section-vertical-one.component';
import { SectionVerticalTwoComponent } from './components/section-vertical-two/section-vertical-two.component';
import { SectionThreeComponent } from './components/section-three/section-three.component';
import { SectionFiveCustomerComponent } from './components/section-five-customer/section-five-customer.component';
import { SectionFourServicesComponent } from './components/section-four-services/section-four-services.component';
import { SectionSixProjectsComponent } from './components/section-six-projects/section-six-projects.component';
import { SectionSevenServiceComponent } from './components/section-seven-service/section-seven-service.component';
import { SectionEightAwardComponent } from './components/section-eight-award/section-eight-award.component';
import { SectionNineBlogComponent } from './components/section-nine-blog/section-nine-blog.component';

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
    SectionVerticalOneComponent,
    SectionVerticalTwoComponent,
    SectionThreeComponent,
    SectionFiveCustomerComponent,
    SectionFourServicesComponent,
    SectionSixProjectsComponent,
    SectionSevenServiceComponent,
    SectionEightAwardComponent,
    SectionNineBlogComponent
  ],
  exports: [
    SectionVerticalOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule,
    RevolutionSlider1Module
  ]
})
export class LandingPage1Module { }
