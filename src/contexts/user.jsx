import { createContext, useEffect, useReducer } from "react";
import { CreatAction } from "../utils/reducer";
import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase-api.config";
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

// the actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};
// UserProvider is the actual component, which provides the context's values for the childrens
export const UserProvider = ({ children }) => {
  const setCurrentUser = (user) => {
    dispatch(CreatAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      user && createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const value = { currentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
