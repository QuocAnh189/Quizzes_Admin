import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import LeaderBoardType, { InitLeaderBoard } from "src/types/leaderboardType";

type InitialType = {
  leaderboard: LeaderBoardType;
};

const initialState = {
    leaderboard: InitLeaderBoard,
} as InitialType;

const LeaderBoardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    setLeaderBoard: (state, action: PayloadAction<LeaderBoardType>) => {
      state.leaderboard = action.payload;
    },
  },
});
export const { setLeaderBoard } = LeaderBoardSlice.actions;

const leaderboardReducer = LeaderBoardSlice.reducer;
export default leaderboardReducer;
