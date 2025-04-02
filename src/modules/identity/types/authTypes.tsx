// src/modules/identity/types/authTypes.ts

export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    roles: string[];
  }
  
  export interface AuthContextType {
    user: User | null;
    login: (credentials: LoginRequest) => Promise<void>;
    logout: () => Promise<void>;
    isAuthenticated: boolean;
    loading: boolean;
  }
  