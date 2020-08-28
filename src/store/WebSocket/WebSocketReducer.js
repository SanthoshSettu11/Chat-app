import { SOCKET_UPDATE } from "./WebSocketTypes";

const initialState = {
  ws: null
};

const WebSocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_UPDATE:
      return {
        ...state,
        ws: action.payLoad
      };
    default:
      return state;
  }
};

export default WebSocketReducer;
