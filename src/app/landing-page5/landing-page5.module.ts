import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { IndexComponent } from './index/index.component';
import { RevolutionSlider5Module } from './components/revolution-slider5/revolution-slider5.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurClientComponent } from './components/our-client/our-client.component';
import { TipsTrickComponent } from './components/tips-trick/tips-trick.component';
import { OurCounterComponent } from './components/our-counter/our-counter.component';
import { FeaturesComponent } from './components/features/features.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { PartnerComponent } from './components/partner/partner.component';
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
  declarations: [IndexComponent, AboutUsComponent, OurClientComponent, TipsTrickComponent, OurCounterComponent, FeaturesComponent, SolutionsComponent, PartnerComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule,
    RevolutionSlider5Module
  ]
})
export class LandingPage5Module { }
