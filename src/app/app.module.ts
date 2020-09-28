import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherHomeComponent } from './weather-home/weather-home.component';
import { ReferenceCodeComponent } from './reference-code/reference-code.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Adding Dependency Injection import for the shared module- this means the main module
//now has access to everything stored in the shared module 
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    ReferenceCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
