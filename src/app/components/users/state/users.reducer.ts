import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { userResponseData } from 'src/app/models/userResponseData';
import * as UsersActions from './users.actions';



export const usersFeatureKey = 'users';

export interface State {
  users:userResponseData[]|null,
  selectedUser:userResponseData|null
}
export const initialState: State = {
    users:null,
    selectedUser:null
  };

  export const usersReducer = createReducer<State>(
    initialState,
    on(UsersActions.getUsersSuccess, (state , action) : State=> {
      return {
        ...state,
        users:action.data
      }
    }),
    on(UsersActions.getUserSuccess,(state,action):State=>{
      return{
        ...state,
        selectedUser: action.user[0]
      }
    }),
    on(UsersActions.addUserSuccess,(state,action):State=>{
      let user = action.user;
      let oldList = [...[state.users]];
      let newUser = [...[user]] 
      return{
        ...state,
        users: [
          // ...oldList,
          // ...newUser
        ]
      }
    }),
    on(UsersActions.deleteUserSuccess,(state,action):State=>{
      console.log(action.user);
      
      return{
        ...state,
        selectedUser: action.user
      }
    }),
  );

  export function reducer(state: State | undefined, action: Action) {
    return usersReducer(state, action);
  }



  const FeatureState = createFeatureSelector<State>('users');
  export const getUsers = createSelector(
    FeatureState,
    state => state.users
  )
  export const getSelectedUser = createSelector(
    FeatureState,
    state => state.selectedUser
  )
