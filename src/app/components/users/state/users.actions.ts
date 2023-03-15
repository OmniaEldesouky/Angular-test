import { createAction, props } from '@ngrx/store';
import { userResponseData } from 'src/app/models/userResponseData';

export const getUsers = createAction(
    'GET_USERS_STARTS'
);
export const getUsersSuccess = createAction(
    'GET_USERS_SUCCESS',
    props<{ data: userResponseData[] }>()
);
export const getUsersFailure = createAction(
    'GET_USERS_FAIL',
    props<{ error: any }>()
);


export const getUser = createAction(
    'GET_USER_STARTS',
    props<{id:number}>()
);
export const getUserSuccess = createAction(
    'GET_USER_SUCCESS',
    props<{ data: userResponseData[] }>()
);
export const getUserFailure = createAction(
    'GET_USER_FAIL',
    props<{ error: any }>()
);



export const addUser = createAction(
  'ADD_USER_STARTS',
  props<{user:userResponseData}>()
);
export const addUserSuccess = createAction(
  'ADD_USER_SUCCESS',
  props<{ user: userResponseData }>()
);
export const addUserFailure = createAction(
  'ADD_USER_FAIL',
  props<{ error: any }>()
);


