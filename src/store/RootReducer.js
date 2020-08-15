import { combineReducers } from "redux";
import LoginReducer from "./Login/LoginReducer";
import LoaderReduer from "./Loader/LoaderReducer";
import UserDetailsReducer from "./UserDetails/UserDetailsReducer";
import SnackbarReducer from "./SnackBar/SnackbarReducer";

const RootReducer = combineReducers({
  loginReducer: LoginReducer,
  LoaderReducer: LoaderReduer,
  UserDetailsReducer: UserDetailsReducer,
  SnackbarReducer: SnackbarReducer
});

export default RootReducer;
