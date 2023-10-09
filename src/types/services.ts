export interface IServerResponse<T> {
  data: T;
}

export interface PaginationResponseSwr<T> {
  data: {
    count: number;
    next: string;
    previous: string;
    results: T;
  };
}

export interface IPagination {
  pageSize: number;
  page: number;
  filter?: string;
}
