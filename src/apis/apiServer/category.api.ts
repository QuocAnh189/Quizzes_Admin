import CategoryType from 'src/types/categoryType';
import { API_ROUTE } from 'src/constants/apiRoute';
import httpRequest from '../api-client/httpRequest';

export const getCategories = () => {
  return httpRequest.get<CategoryType[]>(API_ROUTE.category + '/');
};

export const getCategoryById = (id: string) => {
  return httpRequest.get<CategoryType>(API_ROUTE.category + `/${id}`);
};

export const createCategory = (Category: CategoryType) => {
  return httpRequest.post<CategoryType>(API_ROUTE.category + '/', Category);
};

export const updateCategory = (Category: CategoryType) => {
  return httpRequest.put<CategoryType>(
    API_ROUTE.category + `/${Category._id}`,
    Category
  );
};

export const deleteCategory = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.category + `/${id}`);
};


