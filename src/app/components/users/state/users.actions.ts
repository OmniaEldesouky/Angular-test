import { createAction, props } from '@ngrx/store';
import { userResponseData } from 'src/app/models/userResponseData';

export const getUsers = createAction(
    'GET_USERS_STARTS'
);
export const getUsersSuccess = createAction(
    'GET_USERS_STARTS_SUCCESS',
    props<{ data: userResponseData[] }>()
);
export const getUsersFailure = createAction(
    'GET_USERS_STARTS_FAIL',
    props<{ error: any }>()
);


export const getUser = createAction(
    'GET_USER_STARTS',
    props<{id:number}>()
);
export const getUserSuccess = createAction(
    'GET_USER_STARTS_SUCCESS',
    props<{ data: userResponseData[] }>()
);
export const getUserFailure = createAction(
    'GET_USER_STARTS_FAIL',
    props<{ error: any }>()
);


