import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api";
import UserType from "src/types/userType";
import { RootState } from "../store";

export const apiUser = createApi({
  reducerPath: "apiUser",
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
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], void>({
      query: () => ({
        url: "api/user",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    getUser: builder.query<UserType, { userId: string }>({
      query: ({ userId }) => ({
        url: `api/user/${userId}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    createUser: builder.mutation<UserType, { newUser: Omit<UserType, "_id"> }>({
      query: ({ newUser }) => ({
        url: `api/user`,
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["User"],
    }),

    updateUser: builder.mutation<
      UserType,
      { userId: string; newUser: UserType }
    >({
      query: ({ userId, newUser }) => ({
        url: `api/user/${userId}`,
        method: "PUT",
        body: newUser,
      }),
      invalidatesTags: ["User"],
    }),

    deleteUser: builder.mutation<void, { userId: string }>({
      query: ({ userId }) => ({
        url: `api/user/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = apiUser;
