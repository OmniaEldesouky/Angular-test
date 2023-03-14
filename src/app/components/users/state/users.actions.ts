import { createAction, props } from '@ngrx/store';
import { user } from 'src/app/models/user';

export const getUsers = createAction(
    'GET_USERS_STARTS'
);

export const getUsersSuccess = createAction(
    'GET_USERS_STARTS_SUCCESS',
    props<{ data: user[] }>()
);

export const getUsersFailure = createAction(
    'GET_USERS_STARTS_FAIL',
    props<{ error: any }>()
);
