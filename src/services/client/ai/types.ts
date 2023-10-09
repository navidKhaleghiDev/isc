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
