// src/modules/identity/types/authTypes.ts
//this interface defines the structure of the authentication-related data and functions used in the application.
export interface LoginRequest {
    email: string;
    password: string;
  }
  //user define the structure of a user object
  export interface User {
    id: string;
    name: string;
    email: string;
    roles: string[];
  }
  //authContextType defines the shape of the authentication context, including user information, login and logout functions, authentication status, and loading state.
  export interface AuthContextType {
    user: User | null;
    login: (credentials: LoginRequest) => Promise<void>;
    logout: () => Promise<void>;
    isAuthenticated: boolean;
    loading: boolean;
  }
  