import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userData:any
  constructor(private httpclient:HttpClient,private router:Router){
    let d = 'NDgWNkmszrRBWAQz_DX'
      this.httpclient.get('https://r4x-info-default-rtdb.firebaseio.com/admin-register.json').subscribe((data)=> {
        this.userData = _.map(Object.keys(data), (key: any) => {
          let obj = data[key];
          obj.id =  key;
          return obj;
        });
      });
}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.userData){
      return true 
    }
    this.router.navigateByUrl('/home')
  }
}
