import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute, Router } from '@angular/router';
import { MustMatch } from 'src/app/validator/match.validator';
// import {MessageService} from 'primeng/api';
import * as _ from 'lodash';
@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.scss'],
  providers: [MessageService]
})
export class AdminSettingComponent implements OnInit {
  // @ViewChild('fileInput') el: ElementRef;
  //@ViewChild('components','setting') jsonElement?: ElementRef;
  //form:any;
  // customForm = sample;
  // data = {};
  // rendered = false;
  //constructor(
  // public fb: FormBuilder,
  // private cd: ChangeDetectorRef
  //) {}
  // ngOnInit() {
  // this.form ={
  //   "components": [
  //     {
  //       "label": "User ID",
  //       "customClass": "col-6",
  //       "spellcheck": false,
  //       "tableView": false,
  //       "validate": {
  //           "required": true,
  //           "customMessage": "Please enter Username first 2 characters,   Contact Number 3rd and 4th,  Email ID in @ before 2 characters "
  //       },
  //       "errorLabel": "Follow",
  //       "key": "userId",
  //       "type": "textfield",
  //       "input": true,
  //   },
  //     {
  //         "label": "Logo name",
  //         "tableView": true,
  //         "key": "logoName",
  //         "type": "textfield",
  //         "input": true
  //     },
  //     {
  //         "label": "User Name",
  //         "tableView": true,
  //         "key": "userName",
  //         "type": "textfield",
  //         "input": true
  //     },
  //     {
  //         "label": "Email",
  //         "tableView": true,
  //         "key": "email",
  //         "type": "textfield",
  //         "input": true
  //     },
  //     {
  //         "label": "Contact No",
  //         "tableView": true,
  //         "key": "contactNo",
  //         "type": "textfield",
  //         "input": true
  //     },
  //     {
  //         "type": "button",
  //         "label": "Submit",
  //         "key": "submit",
  //         "disableOnInvalid": true,
  //         "input": true,
  //         "tableView": false
  //     }
  // ]
  //}
  //}
  settingForm: FormGroup | any;
  submitted = false;

  constructor(private httpclient: HttpClient, private router: Router, private formBuilder: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    
   this.settingForm = !this.settingForm;
    this.settingForm = this.formBuilder.group({
      userID: ['', Validators.required],
      userName: ['', Validators.required],
      adminPannleName: ['', [Validators.required]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required],
      // acceptTerms: [false, Validators.requiredTrue]
    },
      // {
      //     validator: MustMatch('password', 'confirmPassword')
      // }
    );
    //this.settingForm = !this.settingForm;
    // let newObject = JSON.parse(window.localStorage.getItem("settingData"));
    // console.log('R4x',newObject);
    // this.settingForm = _.clone(newObject);
  }

  // convenience getter for easy access to form fields
  get f() { return this.settingForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.settingForm.invalid) {
      return this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Validation failed ' });
    }
    console.log('R4x', this.settingForm.valid);
    if (this.settingForm.valid) {
      let settingData = this.settingForm.value
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Save success' });
      window.localStorage.setItem("formdata", JSON.stringify(settingData));
      //this.httpclient.post('https://r4x-info-default-rtdb.firebaseio.com/setting.json', formdata).subscribe((Response) => {
      //this.settingForm = !this.settingForm.value;
    }
    // this.settingForm = !this.settingForm;
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.settingForm.value, null, 4));
  }
  // showData(){
  //   this.settingForm = !this.settingForm;
  //   this.httpclient.get('https://r4x-info-default-rtdb.firebaseio.com/setting/setting.json').subscribe((data) =>{
  //     console.log('R4x',data);
  //   })
  // }
  onReset() {
    this.submitted = false;
    this.settingForm.reset;
  }
  clear() {
    this.messageService.clear();
  }

  // submit(event) {
  //   console.log("submit", event);
  // }

  // render() {
  //   console.log("render");
  //   this.rendered = true;
  // }

  // beforeSubmit(event){
  //   console.log("beforeSubmit", event)
  // }

  // change(event) {
  //   console.log("change", event);
  //   if (event.data) {
  //     this.data = event.data;
  //   }
  // }

  // invalid(event) {
  //   console.log("Invalid", event);
  // }

  // errorChange(event){
  //   console.log("errorChange", event)
  // }

  // formLoad(event) {
  //   console.log("formLoad", event)
  // }

  // ready(){
  //   console.log("ready", event)
  // }

  // @ViewChild('json', {static: false}) jsonElement?: ElementRef;
  // public form: Object = {
  //   components: []
  // };

  // onChange(event) {
  //   this.jsonElement.nativeElement.innerHTML = '';
  //   this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  // }
}
