import * as Actions from './login.actions';
import {ActionTypes} from './login.actions';
import * as State from './login.state';
import {ElementState} from '../../shared/models/general/element-state';

export function reducer(
  state = State.initialState,
  action: Actions.Union
): State.LoginState {
  switch (action.type) {
    case Actions.ActionTypes.CHANGE_CREDENTIALS:
      return {
        ...state,
        credentials: action.payload
      };
    case Actions.ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        submit: ElementState.create(true),
        credentials: action.payload
      };
    case ActionTypes.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        submit: ElementState.success(action.payload.message),
        user: action.payload.payload
      };
    case ActionTypes.LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        submit: ElementState.error(action.payload.message)
      };
    default:
      return state;
  }
}
