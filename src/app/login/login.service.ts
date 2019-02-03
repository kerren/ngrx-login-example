import { Injectable } from '@angular/core';
import {Credentials} from "../shared/models/user/credentials";
import {Observable, of} from "rxjs";
import {StandardResponseDto} from "../shared/models/requests/standard-response.dto";
import {User} from "../shared/models/user/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(credentials: Credentials): Observable<StandardResponseDto<User>> {
    return of(null);
  }
}
