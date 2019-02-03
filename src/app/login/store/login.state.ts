import {Credentials} from "../../shared/models/user/credentials";
import {User} from "../../shared/models/user/user";
import {ElementState} from "../../shared/models/general/element-state";

export interface State {
  credentials: Credentials;
  user: User;
  submit: ElementState;
}


export const initialState: State = {
  credentials: new Credentials(),
  user: null,
  submit: new ElementState()
};
