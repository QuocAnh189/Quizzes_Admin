import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import UserType, { InitUser } from "src/types/userType";

type InitialType = {
  user: UserType;
};

const initialState = {
  user: InitUser,
} as InitialType;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
