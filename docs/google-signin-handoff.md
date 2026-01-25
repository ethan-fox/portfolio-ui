# Google Sign-In Handoff Prompt

Use this prompt to add Google Sign-In authentication to a React/Vite application.

---

## Task: Add Google Sign-In Authentication

Add Google Sign-In authentication to this React/Vite application. Use Google Identity Services (GIS) for the client-side flow with JWT token handling.

## Prerequisites

1. You need a Google Cloud Console project with OAuth 2.0 credentials
2. Create an OAuth 2.0 Client ID of type "Web application"
3. Add authorized JavaScript origins (e.g., `http://localhost:5173` for dev, your production domain)
4. Copy the Client ID for environment variables

## Files to Create

### 1. TypeScript declarations for Google SDK
Create `src/types/google.d.ts`:
```typescript
declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
          }) => void;
          prompt: () => void;
          renderButton: (
            element: HTMLElement,
            options: {
              theme?: 'outline' | 'filled_blue' | 'filled_black';
              size?: 'large' | 'medium' | 'small';
              text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
              shape?: 'rectangular' | 'pill' | 'circle' | 'square';
            }
          ) => void;
          disableAutoSelect: () => void;
        };
      };
    };
  }

  const google: Window['google'];
}

export {};
```

### 2. Auth Context Provider
Create `src/context/AuthContext.tsx`:
```typescript
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  picture: string;
}

interface GoogleCredentialResponse {
  credential: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => void;
  signOut: () => Promise<void>;
  getGoogleToken: () => string | null;
  handleCredentialResponse: (response: GoogleCredentialResponse) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('googleToken');

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  const handleCredentialResponse = async (response: GoogleCredentialResponse) => {
    try {
      const googleToken = response.credential;
      const payload = JSON.parse(atob(googleToken.split('.')[1]));

      const user: User = {
        id: payload.sub,
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
      };

      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('googleToken', googleToken);
    } catch (error) {
      console.error('Error during authentication:', error);
      throw error;
    }
  };

  const signInWithGoogle = () => {
    if (typeof google === 'undefined') {
      console.error('Google Identity Services not loaded');
      return;
    }

    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    google.accounts.id.prompt();
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('googleToken');
  };

  const getGoogleToken = (): string | null => {
    return localStorage.getItem('googleToken');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signInWithGoogle,
        signOut,
        getGoogleToken,
        handleCredentialResponse
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
```

### 3. useAuth Hook
Create `src/hook/useAuth.ts`:
```typescript
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

### 4. AuthWidget Component
Create `src/components/domain/AuthWidget/AuthWidget.tsx`:
```typescript
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAuth } from "@/hook/useAuth";
import { Loader2 } from "lucide-react";
import ProfileSummary from "@/components/domain/AuthWidget/ProfileSummary/ProfileSummary";

interface AuthWidgetProps {
  className?: string;
}

const AuthWidget = ({ className }: AuthWidgetProps) => {
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
```

### 5. ProfileSummary Components
Create `src/components/domain/AuthWidget/ProfileSummary/ProfileSummary.tsx`:
```typescript
import DesktopProfileSummary from './DesktopProfileSummary';
import MobileProfileSummary from './MobileProfileSummary';

interface ProfileSummaryProps {
  displayName: string | null;
  photoURL: string | null;
  onSignOut: () => Promise<void>;
  className?: string;
}

const ProfileSummary = (props: ProfileSummaryProps) => {
  return (
    <>
      <div className="md:hidden">
        <MobileProfileSummary {...props} />
      </div>
      <div className="hidden md:block">
        <DesktopProfileSummary {...props} />
      </div>
    </>
  );
};

export default ProfileSummary;
```

Create `src/components/domain/AuthWidget/ProfileSummary/DesktopProfileSummary.tsx`:
```typescript
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { LogOut, Loader2, X } from "lucide-react";

interface DesktopProfileSummaryProps {
  displayName: string | null;
  photoURL: string | null;
  onSignOut: () => Promise<void>;
  className?: string;
}

const DesktopProfileSummary = ({
  displayName,
  photoURL,
  onSignOut,
  className,
}: DesktopProfileSummaryProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

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
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className="cursor-pointer rounded-full hover:opacity-80 transition-opacity"
            aria-label="Your Profile"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={photoURL || undefined} alt="Your Profile" />
              <AvatarFallback>{displayName?.charAt(0) || "?"}</AvatarFallback>
            </Avatar>
          </button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <div className="flex flex-col gap-2 items-start">
            <div className="flex items-center justify-between w-full">
              <span className="font-mono">Your Profile</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Separator />
            <div className="flex items-center gap-2 w-full">
              <span className="font-semibold">{displayName}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                disabled={loading}
                className="cursor-pointer w-1/2 justify-start ml-auto"
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
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DesktopProfileSummary;
```

Create `src/components/domain/AuthWidget/ProfileSummary/MobileProfileSummary.tsx`:
```typescript
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
```

## Integration Steps

### 1. Add Google Identity Services script to `index.html`
Add inside `<head>`:
```html
<script src="https://accounts.google.com/gsi/client" async defer></script>
```

### 2. Wrap app with AuthProvider in `main.tsx`
```typescript
import { AuthProvider } from '@/context/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
```

### 3. Add environment variable
Add to `.env.development` and `.env.production`:
```
VITE_GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
```

### 4. (Optional) Add auth interceptors to API client
If you have an Axios-based API client, add interceptors for automatic Bearer token injection:
```typescript
// Request interceptor - add token to all requests
instance.interceptors.request.use((config) => {
  const googleToken = localStorage.getItem('googleToken');
  if (googleToken) {
    config.headers.Authorization = `Bearer ${googleToken}`;
  }
  return config;
});

// Response interceptor - handle 401 by clearing auth
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('googleToken');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);
```

### 5. Render AuthWidget in your navigation
Import and render `<AuthWidget />` wherever you want the sign-in button / profile to appear.

## Required Dependencies
- `motion` (framer-motion) - for animations
- `lucide-react` - for icons
- ShadCN UI components: Avatar, Button, Popover, Separator (or replace with your own)

## Usage
```typescript
import { useAuth } from '@/hook/useAuth';

const MyComponent = () => {
  const { user, loading, signOut } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Not signed in</div>;

  return <div>Welcome, {user.name}!</div>;
};
```

## Verification

After implementation:
- Test sign-in flow end-to-end
- Verify token persists across page refresh
- Test sign-out clears localStorage
- Verify API requests include Bearer token (if interceptors added)
