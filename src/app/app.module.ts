import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { XaminModule } from './xamin/xamin.module';
import { LandingPage1Module } from './landing-page1/landing-page1.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient, HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    XaminModule,
    LandingPage1Module,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
