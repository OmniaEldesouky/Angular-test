import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { postResponseData } from 'src/app/models/postResponseData';
import * as posts from '../state/posts.actions';
import * as user from '../../users/state/users.actions';
import { getUserPosts } from '../state/posts.reducer';
import { getSelectedUser } from '../../users/state/users.reducer';
import { userResponseData } from 'src/app/models/userResponseData';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPostsComponent implements OnInit{
  id!:string | null;
  posts!:Observable<postResponseData[]|null>;
  user!:Observable<userResponseData|null>;

  constructor(private _Activatedroute:ActivatedRoute,private store:Store,){}

  ngOnInit(): void {
    this. _Activatedroute.queryParamMap
    .subscribe(params => {
      this.id = params.get("id")      
      });

      if(this.id){
        this.store.dispatch(user.getUser({id:parseInt(this.id)}));
        this.user = this.store.select(getSelectedUser)
          this.store.dispatch(posts.getPosts({id:parseInt(this.id)}));
        this.posts = this.store.select(getUserPosts)
      }
  }

  deletePost(id:number){
    this.store.dispatch(posts.deletePosts({id:id}))
  }
  
  
}
