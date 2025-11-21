import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAuth } from "@/hook/useAuth";
import { Loader2 } from "lucide-react";
import { PlatformVariant } from "@/model/PlatformVariant";
import ProfileSummary from "@/components/domain/AuthWidget/ProfileSummary/ProfileSummary";

interface AuthWidgetProps {
  className?: string;
  variant: PlatformVariant;
}

const AuthWidget = ({ className, variant }: AuthWidgetProps) => {
  const {
    user,
    loading: authLoading,
    signOut,
    handleCredentialResponse,
  } = useAuth();
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof google === "undefined" ||
      !buttonRef.current ||
      user ||
      authLoading
    ) {
      return;
    }

    try {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });

      google.accounts.id.renderButton(buttonRef.current, {
        theme: "outline",
        size: "large",
        text: "signin_with",
        shape: "pill",
      });
    } catch (error) {
      console.error('Failed to initialize Google Sign-In:', error);
    }
  }, [user, authLoading, handleCredentialResponse]);

  if (authLoading) {
    return (
      <div className={className}>
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  return (
    <AnimatePresence mode="popLayout">
      {user ? (
        <motion.div
          key="profile"
          layoutId="auth-widget"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <ProfileSummary
            displayName={user.name}
            photoURL={user.picture}
            onSignOut={signOut}
            className={className}
            variant={variant}
          />
        </motion.div>
      ) : (
        <motion.div
          key="signin"
          layoutId="auth-widget"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          ref={buttonRef}
          className={className}
        />
      )}
    </AnimatePresence>
  );
};

export default AuthWidget;
