import QuizType from 'src/types/quizType';
import { API_ROUTE } from 'src/constants/apiRoute';
import httpRequest from '../api-client/httpRequest';

export const getQuizzes = () => {
  return httpRequest.get<QuizType[]>(API_ROUTE.quiz + '/');
};

export const getQuizById = (id: string) => {
  return httpRequest.get<QuizType>(API_ROUTE.quiz + `/${id}`);
};


export const createQuiz = (Quiz: QuizType) => {
  return httpRequest.post<QuizType>(API_ROUTE.quiz + '/', Quiz);
};

export const updateQuiz = (Quiz: QuizType) => {
  return httpRequest.put<QuizType>(
    API_ROUTE.quiz + `/${Quiz._id}`,
    Quiz
  );
};

export const deleteQuiz = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.quiz + `/${id}`);
};


