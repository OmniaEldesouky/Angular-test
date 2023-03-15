import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userResponseData } from 'src/app/models/userResponseData';
import * as users from '../state/users.actions';
import { getUsers } from '../state/users.reducer';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserComponent } from '../add-Edit/user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './allUsers.component.html',
  styleUrls: ['./allUsers.component.css']
})
export class allUsersComponent implements OnInit {
  active:boolean=true;
  users!:Observable<userResponseData[]|null>
  constructor(private store:Store,public dialog: MatDialog){}
   
  ngOnInit(): void {
    this.store.dispatch(users.getUsers());
    this.users = this.store.select(getUsers)
  }
  addUser() {
    this.dialog.open(UserComponent);
  }
  editUser(id:string){
    this.dialog.open(UserComponent,{
      data:{}
    });
  }
}
