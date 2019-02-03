import {Credentials} from "../../shared/models/user/credentials";
import {User} from "../../shared/models/user/user";
import {ElementState} from "../../shared/models/general/element-state";

export interface LoginState {
  credentials: Credentials;
  user: User;
  submit: ElementState;
}


export const initialState: LoginState = {
  credentials: new Credentials(),
  user: new User(),
  submit: new ElementState()
};
