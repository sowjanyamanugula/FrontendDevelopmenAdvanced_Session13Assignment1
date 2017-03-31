import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {ContactUsComponent} from './contactus.component';

@NgModule({
  imports:      [ BrowserModule ,
                   RouterModule.forRoot([
                     {path:'home',component:HomeComponent},
                     {path:'about',component:AboutComponent},
                      {path:'contactus',component:ContactUsComponent}
                   ])],
  declarations: [ AppComponent,HomeComponent,AboutComponent,ContactUsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
