import PlayerResultType from 'src/types/playerResultType';
import { API_ROUTE } from 'src/constants/apiRoute';
import httpRequest from '../api-client/httpRequest';

export const getPlayerResults = () => {
  return httpRequest.get<PlayerResultType[]>(API_ROUTE.playerresult + '/');
};

export const getPlayerResultById = (id: string) => {
  return httpRequest.get<PlayerResultType>(API_ROUTE.playerresult + `/${id}`);
};


export const createPlayerResult = (PlayerResult: PlayerResultType) => {
  return httpRequest.post<PlayerResultType>(API_ROUTE.playerresult + '/', PlayerResult);
};

export const updatePlayerResult = (PlayerResult: PlayerResultType) => {
  return httpRequest.put<PlayerResultType>(
    API_ROUTE.playerresult + `/${PlayerResult._id}`,
    PlayerResult
  );
};

export const deletePlayerResult = (id: string) => {
  return httpRequest.delete<void>(API_ROUTE.playerresult + `/${id}`);
};


