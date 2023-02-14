import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { element } from 'protractor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  sidebarExpanded = true;
  firstNameUser:any
  constructor(private httpclient:HttpClient,public router: Router) { }

  ngOnInit() {
    let newObject = JSON.parse(window.localStorage.getItem("findObj"));
    this.firstNameUser = _.cloneDeep(newObject.firstName);
  }
  adminhideloginregister(){
    let hiderouterpath:any = [
      '/login',
      '/register',
      '/home',
      '/admin-register',
      '/admin',
      '/customer-home',
      '/brand',
      '/contact',
      
    ]
    let routerPath = this.router.url;
    let hideNavigationbar =_.find(hiderouterpath, (data:any) => routerPath.includes(data))
    return hideNavigationbar;
  }
}
