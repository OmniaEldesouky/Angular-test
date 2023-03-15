import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { userResponseData } from 'src/app/models/userResponseData';
import * as UsersActions from './users.actions';



export const usersFeatureKey = 'users';

export interface State {
  users:userResponseData[]|null
}
export const initialState: State = {
    users:null
  };

  export const usersReducer = createReducer<State>(
    initialState,
    on(UsersActions.getUsersSuccess, (state , action) : State=> {
      return {
        ...state,
        users:action.data
      }
    })
  );
  
  export function reducer(state: State | undefined, action: Action) {
    return usersReducer(state, action);
  }



  const FeatureState = createFeatureSelector<State>('users');
  export const getUsers = createSelector(
    FeatureState,
    state => state.users
  )