import { Component, OnInit } from '@angular/core';
import {USERS} from '../Data';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  users=USERS;
  constructor() { }

  ngOnInit() {
  }

}
