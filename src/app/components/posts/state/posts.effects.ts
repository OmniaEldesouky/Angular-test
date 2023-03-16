import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PostsService } from 'src/app/servises/posts.service';

import * as posts from './posts.actions'

@Injectable()

export class PostsEffects {
  getUsersPosts$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(posts.getPosts),
        mergeMap(
          (data) => this.service.getUserPost(data.id)
            .pipe(
              map(data => {
                return posts.getPostsSuccess({data:data})
              }),
              catchError(error => of(posts.getPostsFailure(error)))
            )
        ),
      )
  });


  deleteUsersPost$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(posts.deletePosts),
        mergeMap(
          (data) => this.service.deleteUserPost(data.id)
            .pipe(
              map(data => {
                return posts.deletePostsSuccess({data:data})
              }),
              catchError(error => of(posts.deletePostsFailure(error)))
            )
        ),
      )
  });

  constructor(private actions$: Actions, private service:PostsService ) { }
}
