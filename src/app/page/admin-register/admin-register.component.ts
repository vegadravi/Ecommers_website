import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { MustMatch } from '../../validator/match.validator';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  submitted = false;
//   public crudApi: RegisterService,
  constructor(private formBuilder: FormBuilder,private httpclient:HttpClient,private router:Router, private activerouter: ActivatedRoute) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          // validates date format yyyy-mm-dd
          dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
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
      console.log('R4x',this.registerForm.value);
      this.httpclient.post('https://r4x-info-default-rtdb.firebaseio.com/admin-register.json',this.registerForm.value).subscribe((Response)=> {
        console.log(Response)
        this.router.navigate(['../','admin'],{relativeTo:this.activerouter})
      },
      (error) =>{
        console.log('Error');
      }
      );
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
