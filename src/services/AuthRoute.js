import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

function AuthRoute(props) {
  const { isLoggedIn } = useSelector((state) => ({
    isLoggedIn: state.loginReducer.isLoggedIn
  }));
  if (isLoggedIn && !props.isHome) return <Redirect to="/home" />;
  else if (!isLoggedIn && !props.isSignUp && (props.isRoot || props.isHome))
    return <Redirect to="/signin" />;
  return <Route {...props} />;
}

export default AuthRoute;
