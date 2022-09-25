import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevolutionSlider10Component } from './revolution-slider10.component';



@NgModule({
  declarations: [RevolutionSlider10Component],
  imports: [
    CommonModule
  ],
  exports: [
    RevolutionSlider10Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RevolutionSlider10Module { }
