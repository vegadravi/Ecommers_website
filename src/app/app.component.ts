import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  constructor(public router: Router){
  
  }
  
  hideloginregister(){
    let hiderouterpath:any = [
      '/login',
      '/register',
      '/admin-home',
      '/home',
      '/admin-register',
      '/admin'
    ]
    let routerPath = this.router.url;
    let hideNavigationbar =_.find(hiderouterpath, (data:any) => routerPath.includes(data))
    return hideNavigationbar;
  }
  
}
