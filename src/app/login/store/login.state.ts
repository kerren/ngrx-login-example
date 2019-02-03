import {User} from "../../shared/models/user/user";
import {ElementState} from "../../shared/models/general/element-state";

export interface LoginState {
  user: User;
  submit: ElementState;
}


export const initialState: LoginState = {
  user: new User(),
  submit: new ElementState()
};
