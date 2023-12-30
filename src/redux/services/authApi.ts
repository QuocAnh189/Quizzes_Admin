import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api';
import AuthType from 'src/types/authType';
import { LoginType } from 'src/variable';

export const apiAuth = createApi({
    reducerPath: 'apiAuth',
    baseQuery: fetchBaseQuery({
        baseUrl: API
    }),
    keepUnusedDataFor: 20,
    endpoints: (builder) => ({
        loginUser: builder.mutation<AuthType, LoginType>({
            query: (formData) => ({
                url: 'api/auth/login',
                method: 'POST',
                body: formData
            })
        }),

        userLogOut: builder.mutation<any, { userId: string }>({
            query: (data) => ({
                url: `api/auth/logout/${data.userId}`,
                method: 'POST'
            })
        })
    })
});

export const {
    useLoginUserMutation,
    useUserLogOutMutation
} = apiAuth;
