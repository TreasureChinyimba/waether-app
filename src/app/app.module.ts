// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule here

import { AppComponent } from './app.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service'; // Import WeatherService here

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    HttpClientModule
  ],
  providers: [WeatherService], // Provide WeatherService here
  bootstrap: [AppComponent]
})
export class AppModule { }
