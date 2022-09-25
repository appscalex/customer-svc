import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { IndexComponent } from './index/index.component';
import { RevolutionSlider9Module } from './components/revolution-slider9/revolution-slider9.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SpecializingComponent } from './components/specializing/specializing.component';
import { Specializing2Component } from './components/specializing2/specializing2.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
    ]
  }
];

@NgModule({
  declarations: [IndexComponent, AboutUsComponent, SpecializingComponent, Specializing2Component, EducationComponent, ExperienceComponent, SkillsComponent, CaseStudiesComponent, OurTestimonialComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RevolutionSlider9Module,
    XaminModule
  ]
})
export class LandingPage9Module { }
