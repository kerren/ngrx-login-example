import {LoginState} from "./login.state";
import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {User} from "../../shared/models/user/user";
import {ElementState} from "../../shared/models/general/element-state";


const getUser = (state: LoginState) => state.user;
const getSubmit = (state: LoginState) => state.submit;

export const selectLoginState: MemoizedSelector<object, LoginState> = createFeatureSelector<LoginState>('login');

export const selectUser: MemoizedSelector<object, User> = createSelector(
  selectLoginState,
  getUser
);

export const selectSubmit: MemoizedSelector<object, ElementState> = createSelector(
  selectLoginState,
  getSubmit
);

