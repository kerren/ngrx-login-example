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

export interface State {
  login: LoginStore.LoginState;
}

export const reducers: ActionReducerMap<State> = {
  login: LoginStore.reducer
};


export const metaReducers: MetaReducer<LoginState>[] = !environment.production ? [] : [];
