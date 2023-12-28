import GameType from 'src/types/gameType';
import { API_ROUTE } from 'src/constants/apiRoute';
import httpRequest from '../api-client/httpRequest';

export const getGames = () => {
  return httpRequest.get<GameType[]>(API_ROUTE.game + '/');
};

export const getGameById = (id: string) => {
  return httpRequest.get<GameType>(API_ROUTE.game + `/${id}`);
};


export const createGame = (Game: GameType) => {
  return httpRequest.post<GameType>(API_ROUTE.game + '/', Game);
};

export const updateGame = (Game: GameType) => {
  return httpRequest.put<GameType>(
    API_ROUTE.game + `/${Game._id}`,
    Game
  );
};

export const deleteGame = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.game + `/${id}`);
};


