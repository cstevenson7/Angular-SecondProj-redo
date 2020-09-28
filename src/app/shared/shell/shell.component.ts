import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {  Observable } from 'rxjs';
import { map,shareReplay } from 'rxjs/operators';

@Component({
  // EACH COMPOMENT HAS A SELECTOR can use this selector inside our main html (app.compment .html)
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
//Dependency Injection - like a turkey baster- taking the juices sticking it inside the turkey 
//and injecting all  -  we are taking the values from our module and injecting all the values from a seperate module
//from the shared.module.ts to the main module - app.module.ts

//https://rxjs-playground.github.io/#/ good place to try things out
//An observable is like a promise, but intead of .then we use .next  to look at the next thing
//in the object and when we get to the end we subscribe to the data. Think of getting a newspaper,
//if you stop subscribing you don't get it anymore lazy pusj=hed if data , lazy because it
//will only give you data if you ask for it We are creating our own observalve for the handset

export class ShellComponent implements OnInit {

  //create our own observable instead of doing this in css media query
  constructor(private BreakpointObserver: BreakpointObserver) { }
  // a boolean variable either yes we have a handset or no we don't
  //the observable is looking for a media query , look at the css
                                                      //could also use tablet here lots of options
  isHandset$:Observable<boolean> = this.BreakpointObserver.observe([Breakpoints.Handset])
  //the .pipe allows you to look thru the data until you find what you are looking for
  .pipe(
    map(result => result.matches),shareReplay() // this will give us the boolean, and ahre it to the html
  )
  ngOnInit(): void {
  }

}
