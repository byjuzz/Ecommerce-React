// src/modules/identity/context/AuthContext.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContextType, User, LoginRequest } from '../types/authTypes';
import * as authService from '../services/authService';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeUser = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const currentUser = await authService.fetchCurrentUser();
        setUser(currentUser);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeUser();
  }, []);

  const login = async (credentials: LoginRequest) => {
    const token = await authService.login(credentials);
    localStorage.setItem('token', token);
    const currentUser = await authService.fetchCurrentUser();
    setUser(currentUser);
  };

  const logout = async () => {
    await authService.logout();
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Exporta el hook personalizado
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return context;
};
