import { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LogOut, Loader2 } from 'lucide-react';

interface ProfileSummaryProps {
  displayName: string | null;
  photoURL: string | null;
  onSignOut: () => Promise<void>;
  className?: string;
}

const ProfileSummary = ({ displayName, photoURL, onSignOut, className }: ProfileSummaryProps) => {
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
    <div className={`flex items-center gap-3 ${className}`}>
      <Avatar className="h-10 w-10">
        <AvatarImage src={photoURL || undefined} alt={displayName || 'User'} />
        <AvatarFallback>{displayName?.charAt(0) || 'U'}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium leading-none">{displayName}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSignOut}
          disabled={loading}
          className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground justify-start"
        >
          {loading ? (
            <Loader2 className="h-3 w-3 animate-spin mr-1" />
          ) : (
            <LogOut className="h-3 w-3 mr-1" />
          )}
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default ProfileSummary;
