import {Action} from "@ngrx/store";
import {Credentials} from "../../shared/models/user/credentials";
import {StandardResponseDto} from "../../shared/models/requests/standard-response.dto";
import {User} from "../../shared/models/user/user";
import {ErrorResponseDto} from "../../shared/models/requests/error-response.dto";

export enum LoginActionTypes {
  CHANGE_CREDENTIALS = '[Login] Change Credentials',
  LOGIN_REQUEST = '[Login] Make Request',
  LOGIN_REQUEST_SUCCESS = '[Login] Request Success',
  LOGIN_REQUEST_FAILURE = '[Login] Request Failure'
}


export class ChangeCredentials implements Action {
  readonly type = LoginActionTypes.CHANGE_CREDENTIALS;
  constructor(public payload: Credentials) {}
}

export class LoginRequest implements Action {
  readonly type = LoginActionTypes.LOGIN_REQUEST;
  constructor(public payload: Credentials) {}
}

export class LoginRequestSuccess implements Action {
  readonly type = LoginActionTypes.LOGIN_REQUEST_SUCCESS;
  constructor(public payload: StandardResponseDto<User>) {}
}

export class LoginRequestFailure implements Action {
  readonly type = LoginActionTypes.LOGIN_REQUEST_FAILURE;
  constructor(public payload: ErrorResponseDto<any>) {}
}

export type Union = ChangeCredentials | LoginRequest | LoginRequestSuccess | LoginRequestFailure;
