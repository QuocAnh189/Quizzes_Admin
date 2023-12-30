import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api";
import PlayerResultType, { AnswerPlayerType } from "src/types/playerResultType";
import { RootState } from "../store";
import { TypePlayerResult } from "src/variable";

export const apiPlayerResult = createApi({
  reducerPath: "apiPlayerResult",
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
  tagTypes: ["PlayerResult"],
  endpoints: (builder) => ({
    getPlayerResults: builder.query<PlayerResultType[], void>({
      query: () => ({
        url: `api/playerResult`,
        method: "GET",
      }),
      providesTags: ["PlayerResult"],
    }),

    getPlayerResult: builder.query<PlayerResultType, { id: string }>({
      query: ({ id }) => ({
        url: `api/playerResult/${id}`,
        method: "GET",
      }),
      providesTags: ["PlayerResult"],
    }),

    createPlayerResult: builder.mutation<
      PlayerResultType,
      { newPlayerResult: Omit<PlayerResultType, "_id"> }
    >({
      query: ({ newPlayerResult }) => ({
        url: `api/playerResult`,
        method: "POST",
        body: newPlayerResult,
      }),
      invalidatesTags: ["PlayerResult"],
    }),

    updatePlayerResult: builder.mutation<
      PlayerResultType,
      { id: string; answers: AnswerPlayerType[]; score: number }
    >({
      query: ({ id, answers, score }) => ({
        url: `api/playerResult/${id}`,
        method: "PUT",
        body: { answers, score },
      }),
      invalidatesTags: ["PlayerResult"],
    }),

    removePlayerResult: builder.mutation<
      PlayerResultType,
      { playerId: string }
    >({
      query: ({ playerId }) => ({
        url: `api/playerResult/${playerId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PlayerResult"],
    }),

    addPlayerResult: builder.mutation<
      PlayerResultType,
      { playerId: string; gameId: string; results: any }
    >({
      query: ({ playerId, gameId, results }) => ({
        url: `api/playerResult/${playerId}/results/${gameId}`,
        method: "PATCH",
        body: results,
      }),
      invalidatesTags: ["PlayerResult"],
    }),
  }),
});

export const {
  useGetPlayerResultQuery,
  useGetPlayerResultsQuery,
  useCreatePlayerResultMutation,
  useUpdatePlayerResultMutation,
  useAddPlayerResultMutation,
  useRemovePlayerResultMutation,
} = apiPlayerResult;
