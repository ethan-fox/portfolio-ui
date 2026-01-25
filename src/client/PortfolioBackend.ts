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
    }

    return PortfolioBackend.instance;
  }
}

export default PortfolioBackend;
export const portfolioBackend = PortfolioBackend.getInstance();
