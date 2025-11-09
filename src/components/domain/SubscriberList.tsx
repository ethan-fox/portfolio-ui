import { useGetSubscribers } from '@/hook/useGetSubscribers'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface SubscriberListProps {
  onRefetchRequest?: (refetch: () => Promise<void>) => void
}

const SubscriberList = ({ onRefetchRequest }: SubscriberListProps) => {
  const { subscribers, isLoading, error, refetch } = useGetSubscribers()

  if (onRefetchRequest) {
    onRefetchRequest(refetch)
  }

  if (isLoading) {
    return (
      <div className="rounded-md border">
        <div className="p-4">
          <p className="text-sm text-muted-foreground">Loading subscribers...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-md border">
        <div className="p-4">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      </div>
    )
  }

  if (subscribers.length === 0) {
    return (
      <div className="rounded-md border">
        <div className="p-4">
          <p className="text-sm text-muted-foreground">No subscribers yet. Be the first!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subscribers</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subscribers.map((subscriber) => (
            <TableRow key={subscriber.id}>
              <TableCell className="font-medium">
                {subscriber.first_name} {subscriber.last_name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default SubscriberList
