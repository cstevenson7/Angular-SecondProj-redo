import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})

// the WeatherHome Component class is implementing
//OnInit inherits from the WeatherHomeComponent??
export class WeatherHomeComponent implements OnInit {
    cityDescriptionDisplay;
  //Weather-home Reactive Form
  //one-offs  - 1 variable
  //this is one large form with multiple variables
   weatherForm = new FormGroup({
      cityName: new FormControl(''),
      cityDescription: new FormControl(''),
      cityTemp: new FormControl('')      
   })

  //form handler  for weatherForm that is goinng to service the data
  // that is coming from our form
  onSubmit(){
    //this brings back data form our object
    console.log(`${this.weatherForm.value.cityName}`)
  }

  constructor() { }

  // anything in here will fire(display or run) whenever this component is alive
  ngOnInit(): void {
  }

}
