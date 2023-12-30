import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import QuestionType,{InitQuestion} from "src/types/questionType";

type InitialType = {
    question: QuestionType;
};

const initialState = {
    question: InitQuestion,
} as InitialType;

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestion: (state, action: PayloadAction<QuestionType>) => {
      state.question = action.payload;
    },
  },
});
export const { setQuestion } = questionSlice.actions;

const questionReducer = questionSlice.reducer;
export default questionReducer;
