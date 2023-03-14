import { Action, createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';

export interface State {
  
}
export const initialState: State = {
    
  };

  const usersReducer = createReducer(
    initialState,
    on(UsersActions.getUsers, state => ({
         ...state,
        })),

  );
  
  export function reducer(state: State | undefined, action: Action) {
    return usersReducer(state, action);
  }