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
