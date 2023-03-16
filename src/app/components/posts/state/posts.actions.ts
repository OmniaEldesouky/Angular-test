import { createAction, props } from '@ngrx/store';
import { postResponseData } from 'src/app/models/postResponseData';

export const getPosts = createAction(
    'GET_USER_POSTS_STARTS',
    props<{ id: number}>()

);
export const getPostsSuccess = createAction(
    'GET_USER_POSTS_SUCCESS',
    props<{ data: postResponseData[]}>()
);
export const getPostsFailure = createAction(
    'GET_USER_POSTS_FAIL',
    props<{ error: any }>()
);


export const deletePosts = createAction(
    'DELETE_USER_POSTS_STARTS',
    props<{ id: number}>()

);
export const deletePostsSuccess = createAction(
    'DELETE_USER_POSTS_SUCCESS',
    props<{ data: postResponseData[]}>()
);
export const deletePostsFailure = createAction(
    'DELETE_USER_POSTS_FAIL',
    props<{ error: any }>()
);
