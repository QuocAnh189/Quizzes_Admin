// Library
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

//api
import { apiAuth } from "./services/authApi";
import { apiUser } from "./services/userApi";
import { apiQuiz } from "./services/quizApi";
import { apiQuestion } from "./services/questionApi";
import { apiCategory } from "./services/categoryApi";
import { apiGame } from "./services/gameApi";
import { apiLeaderBoard } from "./services/leaderBoardApi";
import { apiPlayerResult } from "./services/playerResultApi";

// Slices
import authReducer from "./slices/authSlice";
import statusReducer from "./slices/statusSlice";
import userReducer from "./slices/userSlice";
import quizReducer from "./slices/quizSlice";
import questionReducer from "./slices/questionSlice";
import gameReducer from "./slices/gameSlice";
import leaderboardReducer from "./slices/leaderboardSlice";
import playerResultReducer from "./slices/playerResultSlice";

const store = configureStore({
  reducer: {
    [apiAuth.reducerPath]: apiAuth.reducer,
    [apiQuiz.reducerPath]: apiQuiz.reducer,
    [apiQuestion.reducerPath]: apiQuestion.reducer,
    [apiUser.reducerPath]: apiUser.reducer,
    [apiGame.reducerPath]: apiGame.reducer,
    [apiLeaderBoard.reducerPath]: apiLeaderBoard.reducer,
    [apiPlayerResult.reducerPath]: apiPlayerResult.reducer,
    [apiCategory.reducerPath]: apiCategory.reducer,

    auth: authReducer,
    status: statusReducer,
    user: userReducer,
    quiz: quizReducer,
    question: questionReducer,
    game: gameReducer,
    leaderboard: leaderboardReducer,
    playerResult: playerResultReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: {
        ignoredPaths: [
          "ignoredPath",
          "ignoredNested.one",
          "ignoredNested.two",
          "items.data",
        ],
      },
    }).concat([
      apiAuth.middleware,
      apiQuiz.middleware,
      apiQuestion.middleware,
      apiUser.middleware,
      apiGame.middleware,
      apiLeaderBoard.middleware,
      apiPlayerResult.middleware,
      apiCategory.middleware,
    ]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
