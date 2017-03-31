import { Component } from '@angular/core';
//import {HomeComponent} from './home.component';
//import {AboutComponent} from './about.component';
//import {ContactUsComponent} from './contactus.component';

@Component({
  selector: 'my-app',
  template: `<h1>Routing App</h1>
              <nav>
              <a routerLink="/home" routerLinkActive="active">Home</a>
              <a routerLink="/about" routerLinkActive="active">About</a>
              <a routerLink="/contactus" routerLinkActive="active">ContactUs</a>
              </nav>
              <router-outlet></router-outlet>`
    
})
export class AppComponent  {
  
  }



