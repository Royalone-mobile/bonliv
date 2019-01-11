import { 
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actions/types';

import { Actions } from 'react-native-router-flux';


interface State {
  loading: boolean,
  user:any
}

const INITIAL_STATE1: State = {
  user: null,
  loading:false,
};

export default (state:State = INITIAL_STATE1, action:any) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      Actions.home();
      return { ...state, ...INITIAL_STATE1, user: action.payload, loading: false};
    case LOGIN_USER_FAIL:
      return { ...state, loading: false};
    case LOGIN_USER:
      return { ...state, loading: true};
    default:
      return state;
  }
};
