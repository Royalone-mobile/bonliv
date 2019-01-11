import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';


export const loginUser = ({ username, password}:any) => {
  return (dispatch:any) => {
    dispatch({
      type: LOGIN_USER,
    });


    if (username === 'admin' && password == 'admin')
      loginUserSuccess(dispatch, null);
    else
      setTimeout(() => {
        loginUserFail(dispatch)
      }, 1000);
  };
};

const loginUserFail = (dispatch:any) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch:any, user:any) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
