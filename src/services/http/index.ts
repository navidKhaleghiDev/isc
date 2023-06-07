/* eslint-disable class-methods-use-this */

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}
export const BASE_URL_CLIENT = 'http://192.168.1.57:8004';

const STORAGE_KEY = 'token';

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  // 'Access-Control-Allow-Credentials': true,
  // 'X-Requested-With': 'XMLHttpRequest',
};

const injectToken = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  try {
    const token = localStorage.getItem(STORAGE_KEY);
    const newConfig = config;
    if (token != null) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }
    return newConfig;
  } catch (error: any) {
    throw new Error(error);
  }
};

type FetcherResponse<Data = unknown> = Data | Promise<Data>;
class Http {
  // token: string;

  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: BASE_URL_CLIENT,
      headers,
      // withCredentials: true,
    });

    http.interceptors.request.use(injectToken, (error) =>
      Promise.reject(error)
    );

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        return this.handleError(response);
      }
    );

    this.instance = http;
    return http;
  }

  fetcher(url: string, config?: AxiosRequestConfig): FetcherResponse<Response> {
    return this.get(url, config);
  }

  async get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  async post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  async put<T>(url: string, data: object, config?: AxiosRequestConfig) {
    return this.http
      .put<T>(url, data, config)
      .then((res) => this.handleSuccess<T>(res))
      .catch(this.handleError);
  }

  patch<T>(url: string, data: object, config?: AxiosRequestConfig) {
    return this.http.patch<T>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  setAuthHeader(token: string) {
    this.http.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem(STORAGE_KEY, token);
  }

  removeAuthHeader() {
    this.http.defaults.headers.common.Authorization = '';
    localStorage.removeItem(STORAGE_KEY);
  }

  private handleSuccess<T>(response: AxiosResponse<T>) {
    return response.data;
  }

  private handleError<T>(error: Error | AxiosError): T {
    if (axios.isAxiosError(error)) {
      const { status } = error;
      switch (status) {
        case StatusCode.InternalServerError: {
          // Handle InternalServerError
          break;
        }
        case StatusCode.Forbidden: {
          // Handle Forbidden
          break;
        }
        case StatusCode.Unauthorized: {
          // Handle Unauthorized
          this.removeAuthHeader();
          window.location.reload();
          break;
        }
        case StatusCode.TooManyRequests: {
          // Handle TooManyRequests
          break;
        }
        default:
          throw error.response?.data;
      }
      throw error.response?.data;
    }
    throw error;
  }
}
const http = new Http();
export { type AxiosRequestConfig, http };
