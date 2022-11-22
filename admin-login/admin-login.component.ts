import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;
//   public crudApi: RegisterService,
  constructor(private formBuilder: FormBuilder,private httpclient:HttpClient,private router:Router, private activerouter: ActivatedRoute) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      let d = 'NDgWNkmszrRBWAQz_DX'
      this.httpclient.get('https://r4x-info-default-rtdb.firebaseio.com/admin-register.json').subscribe((data)=> {
        const userData = _.map(Object.keys(data), (key: any) => {
          let obj = data[key];
          obj.id =  key;
          return obj;
        });
        console.log(userData);
        const findObj = _.find(userData, (o: any)=> o.email === this.registerForm.value.email && o.password === this.registerForm.value.password);
        console.log(findObj);
        if (findObj) {
          this.router.navigate(['../','admin-home'],{relativeTo:this.activerouter})
        } else {
          alert("Error")
        }
      },
      (_error) =>{
        console.log('Error');
      }
      );
      // let Logindata = this.httpclient.get('https://r4x-info-default-rtdb.firebaseio.com/login.json');
      // console.log('r4x => Login data', Logindata);
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
