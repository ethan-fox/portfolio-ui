import type { AxiosInstance } from 'axios';
import { portfolioBackend } from './PortfolioBackend';
import type { ContentView } from '@/model/view/content';

class ContentClient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance = portfolioBackend) {
    this.client = client;
  }

  async getResume(): Promise<ContentView> {
    const response = await this.client.get<ContentView>('/content/resume');
    return response.data;
  }
}

export default ContentClient;
export const contentClient = new ContentClient();
