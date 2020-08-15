import { LOGIN_SUCCESSFULL, SIGNUP_SUCCESSFULL } from "./LoginTypes";

const initialState = {
  isLoggedIn: false,
  loginData: null
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFULL:
      return {
        ...state,
        isLoggedIn: true,
        loginData: action.payLoad
      };
    case SIGNUP_SUCCESSFULL:
      return {
        ...state,
        isLoggedIn: false,
        loginData: action.payLoad
      };
    default:
      return state;
  }
};

export default LoginReducer;
