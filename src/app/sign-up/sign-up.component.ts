import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DataService} from '../data.service';
import {Users} from '../user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  rForm: FormGroup;
  post:any; 
  fname:string = '';
  lname:string = '';
  jobTit:string = '';
  twitter:string = '';
  email:string = '';
  password:string = '';
  titleAlert:string = 'This field is required';

  constructor(private router:Router,private dataService:DataService,private fb: FormBuilder) { 
    this.rForm = fb.group({
      'fname': [null, Validators.required],
      'lname': [null, Validators.required],
      'jobTit': [null, Validators.required],
      'twitter': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required],
    });
  }

  ngOnInit() {
  }
  onAddUser(fname,lname,jobTit,twitter,email,password){
    let user : Users = {fname:fname,lname:lname,jobTitle:jobTit,twitter:twitter,email:email,password:password};
    this.dataService.addUser(user); 
    this.router.navigate(['user-data']);
  }

}
