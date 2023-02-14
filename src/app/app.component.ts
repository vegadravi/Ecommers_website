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
  routerWithNav:boolean;
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
  adminhideloginregister(){
    let hiderouterpath:any = [
      '/admin-home',
      '/admin-item',
      '/admin-view-order',
      '/admin-setting'
    ]
    let routerPath = this.router.url;
    let adminhideNavigationbar =_.find(hiderouterpath, (data:any) => routerPath.includes(data))
    return adminhideNavigationbar;
  }
  adminhideloginregister1(){
    let hiderouterpath:any = [
      '/register',
      '/contact',
      '/login-type',
      '/admin-home',
      '/admin-item',
      '/admin-view-order',
      '/admin-setting'
    ]
    let routerPath = this.router.url;
    let adminhideNavigationbar1 =_.find(hiderouterpath, (data:any) => routerPath.includes(data))
    return adminhideNavigationbar1;
  }
}
