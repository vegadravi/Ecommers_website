import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { element } from 'protractor';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
 firstNameUser:any;
 adminShopName:any;
 adminPannleNamr:any;
  constructor(private httpclient:HttpClient) { }

  ngOnInit() {
    let newObject = JSON.parse(window.localStorage.getItem("findObj"));
    this.firstNameUser = _.cloneDeep(newObject.firstName);
    let newAdminDetails = JSON.parse(window.localStorage.getItem("formdata"));
    this.adminShopName = _.cloneDeep(newAdminDetails.adminPannleName);
    // this.httpclient.get('https://r4x-info-default-rtdb.firebaseio.com/admin-register.json').subscribe((data)=> {
    //   console.log('R4x',data);
    //   const userData = _.map(Object.keys(data), (key: any) => {
    //     let obj = data[key];
    //     obj.id =  key;
    //     return obj;
    //   });
      
      // console.log('R4x get local data',newObject);
      // console.log('R4x get local data12',newObject.firstName);
      
      // this.firstNameUser = newObject.map(element =>{
      //   console.log('R4x element',element);
      // } )
      // let apiData = userData.map(element => { return { email:element.email,firstName:element.firstName }
      //   console.log('R4x element',element.email && element.firstName);
      // });
      // console.log('R4x userData',apiData);
      // const findeName =_.find(userData,(o:any) =>{
      //  return o
      // })
      // console.log('R4x3',findeName.firstName);
      // this.firstNameUser =_.cloneDeep(findeName.firstName)
      // console.log('R4x findName',this.firstNameUser);
  //});
}

}
