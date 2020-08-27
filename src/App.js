import React, { useEffect, useState } from "react";
import "./App.css";
import { Provider, connect, useDispatch } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./views/SignIn/SignIn";
import store from "./store/RootStore";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, Backdrop, CircularProgress } from "@material-ui/core";
import theme from "./theme";
import { stopLoader, showLoader } from "../src/store/Loader/LoaderActions";
import Loader from "./views/StyledMaterialComponents/Loader";
import SignUp from "./views/SignUp/SignUp";
import SnackBar from "./views/Common/SnackBar/SnackBar";
import Home from "./views/Home/Home";
import { loggedIn } from "./store/Login/LoginActions";
import AuthRoute from "./services/AuthRoute";

function App(props) {
  const dispatch = useDispatch();
  const [valuesLoaded, setValuesLoaded] = useState(false);
  useEffect(() => {
    if (!valuesLoaded) {
      props.showLoader();
      const isloggedIn = localStorage.getItem("isLoggedIn");
      const logginData = localStorage.getItem("logginData");
      if (isloggedIn == "true" && logginData) {
        if (JSON.parse(logginData)) {
          setLoggedIn(JSON.parse(logginData));
        }
      }
      stop();
    }
  }, [valuesLoaded]);

  const setLoggedIn = (data) => {
    dispatch(loggedIn(data));
  };

  const stop = () => {
    setValuesLoaded(true);
    props.stopLoader();
  };

  return (
    <React.Fragment>
      {valuesLoaded && (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <Router>
              <Switch>
                <AuthRoute path="/signin">
                  <SignIn></SignIn>
                </AuthRoute>
                <AuthRoute path="/signup" isSignUp={true}>
                  <SignUp></SignUp>
                </AuthRoute>
                <AuthRoute path="/home" isHome>
                  <Home></Home>
                </AuthRoute>
                <AuthRoute path="/" isRoot>
                  <SignIn></SignIn>
                </AuthRoute>
              </Switch>
            </Router>
          </div>
          {props.isShowLoader && <Loader open={props.isShowLoader}></Loader>}
        </ThemeProvider>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isShowLoader: state.LoaderReducer.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoader: () => dispatch(showLoader()),
    stopLoader: () => dispatch(stopLoader())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
