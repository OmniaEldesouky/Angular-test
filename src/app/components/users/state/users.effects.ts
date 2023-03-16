import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsersService } from 'src/app/servises/users.service';

import * as users from '../state/users.actions'

@Injectable()

export class UserEffects {
  getUsersData$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(users.getUsers),
        mergeMap(
          () => this.service.getUsers()
            .pipe(
              map(data => {
                return users.getUsersSuccess({data:data})
              }),
              catchError(error => of(users.getUsersFailure(error)))
            )
        ),
      )
  });

  getUserData$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(users.getUser),
        mergeMap(
          (data) => this.service.getUser(data.id)
            .pipe(
              map(data => {
                return users.getUserSuccess({user:data})
              }),
              catchError(error => of(users.getUserFailure(error)))
            )
        ),
      )
  });


  addUser$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(users.addUser),
        mergeMap(
          (data) => this.service.addUser(data.user)
            .pipe(
              map(data => {
                return users.addUserSuccess({user:data})
              }),
              catchError(error => of(users.addUserFailure(error)))
            )
        ),
      )
  });

  deleteUser$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(users.deleteUser),
        mergeMap(
          (data) => this.service.deleteUser(data.id)
            .pipe(
              map(data => {
                return users.deleteUserSuccess({user:data})
              }),
              catchError(error => of(users.deleteUserFailure(error)))
            )
        ),
      )
  });


  constructor(private actions$: Actions, private service:UsersService ) { }
}
