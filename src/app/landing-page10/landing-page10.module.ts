import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { IndexComponent } from './index/index.component';
import { RevolutionSlider10Module } from './components/revolution-slider10/revolution-slider10.module';
import { OurCounterComponent } from './components/our-counter/our-counter.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { VisualsComponent } from './components/visuals/visuals.component';
import { TipsTricksComponent } from './components/tips-tricks/tips-tricks.component';
import { DataDazzleComponent } from './components/data-dazzle/data-dazzle.component';
import { BrandsComponent } from './components/brands/brands.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { RequestDemoComponent } from './components/request-demo/request-demo.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
    ]
  }
];

@NgModule({
  declarations: [IndexComponent, OurCounterComponent, AnalyticsComponent, OurServicesComponent, VisualsComponent, TipsTricksComponent, DataDazzleComponent, BrandsComponent, OurBlogComponent, RequestDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RevolutionSlider10Module,
    XaminModule
  ]
})
export class LandingPage10Module { }
