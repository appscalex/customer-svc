import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { IndexComponent } from './index/index.component';
import { RevolutionSlider11Module } from './components/revolution-slider11/revolution-slider11.module';
import { ProcessComponent } from './components/process/process.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { OurProjectComponent } from './components/our-project/our-project.component';
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
  declarations: [IndexComponent, ProcessComponent, AboutUsComponent, OurServiceComponent, OurProjectComponent, OurTestimonialComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RevolutionSlider11Module,
    XaminModule
  ]
})
export class LandingPage11Module { }
