import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { user } from 'src/app/models/user';
import * as users from '../../state/users.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form!:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: user,private fb:FormBuilder,private store:Store) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      name:["",[Validators.required]],
      gender: ["", [Validators.required]],
      email: ["", [Validators.required]],
      status: ["" ,[Validators.required]],
    });

    if(this.data){
      console.log(this.data);

      this.form.setValue({
        name: this.data?.name,
        gender: this.data.gender,
        email: this.data?.email,
        status: this.data.status
      })
    }
  }
  submitForm(){
    this.store.dispatch(users.addUser({user:this.form.value}));
    console.log(this.form.value);
  }
}
