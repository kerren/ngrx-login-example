import {Action} from "@ngrx/store";
import {Credentials} from "../../shared/models/user/credentials";
import {StandardResponseDto} from "../../shared/models/requests/standard-response.dto";
import {User} from "../../shared/models/user/user";
import {ErrorResponseDto} from "../../shared/models/requests/error-response.dto";

export enum ActionTypes {
  LOGIN_REQUEST = '[Login] Make Request',
  LOGIN_REQUEST_SUCCESS = '[Login] Request Success',
  LOGIN_REQUEST_FAILURE = '[Login] Request Failure'
}


export class LoginRequest implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;
  constructor() {}
}

export class LoginRequestSuccess implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST_SUCCESS;
  constructor(public payload: StandardResponseDto<User>) {}
}

export class LoginRequestFailure implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST_FAILURE;
  constructor(public payload: ErrorResponseDto<any>) {}
}

export type Union = LoginRequest | LoginRequestSuccess | LoginRequestFailure;
