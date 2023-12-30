import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import PlayerResultType, { InitPlayerResult } from "src/types/playerResultType";

type InitialType = {
  playerResult: PlayerResultType;
};

const initialState = {
  playerResult: InitPlayerResult,
} as InitialType;

const PlayerResultSlice = createSlice({
  name: "playerResult",
  initialState,
  reducers: {
    setPlayerResult: (state, action: PayloadAction<PlayerResultType>) => {
      state.playerResult = action.payload;
    },
  },
});
export const { setPlayerResult } = PlayerResultSlice.actions;

const playerResultReducer = PlayerResultSlice.reducer;
export default playerResultReducer;
