import axios, { type AxiosInstance } from 'axios'
import type { ContactRequest } from '@/model/api/contact'
import type { ContactView } from '@/model/view/contact'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://portfolio-api-3rri4wydga-uc.a.run.app'

class SubscriberClient {
  private client: AxiosInstance

  constructor(baseUrl: string = API_BASE_URL) {
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    })
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
