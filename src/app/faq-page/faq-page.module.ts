import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { XaminModule } from '../xamin/xamin.module';
import { FaqPageComponent } from './faq-page.component';

const routes: Routes = [
  { path: '', component: FaqPageComponent }
];

@NgModule({
  declarations: [FaqPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule
  ]
})
export class FaqPageModule { }
