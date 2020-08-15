import { SNACKBAR_SHOW, SNACKBAR_CLEAR } from "./SnackBarTypes";

const initialState = {
  showSnackbar: false,
  isError: false,
  message: ""
};

const SnackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SNACKBAR_SHOW:
      const error = action.payLoad.isError ? true : false;
      return {
        ...state,
        showSnackbar: true,
        message: action.payLoad.message,
        isError: error
      };
    case SNACKBAR_CLEAR:
      return {
        ...state,
        showSnackbar: false
      };
    default:
      return state;
  }
};

export default SnackbarReducer;
