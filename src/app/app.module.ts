import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {RouterModule,Routes} from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { LoginComponent } from './login/login.component';

const approutes:Routes = [
  {path:'',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'user-data',component:UserDataComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserDataComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approutes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent,SignUpComponent,LoginComponent,UserDataComponent]
})
export class AppModule { }
