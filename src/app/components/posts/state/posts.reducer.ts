import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { postResponseData } from 'src/app/models/postResponseData';
import * as posts from './posts.actions';



export const postsFeatureKey = 'posts';

export interface State {
  posts:postResponseData[]|null
}
export const initialState: State = {
  posts:null
  };

  export const postsReducer = createReducer<State>(
    initialState,
    on(posts.getPostsSuccess, (state , action) : State=> {
      console.log(action.data);
      return {
        ...state,
        posts:action.data
      }
    }),
    on(posts.deletePostsSuccess, (state , action) : State=> {
      console.log(action.data);
      return {
        ...state,
       
      }
    }),

  );

  export function reducer(state: State | undefined, action: Action) {
    return postsReducer(state, action);
  }


  const FeatureState = createFeatureSelector<State>('posts');
  export const getUserPosts = createSelector(
    FeatureState,
    state => state.posts
  )
  
