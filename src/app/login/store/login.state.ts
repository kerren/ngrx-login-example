import {Credentials} from "../../shared/models/user/credentials";
import {User} from "../../shared/models/user/user";

export interface LoginState {
  credentials: Credentials;
  user: User;
}


export const defaultLoginState: LoginState = {
  credentials: new Credentials(),
  user: null
};
