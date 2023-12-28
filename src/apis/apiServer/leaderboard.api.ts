import LeaderBoardType from 'src/types/leaderboardType';
import { API_ROUTE } from 'src/constants/apiRoute';
import httpRequest from '../api-client/httpRequest';

export const getLeaderBoards = () => {
  return httpRequest.get<LeaderBoardType[]>(API_ROUTE.leaderboard + '/');
};

export const getLeaderBoardById = (id: string) => {
  return httpRequest.get<LeaderBoardType>(API_ROUTE.leaderboard + `/${id}`);
};


export const createLeaderBoard = (LeaderBoard: LeaderBoardType) => {
  return httpRequest.post<LeaderBoardType>(API_ROUTE.leaderboard + '/', LeaderBoard);
};

export const updateLeaderBoard = (LeaderBoard: LeaderBoardType) => {
  return httpRequest.put<LeaderBoardType>(
    API_ROUTE.leaderboard + `/${LeaderBoard._id}`,
    LeaderBoard
  );
};

export const deleteLeaderBoard = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.leaderboard + `/${id}`);
};


