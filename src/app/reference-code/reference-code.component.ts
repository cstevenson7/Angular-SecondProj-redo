import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
// needed to add the Input, Output and EventEmitter imports

@Component({
  selector: 'app-reference-code',
  templateUrl: './reference-code.component.html',
  styleUrls: ['./reference-code.component.scss']
})
export class ReferenceCodeComponent implements OnInit {

    //see app.component.html
  //an attribute - hello
  hello = "Welcome to the Weather App"

  // a method  - displayLanguage
  displayLanguage(){
      console.log("TypeScript in use for Angular")    
  }
  //for this to be used we have to create a template statement aka template event
  //on the app.component.html

  //SampleEvent Displayer - Event Binding or Event tracking
  displayEvent(event){
    //this brings back this in the console Angular Event [object HTMLButtonElement]
    //you would use this to track what the user is clicking on on the page
    console.log(`Angular Event ${event.target}`)
  }

  //Make dummy data will use the ngFor to loop through the object of food
  foods =[{
    'item1': 'burgers',
    'item2': 'hotdogs',
    'item3' : 'pizza'

  },{
    'item1': 'tacos',
    'item2': 'wine',
    'item3' : 'chocolate'
  }
]
  name = 'Joel';

  //Two way data binding example
  @Input() size:number | string;
  @Output() sizeChange = new EventEmitter<number>()

  decrement(){
    this.resize(-1);
  }

  increment(){
    this.resize(+1);
  }

  resize(delta:number){
    this.size = 20 + delta;
    this.sizeChange.emit(this.size)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
