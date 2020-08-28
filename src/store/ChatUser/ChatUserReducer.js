import { USER_UPDATE } from "./ChatUserTypes";

const initialState = {
  userId: ""
};

const ChatUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_UPDATE:
      return {
        ...state,
        userId: action.payLoad
      };
    default:
      return state;
  }
};

export default ChatUserReducer;
