// import httpRequest from '@/api-client/httpRequest';
import httpRequest from "../api-client/httpRequest";

import { API_ROUTE } from "src/constants/apiRoute";
import UserType from "src/types/userType";
import AuthType, { LoginPayload, SignUpPayload } from "src/types/authType";

export const getUserProfile = () => {
  return httpRequest.get<UserType>("/profile");
};

export const signIn = (data: any) => {
  return httpRequest.post<AuthType, any>(
    API_ROUTE.auth + '/login',
    data
  );
};

export const signUp = (data: SignUpPayload) => {
  return httpRequest.post<any, SignUpPayload>(
    API_ROUTE.auth + '/sign-up',
    data
  );
};

export const signOut = () => {
  return httpRequest.post(API_ROUTE.auth + '/logout', null);
};

export const refreshToken = () => {
  return httpRequest.post(API_ROUTE.auth + '/refresh-token', null);
};
