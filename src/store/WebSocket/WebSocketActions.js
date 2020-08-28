import { SOCKET_UPDATE } from "./WebSocketTypes";

export const updateSocket = (data) => {
  return {
    type: SOCKET_UPDATE,
    payLoad: data
  };
};
