import UserType from 'src/types/userType';
import { API_ROUTE } from 'src/constants/apiRoute';
import httpRequest from '../api-client/httpRequest';

export const getUsers = () => {
  return httpRequest.get<UserType[]>(API_ROUTE.user + '/');
};

export const getUserById = (id: string) => {
  return httpRequest.get<UserType>(API_ROUTE.user + `/${id}`);
};


export const createUser = (User: UserType) => {
  return httpRequest.post<UserType>(API_ROUTE.user + '/', User);
};

export const updateUser = (User: UserType) => {
  return httpRequest.put<UserType>(
    API_ROUTE.user + `/${User._id}`,
    User
  );
};

export const deleteUser = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.user + `/${id}`);
};


