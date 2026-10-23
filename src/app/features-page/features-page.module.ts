import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { XaminModule } from '../xamin/xamin.module';
import { FeaturesPageComponent } from './features-page.component';

const routes: Routes = [
  { path: '', component: FeaturesPageComponent }
];

@NgModule({
  declarations: [FeaturesPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule
  ]
})
export class FeaturesPageModule { }
