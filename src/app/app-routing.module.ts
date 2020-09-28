import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//this is also automatially added re VSC and angular
import { ReferenceCodeComponent } from './reference-code/reference-code.component';
import { WeatherHomeComponent } from './weather-home/weather-home.component';

//need to create routes from the main page to the home (todo) and reference page
//a constant called routes of a type Routes(hover over to see), it will be an array
//of objects with a direction aka path and our component with which our path will be will going into
//This is aleady set up for us, lin2 is connected to line 8

const routes: Routes = [
{
  //url paths
  path: 'reference', component: ReferenceCodeComponent
},
{
  path:'home',  component: WeatherHomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
