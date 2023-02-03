import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MustMatch } from 'src/app/validator/match.validator';

declare let Email: any;

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;
  
 // public crudApi: RegisterService,
  constructor(private formBuilder: FormBuilder, private httpclient: HttpClient, private router: Router, private activerouter: ActivatedRoute) { }

   ngOnInit() {
    console.log('R4x23',Email);
    this.registerForm = this.formBuilder.group({
      // title: ['', Validators.required],
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // validates date format yyyy-mm-dd
      //dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required]
    },
    //  {
    //   validator: MustMatch('password', 'confirmPassword')
     //}
     );
   }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.httpclient.post('https://r4x-info-default-rtdb.firebaseio.com/admin-register.json', this.registerForm.value).subscribe((Response) => {
    
      Email.send({
        SecureToken : "edfecb83-b189-4e26-8751-f901266861eb",
        To : 'ravirpatel.45@gmail.com',
        From : "vegadravi84@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(function (message) {
      alert("please check your mail")
      });
      this.router.navigate(['../', 'admin'], { relativeTo: this.activerouter })
    },
      (error) => {
        console.log('Error');
      }
    );

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

