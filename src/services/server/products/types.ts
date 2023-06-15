export interface IServerProducts {
  id: string;
  brand?: {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
  };
  category?: {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
  };
  model: string;
  description: string;
  created_at: string;
  updated_at: string;
}
