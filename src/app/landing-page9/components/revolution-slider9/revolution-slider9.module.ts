import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevolutionSlider9Component } from './revolution-slider9.component';



@NgModule({
  declarations: [RevolutionSlider9Component],
  imports: [
    CommonModule
  ],
  exports: [
    RevolutionSlider9Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RevolutionSlider9Module { }
