import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api";
import QuizType from "src/types/quizType";
import { RootState } from "../store";

export const apiQuiz = createApi({
  reducerPath: "apiQuiz",
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
  tagTypes: ["Quiz"],
  endpoints: (builder) => ({
    getQuizzes: builder.query<QuizType[], void>({
      query: () => ({
        url: `api/quiz`,
        method: "GET",
      }),
      providesTags: ["Quiz"],
    }),

    getQuiz: builder.query<QuizType, { QuizId: string }>({
      query: ({ QuizId }) => ({
        url: `api/quiz/${QuizId}`,
        method: "GET",
      }),
      providesTags: ["Quiz"],
    }),

    createQuiz: builder.mutation<QuizType, { newQuiz: Omit<QuizType, "_id"> }>({
      query: ({ newQuiz }) => ({
        url: `api/quiz`,
        method: "POST",
        body: newQuiz,
      }),
      invalidatesTags: ["Quiz"],
    }),

    updateQuiz: builder.mutation<QuizType, { id: string; newQuiz: QuizType }>({
      query: ({ id, newQuiz }) => ({
        url: `api/quiz/${id}`,
        method: "PUT",
        body: { newQuiz },
      }),
      invalidatesTags: ["Quiz"],
    }),

    deleteQuiz: builder.mutation<void, { QuizId: string }>({
      query: ({ QuizId }) => ({
        url: `api/quiz/${QuizId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Quiz"],
    }),
  }),
});

export const {
  useGetQuizzesQuery,
  useGetQuizQuery,
  useCreateQuizMutation,
  useUpdateQuizMutation,
  useDeleteQuizMutation,
} = apiQuiz;
