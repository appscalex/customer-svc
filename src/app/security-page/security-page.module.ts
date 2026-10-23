import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { XaminModule } from '../xamin/xamin.module';
import { SecurityPageComponent } from './security-page.component';

const routes: Routes = [
  { path: '', component: SecurityPageComponent }
];

@NgModule({
  declarations: [SecurityPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule
  ]
})
export class SecurityPageModule { }
