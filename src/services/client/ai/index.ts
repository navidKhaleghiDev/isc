import { http } from '@src/services/http';
import { IServerResponse } from '@src/types/services';
import { aiEndPoint } from './endpoint';
import {
  IBodyCreateMyLearner,
  IBodyCreateMyListeners,
  IBodyUpdateMyListeners,
  IBodyCreateMyDetector,
  IBodyUpdateMyMyDetector,
  EndPoints,
} from './types';

export const API_CREATE = (
  body: IBodyCreateMyDetector | IBodyCreateMyListeners | IBodyCreateMyLearner,
  end_point: EndPoints
) => {
  return http.post<
    IBodyCreateMyDetector | IBodyCreateMyListeners | IBodyCreateMyLearner,
    IServerResponse<any>
  >(aiEndPoint(end_point), body);
};

export const API_UPDATE = (
  body: IBodyUpdateMyMyDetector | IBodyUpdateMyListeners,
  end_point: EndPoints
) => {
  return http.patch<
    IBodyUpdateMyMyDetector | IBodyUpdateMyListeners,
    IServerResponse<any>
  >(aiEndPoint(end_point), body);
};
