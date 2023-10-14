import { http } from '@src/services/http';
import { IServerResponse } from '@src/types/services';

import {
  E_AI_MY_LISTENERS,
  E_AI_UPDATE_MY_LISTENERS,
  E_AI_MY_LEARNER,
} from './endpoint';
import {
  IBodyCreateMyLearner,
  IBodyCreateMyListeners,
  IBodyUpdateMyListeners,
} from './types';

export const API_CREATE_MY_LISTENERS = (body: IBodyCreateMyListeners) =>
  http.post<IBodyCreateMyListeners, IServerResponse<any>>(
    E_AI_MY_LISTENERS,
    body
  );

export const API_UPDATE_MY_LISTENERS = (body: IBodyUpdateMyListeners) =>
  http.patch<IBodyUpdateMyListeners, IServerResponse<any>>(
    E_AI_UPDATE_MY_LISTENERS(body?.id),
    body
  );

export const API_CREATE_MY_LEARNER = (body: IBodyCreateMyLearner) =>
  http.post<IBodyCreateMyLearner, IServerResponse<any>>(E_AI_MY_LEARNER, body);
