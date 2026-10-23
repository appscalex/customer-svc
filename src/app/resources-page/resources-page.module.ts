import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { XaminModule } from '../xamin/xamin.module';
import { ResourcesPageComponent } from './resources-page.component';

const routes: Routes = [
  { path: '', component: ResourcesPageComponent }
];

@NgModule({
  declarations: [ResourcesPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule
  ]
})
export class ResourcesPageModule { }
