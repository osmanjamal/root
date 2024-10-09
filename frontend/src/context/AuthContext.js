import React, { createContext, useState, useEffect } from 'react';
import { setAuthToken } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  });

  useEffect(() => {
    if (authState.token) {
      setAuthToken(authState.token);
    }
  }, [authState.token]);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};