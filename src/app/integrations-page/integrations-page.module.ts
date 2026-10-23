import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { XaminModule } from '../xamin/xamin.module';
import { IntegrationsPageComponent } from './integrations-page.component';

const routes: Routes = [
  { path: '', component: IntegrationsPageComponent }
];

@NgModule({
  declarations: [IntegrationsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule
  ]
})
export class IntegrationsPageModule { }
