import { useEffect, useRef } from 'react';
import { useAuth } from '@/hook/useAuth';
import { Loader2 } from 'lucide-react';
import ProfileSummary from '@/components/domain/ProfileSummary/ProfileSummary';

interface AuthWidgetProps {
  className?: string;
}

const AuthWidget = ({ className }: AuthWidgetProps) => {
  const { user, loading: authLoading, signOut, handleCredentialResponse } = useAuth();
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof google === 'undefined' || !buttonRef.current || user || authLoading) {
      return;
    }

    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
      buttonRef.current,
      {
        theme: 'outline',
        size: 'large',
        text: 'signin_with',
        shape: 'pill',
      }
    );
  }, [user, authLoading, handleCredentialResponse]);

  if (authLoading) {
    return (
      <div className={className}>
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (user) {
    return (
      <ProfileSummary
        displayName={user.name}
        photoURL={user.picture}
        onSignOut={signOut}
        className={className}
      />
    );
  }

  return <div ref={buttonRef} className={className}></div>;
};

export default AuthWidget;
