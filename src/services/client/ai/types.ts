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

export interface IBodyCreateMyDetector {
  learner_id: string;
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
export interface IBodyUpdateMyMyDetector
  extends Omit<Partial<IMyDetector>, 'id'> {
  id: number;
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
export interface IMyDetector {
  id: number;
  created_at: string;
  stoped_at: string;
  is_running: boolean;
  predict_thread_id: number;
  sniffing_thread_id: number;
  learner: number;
  listener: number;
}

export interface IMyDetectorData {
  id: number;
  time: string;
  src_ip: string;
  dst_ip: string;
  src_port: number;
  dst_port: number;
  src_mac: string;
  dst_mac: string;
  fc_request: number;
  is_attack: number;
  test_instance: number;
}

export interface IResponseAllObjectsInfo {
  has_listener: boolean;
  has_learner: boolean;
  has_detectors: boolean;
}

export enum AiEndPoints {
  MY_LISTENER = 'my_listeners',
  MY_LEANER = 'my_learner',
  MY_DETECTION = 'my_detectioner',
  ALL_OBJECTS_INFO = 'all_objects_info',
  INTERFACE_LIST = 'interfaces_list',
  LEARNING_DATA_PERIOD = 'learning_data_period',
  MODEL_LEARNING_DIAGRAM = 'model_learning_diagram',
}
