import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevolutionSlider11Component } from './revolution-slider11.component';



@NgModule({
  declarations: [RevolutionSlider11Component],
  imports: [
    CommonModule
  ],
  exports: [
    RevolutionSlider11Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RevolutionSlider11Module { }
