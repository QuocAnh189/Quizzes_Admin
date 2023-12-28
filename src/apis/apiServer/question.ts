import QuestionType from 'src/types/questionType';
import { API_ROUTE } from 'src/constants/apiRoute';
import httpRequest from '../api-client/httpRequest';

export const getQuestions = () => {
  return httpRequest.get<QuestionType[]>(API_ROUTE.question + '/');
};

export const getQuestionById = (id: string) => {
  return httpRequest.get<QuestionType>(API_ROUTE.question + `/${id}`);
};


export const createQuestion = (Question: QuestionType) => {
  return httpRequest.post<QuestionType>(API_ROUTE.question + '/', Question);
};

export const updateQuestion = (Question: QuestionType) => {
  return httpRequest.put<QuestionType>(
    API_ROUTE.question + `/${Question._id}`,
    Question
  );
};

export const deleteQuestion = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.question + `/${id}`);
};


