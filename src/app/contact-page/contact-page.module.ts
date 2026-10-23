import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { XaminModule } from '../xamin/xamin.module';
import { ContactPageComponent } from './contact-page.component';

const routes: Routes = [
  { path: '', component: ContactPageComponent }
];

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    XaminModule
  ]
})
export class ContactPageModule { }
