import { http } from '@src/services/http';
import { IServerResponse } from '@src/types/services';
import { aiEndPoint } from './endpoint';
import {
  IBodyCreateMyLearner,
  IBodyCreateMyListeners,
  IBodyUpdateMyListeners,
  IBodyCreateMyDetector,
  IBodyUpdateMyMyDetector,
} from './types';

export const API_CREATE_MY_LISTENERS = (body: IBodyCreateMyListeners) =>
  http.post<IBodyCreateMyListeners, IServerResponse<any>>(
    aiEndPoint('my_listeners'),
    body
  );

export const API_CREATE_MY_DETECTOR = (body: IBodyCreateMyDetector) =>
  http.post<IBodyCreateMyDetector, IServerResponse<any>>(
    aiEndPoint('my_detectioner'),
    body
  );

export const API_UPDATE_MY_DETECTOR = (body: IBodyUpdateMyMyDetector) =>
  http.patch<IBodyUpdateMyMyDetector, IServerResponse<any>>(
    aiEndPoint('my_detectioner', body?.id),
    body
  );

export const API_UPDATE_MY_LISTENERS = (body: IBodyUpdateMyListeners) =>
  http.patch<IBodyUpdateMyListeners, IServerResponse<any>>(
    aiEndPoint('my_listeners', body?.id),
    body
  );

export const API_CREATE_MY_LEARNER = (body: IBodyCreateMyLearner) =>
  http.post<IBodyCreateMyLearner, IServerResponse<any>>(
    aiEndPoint('my_learner'),
    body
  );
