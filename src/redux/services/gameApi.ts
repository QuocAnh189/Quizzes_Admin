import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api";
// import GameType from 'src/app/types/gameType';
import GameType from "src/types/gameType";
import { RootState } from "../store";

export const apiGame = createApi({
  reducerPath: "apiGame",
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
  tagTypes: ["Game"],
  endpoints: (builder) => ({
    getGames: builder.query<GameType[], void>({
      query: () => ({
        url: `api/game`,
        method: "GET",
      }),
      providesTags: ["Game"],
    }),

    getGame: builder.query<GameType[], { gameId: string }>({
      query: ({ gameId }) => ({
        url: `api/game/${gameId}`,
        method: "GET",
      }),
      providesTags: ["Game"],
    }),

    createGame: builder.mutation<GameType, { newGame: Omit<GameType, "_id"> }>({
      query: ({ newGame }) => ({
        url: `api/game`,
        method: "POST",
        body: newGame,
      }),
      invalidatesTags: ["Game"],
    }),

    updateGame: builder.mutation<GameType, { id: string; newGame: GameType }>({
      query: ({ id, newGame }) => ({
        url: `api/game/${id}`,
        method: "PUT",
        body: { newGame },
      }),
      invalidatesTags: ["Game"],
    }),

    deleteGame: builder.mutation<void, { gameId: string }>({
      query: ({ gameId }) => ({
        url: `api/game/${gameId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Game"],
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetGameQuery,
  useCreateGameMutation,
  useUpdateGameMutation,
  useDeleteGameMutation,
} = apiGame;
