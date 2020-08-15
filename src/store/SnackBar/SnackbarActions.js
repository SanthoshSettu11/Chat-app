import { SNACKBAR_SHOW, SNACKBAR_CLEAR } from "./SnackBarTypes";

export const showSnackbar = (data) => {
  return {
    type: SNACKBAR_SHOW,
    payLoad: data
  };
};

export const clearSnackbar = () => {
  return {
    type: SNACKBAR_CLEAR
  };
};
