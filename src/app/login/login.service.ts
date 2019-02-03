import { Injectable } from '@angular/core';
import {Credentials} from "../shared/models/user/credentials";
import {Observable, of} from "rxjs";
import {StandardResponseDto} from "../shared/models/requests/standard-response.dto";
import {User} from "../shared/models/user/user";
import {Store} from "@ngrx/store";
import {AppState} from "../reducers";
import {LoginRequest, LoginRequestFailure, LoginRequestSuccess} from "./store";
import {ErrorResponseDto} from "../shared/models/requests/error-response.dto";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private store$: Store<AppState>
  ) { }

  /**
   * Calls a fake login http request and dispatches the result
   * @param credentials The users login credentials
   */
  login(credentials: Credentials): void {
    this.store$.dispatch(new LoginRequest());
    setTimeout(() => {
      this.makeLoginRequest(credentials).subscribe(
        success => this.store$.dispatch(new LoginRequestSuccess(success)),
        error => this.store$.dispatch(new LoginRequestFailure(error))
      );
    }, 2000);
  }

  /**
   * This is my fake request maker.
   * @param credentials The login credentials to send to the backend.
   */
  private makeLoginRequest(credentials: Credentials): Observable<StandardResponseDto<User>> {
    if (Math.random() > 0.5) {
      return of(StandardResponseDto.create(true, 'Login successful', new User({
        name: 'Fake Name',
        email: 'test@example.com',
        token: 'abcdefghijklmnopqrstuvwxyz'
      })));
    }

    throw new ErrorResponseDto<any>({
      success: false,
      message: 'Failed to login',
      payload: {}
    });
  }
}
