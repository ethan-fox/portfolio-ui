import axios, { type AxiosInstance } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

class PortfolioBackend {
  private static instance: AxiosInstance | null = null;

  static getInstance(): AxiosInstance {
    if (!PortfolioBackend.instance) {
      PortfolioBackend.instance = axios.create({
        baseURL: API_BASE_URL,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      PortfolioBackend.instance.interceptors.request.use((config) => {
        const googleToken = localStorage.getItem('googleToken');
        if (googleToken) {
          config.headers.Authorization = `Bearer ${googleToken}`;
        }
        return config;
      });

      PortfolioBackend.instance.interceptors.response.use(
        (response) => response,
        (error) => {
          if (error.response?.status === 401) {
            localStorage.removeItem('googleToken');
            localStorage.removeItem('user');
            window.location.href = '/';
          }
          return Promise.reject(error);
        }
      );
    }

    return PortfolioBackend.instance;
  }
}

export default PortfolioBackend;
export const portfolioBackend = PortfolioBackend.getInstance();
