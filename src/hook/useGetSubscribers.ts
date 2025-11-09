import { useState, useEffect, useCallback } from 'react'
import { subscriberClient } from '@/client/SubscriberClient'
import type { ContactView } from '@/model/view/contact'

export const useGetSubscribers = () => {
  const [subscribers, setSubscribers] = useState<ContactView[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchSubscribers = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const data = await subscriberClient.getAll()
      setSubscribers(data)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch subscribers'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSubscribers()
  }, [fetchSubscribers])

  return { subscribers, isLoading, error, refetch: fetchSubscribers }
}
