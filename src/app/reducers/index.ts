import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {initialState, LoginState} from "../login/store/login.state";

import * as LoginStore from '../login/store';

export interface AppState {
  login: LoginStore.LoginState;
}

export const reducers: ActionReducerMap<AppState> = {
  login: LoginStore.reducer
};


export const metaReducers: MetaReducer<LoginState>[] = !environment.production ? [] : [];
