import { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LogOut, Loader2 } from 'lucide-react';

interface MobileProfileSummaryProps {
  displayName: string | null;
  photoURL: string | null;
  onSignOut: () => Promise<void>;
  className?: string;
}

const MobileProfileSummary = ({ displayName, photoURL, onSignOut, className }: MobileProfileSummaryProps) => {
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await onSignOut();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex gap-3 justify-between ${className}`}>
      <div className="flex flex-col gap-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src={photoURL || undefined} alt={displayName || 'User'} />
          <AvatarFallback>{displayName?.charAt(0) || '?'}</AvatarFallback>
        </Avatar>
        <span className="font-semibold">{displayName}</span>
      </div>

      <div className="flex items-end">
        <Button
          variant="outline"
          size="sm"
          onClick={handleSignOut}
          disabled={loading}
          className="cursor-pointer justify-start"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <LogOut className="h-4 w-4 mr-2" />
          )}
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default MobileProfileSummary;
