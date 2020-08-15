import { withStyles, Backdrop, CircularProgress } from "@material-ui/core";
import React from "react";

const StyledBackBrop = withStyles({
  root: {
    zIndex: 1000,
    color: "#fff"
  }
})(Backdrop);

function Loader(props) {
  return (
    <StyledBackBrop open={props.open}>
      <CircularProgress color="inherit" />
    </StyledBackBrop>
  );
}

export default Loader;
