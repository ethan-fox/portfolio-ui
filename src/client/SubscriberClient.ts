import type { AxiosInstance } from 'axios';
import { portfolioBackend } from './PortfolioBackend';
import type { ContactRequest } from '@/model/api/contact';
import type { ContactView } from '@/model/view/contact';

class SubscriberClient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance = portfolioBackend) {
    this.client = client;
  }

  async getAll(): Promise<ContactView[]> {
    const response = await this.client.get<ContactView[]>('/subscriber/')
    return response.data
  }

  async create(data: ContactRequest): Promise<ContactView> {
    const response = await this.client.post<ContactView>('/subscriber/', data)
    return response.data
  }
}

export default SubscriberClient
export const subscriberClient = new SubscriberClient()
