import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type userType = {
  accessToken: string;
  email: string;
};
type initialStateType = {
  currentUser: userType | null;
};
const initialState: initialStateType = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<userType>) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
