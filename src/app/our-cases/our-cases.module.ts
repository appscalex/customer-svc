import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { PortfolioTwoComponent } from './portfolio-two/portfolio-two.component';
import {XaminModule} from "../xamin/xamin.module";
import { PortfolioThreeComponent } from './portfolio-three/portfolio-three.component';
import { PortfolioFourComponent } from './portfolio-four/portfolio-four.component';
import { PortfolioFiveComponent } from './portfolio-five/portfolio-five.component';
import { NoSpaceComponent } from './no-space/no-space.component';
import { NoSpaceMasonryComponent } from './no-space-masonry/no-space-masonry.component';
import { PortfolioDetails } from './portfolio-details/portfolio-details.component';
import { MasonryTwoComponent } from './masonry-two/masonry-two.component';
import { MasonryThreeComponent } from './masonry-three/masonry-three.component';

const routes: Routes = [
  {
    path: 'portfolio-2-columns',
    component: PortfolioTwoComponent,
  },
  {
    path: 'portfolio-3-columns',
    component: PortfolioThreeComponent,
  },
  {
    path: 'portfolio-4-columns',
    component: PortfolioFourComponent,
  },
  {
    path: 'portfolio-5-columns',
    component: PortfolioFiveComponent,
  },
  {
    path: 'portfolio-no-space',
    component: NoSpaceComponent,
  },
  {
    path: 'masonry-3-portfolio',
    component: MasonryThreeComponent,
  },
  {
    path: 'masonry-2-portfolio',
    component: MasonryTwoComponent,
  },
  {
    path: 'masonry-no-space',
    component: NoSpaceMasonryComponent,
  },
  {
    path: 'portfolio-details',
    component: PortfolioDetails,
  },
  ]

@NgModule({
  declarations: [PortfolioTwoComponent, PortfolioThreeComponent, PortfolioFourComponent, PortfolioFiveComponent, NoSpaceComponent, NoSpaceMasonryComponent,PortfolioDetails, MasonryTwoComponent, MasonryThreeComponent],
  imports: [
    CommonModule,
    XaminModule,
    RouterModule.forChild(routes),

  ]
})
export class OurCasesModule { }
