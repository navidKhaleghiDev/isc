import { http } from '@src/services/http';
import { IServerResponse } from '@src/types/services';

import {
  IBodyCreateMyLearner,
  IBodyCreateMyListeners,
  IBodyUpdateMyListeners,
  IBodyCreateMyDetector,
  IBodyUpdateMyMyDetector,
  EAiEndpoints,
} from './types';
import { aiEndPoint } from './endpoint';

export const API_CREATE_MY_LISTENERS = (body: IBodyCreateMyListeners) =>
  http.post<IBodyCreateMyListeners, IServerResponse<any>>(
    aiEndPoint(EAiEndpoints.MY_LISTENER),
    body
  );

export const API_CREATE_MY_DETECTOR = (body: IBodyCreateMyDetector) =>
  http.post<IBodyCreateMyDetector, IServerResponse<any>>(
    aiEndPoint(EAiEndpoints.MY_DETECTION),
    body
  );

export const API_UPDATE_MY_DETECTOR = (body: IBodyUpdateMyMyDetector) =>
  http.patch<IBodyUpdateMyMyDetector, IServerResponse<any>>(
    aiEndPoint(EAiEndpoints.MY_DETECTION, body?.id),
    body
  );

export const API_UPDATE_MY_LISTENERS = (body: IBodyUpdateMyListeners) =>
  http.patch<IBodyUpdateMyListeners, IServerResponse<any>>(
    aiEndPoint(EAiEndpoints.MY_LISTENER, body?.id),
    body
  );

export const API_CREATE_MY_LEARNER = (body: IBodyCreateMyLearner) =>
  http.post<IBodyCreateMyLearner, IServerResponse<any>>(
    aiEndPoint(EAiEndpoints.MY_LEANER),
    body
  );
