import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import QuizType, { InitQuiz } from "src/types/quizType";

type InitialType = {
  quiz: QuizType;
};

const initialState = {
  quiz: InitQuiz,
} as InitialType;

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuiz: (state, action: PayloadAction<QuizType>) => {
      state.quiz = action.payload;
    },
  },
});
export const { setQuiz } = quizSlice.actions;

const quizReducer = quizSlice.reducer;
export default quizReducer;
