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

  // getUserData$ = createEffect(() => {
  //   return this.actions$
  //     .pipe(
  //       ofType(users.getUser),
  //       mergeMap(
  //         (id) => this.service.getUser(id)
  //           .pipe(
  //             map(data => {
  //               return users.getUserSuccess({data:data})
  //             }),
  //             catchError(error => of(users.getUserFailure(error)))
  //           )
  //       ),
  //     )
  // });
  constructor(private actions$: Actions, private service:UsersService ) { }
}
