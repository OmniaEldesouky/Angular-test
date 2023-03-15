// import {
//     ActionReducer,
//     ActionReducerMap,
//     createFeatureSelector,
//     createSelector,
//     MetaReducer
//   } from '@ngrx/store';
//   import { environment } from './../environments/environment';
//   import * as fromUsers from './components/users/state/users.reducer';
  
//   // console.log all actions
//   export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
//     return function(state, action) {
//       console.log('action', action);
//       console.log('state', state);
//       return reducer(state, action);
//     };
//   }
//   export interface State {
//     [fromHome.homeFeatureKey]: fromHome.homeState;
//   }
  
//   export const reducers: ActionReducerMap<State> = {
//     [fromUsers.]: fromHome.reducer,
//   };
  
  
//   export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
  