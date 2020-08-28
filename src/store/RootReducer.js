import { combineReducers } from "redux";
import LoginReducer from "./Login/LoginReducer";
import LoaderReduer from "./Loader/LoaderReducer";
import UserDetailsReducer from "./UserDetails/UserDetailsReducer";
import SnackbarReducer from "./SnackBar/SnackbarReducer";
import ChatUserReducer from "./ChatUser/ChatUserReducer";
import WebSocketReducer from "./WebSocket/WebSocketReducer";

const RootReducer = combineReducers({
  loginReducer: LoginReducer,
  LoaderReducer: LoaderReduer,
  UserDetailsReducer: UserDetailsReducer,
  SnackbarReducer: SnackbarReducer,
  ChatUserReducer: ChatUserReducer,
  WebSocketReducer: WebSocketReducer
});

export default RootReducer;
