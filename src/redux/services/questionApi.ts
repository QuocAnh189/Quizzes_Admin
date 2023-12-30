import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api";
import QuestionType from "src/types/questionType";
import { RootState } from "../store";

export const apiQuestion = createApi({
  reducerPath: "apiQuestion",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.authData?.accessToken;

      headers.set("Content-Type", "application/json");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  keepUnusedDataFor: 20,
  tagTypes: ["Question"],
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionType[], void>({
      query: () => ({
        url: "api/question",
        method: "GET",
      }),
      providesTags: ["Question"],
    }),

    getQuestion: builder.query<QuestionType, { QuestionId: string }>({
      query: ({ QuestionId }) => ({
        url: `api/question/${QuestionId}`,
        method: "GET",
      }),
      providesTags: ["Question"],
    }),

    createQuestion: builder.mutation<
      QuestionType,
      { newQuestion: Omit<QuestionType, "_id"> }
    >({
      query: ({ newQuestion }) => ({
        url: `api/question`,
        method: "POST",
        body: newQuestion,
      }),
      invalidatesTags: ["Question"],
    }),

    updateQuestion: builder.mutation<
      QuestionType,
      { id: string; newQuestion: QuestionType }
    >({
      query: ({ id, newQuestion }) => ({
        url: `api/question/${id}`,
        method: "PUT",
        body: { newQuestion },
      }),
      invalidatesTags: ["Question"],
    }),

    deleteQuestion: builder.mutation<void, { QuestionId: string }>({
      query: ({ QuestionId }) => ({
        url: `api/question/${QuestionId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Question"],
    }),
  }),
});

export const {
  useGetQuestionQuery,
  useGetQuestionsQuery,
  useCreateQuestionMutation,
  useUpdateQuestionMutation,
  useDeleteQuestionMutation,
} = apiQuestion;
