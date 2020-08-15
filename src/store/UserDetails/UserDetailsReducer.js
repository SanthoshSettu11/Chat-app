import { USERDETAILS_UPDATE } from "./UserDetailsTypes";

const initialState = {
  proileName: "",
  countryCode: "",
  phoneNumber: "",
  UserId: ""
};

const UserDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERDETAILS_UPDATE:
      return {
        ...state,
        loginData: action.payLoad
      };
      break;
    default:
      return state;
  }
};

export default UserDetailsReducer;
