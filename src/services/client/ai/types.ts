export enum EProtocol {
  DNP3 = 'dnp3',
  MOD_BUS = 'modbus',
}

export interface IBodyCreateMyListeners {
  protocol: string;
  port: number;
  interface: string;
  days: number;
  hours: number;
}

export interface IBodyCreateMyLearner {
  listener_id: string;
  first_record_time?: string;
  last_record_time?: string;
}

export interface IBodyUpdateMyListeners
  extends Omit<Partial<IMyListeners>, 'id'> {
  id: string;
}

export interface IResponseGetMyListeners {
  id: number;
  protocol: EProtocol;
  interface: string;
  port: number;
  is_active: boolean;
  created_at: string;
  stoped_at: string;
  sniffer_thread_id: number;
  consumer_thread_id: number;
}

export interface IMyListeners {
  id: number;
  protocol: EProtocol;
  interface: string;
  port: number;
  is_active: boolean;
  created_at: string;
  stoped_at: string;
  sniffer_thread_id: number;
  consumer_thread_id: number;
}

export interface IMyLearner {
  id: number;
  created_at: string;
  time_from: string;
  time_to: string;
  is_learning: 'True' | 'False';
  is_finished: 'True' | 'False';
  weights_model_path: string;
  json_model_path: string;
  scaler: string;
  history: string;
  threshold_error: number;
  learner_thread_id: number | null;
  listener: number;
  count: number;
  mean_square_error: number;
}
