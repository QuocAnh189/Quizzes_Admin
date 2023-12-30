import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import GameType, { InitGame } from "src/types/gameType";

type InitialType = {
  game: GameType;
};

const initialState = {
    game: InitGame,
} as InitialType;

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (state, action: PayloadAction<GameType>) => {
      state.game = action.payload;
    },
  },
});
export const { setGame } = gameSlice.actions;

const gameReducer = gameSlice.reducer;
export default gameReducer;
