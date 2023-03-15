import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form!:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: user,private fb:FormBuilder) {}

  ngOnInit(): void {
    if(this.data){
      console.log(this.data);
      
    }
    this.form = this.fb.group({
      name:["",[Validators.required]],
      gender: ["", [Validators.required]],
      email: ["", [Validators.required]],
      status: ["" ,[Validators.required]], 
    }); 
  }
  submitForm(){
    console.log(this.form.value);
  }
}
