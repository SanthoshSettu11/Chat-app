import React, { useState, useEffect } from "react";
import "./SnackBar.css";
import { useDispatch, useSelector } from "react-redux";
import { clearSnackbar } from "../../../store/SnackBar/SnackbarActions";
import { Snackbar } from "@material-ui/core";

function SnackBar(props) {
  const dispatch = useDispatch();
  const { showSnackbar, isError, message } = useSelector(
    (state) => state.SnackbarReducer
  );

  const handleClose = () => {
    dispatch(clearSnackbar());
  };

  return (
    <div>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={5000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        message={<span>{message}</span>}
        onClose={() => handleClose()}
      ></Snackbar>
    </div>
  );
}

export default SnackBar;
