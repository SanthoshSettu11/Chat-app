import { USER_UPDATE } from "./ChatUserTypes";

export const updateUserId = (data) => {
  return {
    type: USER_UPDATE,
    payLoad: data
  };
};
