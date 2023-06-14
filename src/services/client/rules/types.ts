export interface IRules {
  id: string;
  name: string;
  is_verified: boolean;
  is_public: boolean;
  version: number;
}

export interface IIp {
  id?: string;
  ip_type: string;
  ip: string;
  created_at?: string;
  updated_at?: string;
}

export interface ResponseSwr<T> {
  data: T;
}
