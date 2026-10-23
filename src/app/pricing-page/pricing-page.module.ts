import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { XaminModule } from '../xamin/xamin.module';
import { PricingPageComponent } from './pricing-page.component';

const routes: Routes = [
  { path: '', component: PricingPageComponent }
];

@NgModule({
  declarations: [PricingPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule
  ]
})
export class PricingPageModule { }
