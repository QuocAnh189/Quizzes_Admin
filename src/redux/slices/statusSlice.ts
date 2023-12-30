import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const AuthSliceKey = "auth";

type InitialType = {
  create: boolean;
};

const initialState = {
  create: true,
} as InitialType;

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<boolean>) => {
      state.create = action.payload;
    },
  },
});
export const { setStatus } = statusSlice.actions;

const statusReducer = statusSlice.reducer;
export default statusReducer;
