import React, { useEffect } from "react";
import "./App.css";
import { Provider, connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./views/SignIn/SignIn";
import store from "./store/RootStore";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, Backdrop, CircularProgress } from "@material-ui/core";
import theme from "./theme";
import { stopLoader, showLoader } from "../src/store/Loader/LoaderActions";
import Loader from "./views/StyledMaterialComponents/Loader";
import SignUp from "./views/SignUp/SignUp";

function App(props) {
  useEffect(() => {
    props.showLoader();
    stop();
  }, []);

  const stop = () => {
    props.stopLoader();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <SignIn></SignIn>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
          </Switch>
        </Router>
      </div>
      {props.isShowLoader && <Loader open={props.isShowLoader}></Loader>}
    </ThemeProvider>
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
