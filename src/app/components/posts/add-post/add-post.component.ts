import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { post } from 'src/app/models/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  form!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private fb: FormBuilder, private store: Store) { }


  ngOnInit(): void {
    debugger
    this.form = this.fb.group({
      posts: this.fb.array([
        this.fb.group({
          body: ["", [Validators.required]],
          title: ["", [Validators.required]]
        })
      ])
    });
  }
  get posts(): FormArray {
    return this.form.get("posts") as FormArray
  }

  post(): FormGroup {
    return this.fb.group({
      body: ["", [Validators.required]],
      title: ["", [Validators.required]]
    })
  }

  newPost() {
    this.posts.push(this.post());
  }
  submitForm() {
    console.log(this.form.value);
  }
}
