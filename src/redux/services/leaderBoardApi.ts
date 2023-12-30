import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api";
import LeaderBoardType, {
  AnswerLeaderBoardResultType,
} from "src/types/leaderboardType";
import { RootState } from "../store";

export const apiLeaderBoard = createApi({
  reducerPath: "apiLeaderBoard",
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
  keepUnusedDataFor: 2,
  tagTypes: ["LeaderBoard"],
  endpoints: (builder) => ({
    getLeaderBoards: builder.query<LeaderBoardType[], void>({
      query: () => ({
        url: `api/leaderBoard`,
        method: "GET",
      }),
      providesTags: ["LeaderBoard"],
    }),

    getLeaderBoard: builder.query<LeaderBoardType, { leaderBoardId: string }>({
      query: ({ leaderBoardId }) => ({
        url: `api/leaderBoard/${leaderBoardId}`,
        method: "GET",
      }),
      providesTags: ["LeaderBoard"],
    }),

    createLeaderBoard: builder.mutation<
      LeaderBoardType,
      { newLeaderBoard: Omit<LeaderBoardType, "_id"> }
    >({
      query: ({ newLeaderBoard }) => ({
        url: `api/leaderBoard`,
        method: "POST",
        body: newLeaderBoard,
      }),
      invalidatesTags: ["LeaderBoard"],
    }),

    updateLeaderBoard: builder.mutation<
      LeaderBoardType,
      { id: string; newLeaderBoard: LeaderBoardType }
    >({
      query: ({ id, newLeaderBoard }) => ({
        url: `api/leaderBoard/${id}`,
        method: "PUT",
        body: { newLeaderBoard },
      }),
      invalidatesTags: ["LeaderBoard"],
    }),

    deleteLeaderBoard: builder.mutation<void, { leaderBoardId: string }>({
      query: ({ leaderBoardId }) => ({
        url: `api/leaderBoard/${leaderBoardId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["LeaderBoard"],
    }),
  }),
});

export const {
  useGetLeaderBoardsQuery,
  useGetLeaderBoardQuery,
  useCreateLeaderBoardMutation,
  useUpdateLeaderBoardMutation,
  useDeleteLeaderBoardMutation,
} = apiLeaderBoard;
