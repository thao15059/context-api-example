import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (previousState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...previousState,
        currentUser: action.payload,
      };

    default:
      return previousState;
  }
};

export default userReducer;
