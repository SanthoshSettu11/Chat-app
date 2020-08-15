import { USERDETAILS_UPDATE } from "./UserDetailsTypes";

export const updateUserDetails = (data) => {
  return {
    type: USERDETAILS_UPDATE,
    payLoad: data
  };
};
