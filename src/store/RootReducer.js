import { combineReducers } from "redux";
import LoginReducer from "./Login/LoginReducer";
import LoaderReduer from "./Loader/LoaderReducer";
import UserDetailsReducer from "./UserDetails/UserDetailsReducer";

const RootReducer = combineReducers({
  loginReducer: LoginReducer,
  LoaderReducer: LoaderReduer,
  UserDetailsReducer: UserDetailsReducer
});

export default RootReducer;
