import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DataService} from '../data.service';
import {Users} from '../user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  email:string = '';
  password:string = '';
  titleAlert:string = 'This field is required';
  validData:boolean = false;
  invalidUnamePass:string = '';
  //checkTest:Users;

  constructor(private dataService:DataService,private router:Router,private fb: FormBuilder) {

    this.rForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required],
    });

  }

  /*addPost(post) {
    this.email = post.email;
    this.password = post.password;
  }*/

  check(post){
    this.email = post.email;
    this.password = post.password;
    /*if(this.email==='reha' && this.password==='reha'){
      this.checkTest = 'True';
    }*/
    let user = this.dataService.getUser(this.email,this.password);
    if(user==undefined){
      this.validData = false;
      this.invalidUnamePass = 'Invalid Email or password';
    }else{
      this.validData = true;
      this.router.navigate(['user-data']);
    }


  }
  ngOnInit() {
  }

}
