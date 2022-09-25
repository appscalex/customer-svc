import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { XaminModule } from './xamin/xamin.module';
import { LandingPage1Module } from './landing-page1/landing-page1.module';
import { LandingPage2Module } from './landing-page2/landing-page2.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    XaminModule,
    LandingPage1Module,
    LandingPage2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
