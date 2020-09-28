import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//putting these Material Design imports in here so they can be used eveywhere 
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule, MatSidenavContent} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

//This is from the Component Developer Kit (cdk) helps with 
//breakpoints and custom styling of screens - wide screen - tablet - phone 
import { LayoutModule } from '@angular/cdk/layout';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';

//Joel's shortcut is to put all the modules in an array ans then pass the array
const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,  
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  LayoutModule,
  CommonModule,
  RouterModule
]

//putting these mudules inside the shared module - adds all the info that angular material needs to be used
// accross th entirety of our project and to add tell the main app where to find it.

const components= [
  ShellComponent
]
 
//COMPONENTS go in Declarations
//MODULES go in imports
@NgModule({
  declarations: [...components],
  imports: [
    // Joel also adds the Common Module to Module list    
    //CommonModule
    //using the spread operator -- only works for arrays
    ...modules    
  ],
  //inorder to use these modules and components you need to export them
  exports:[
    ...modules,
    ...components
  ]
  
})
export class SharedModule { }
