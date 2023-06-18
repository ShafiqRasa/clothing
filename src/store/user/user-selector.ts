import { stateType } from "../store";
export const selectCurrentUser = (state: stateType) => state.user.currentUser;
