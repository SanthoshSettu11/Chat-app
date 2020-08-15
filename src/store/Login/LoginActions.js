import { LOGIN_SUCCESSFULL, SIGNUP_SUCCESSFULL } from "./LoginTypes";

export const loggedIn = (data) => {
  return {
    type: LOGIN_SUCCESSFULL,
    payLoad: data
  };
};

export const signUp = () => {
  return {
    type: SIGNUP_SUCCESSFULL,
    payLoad: null
  };
};
