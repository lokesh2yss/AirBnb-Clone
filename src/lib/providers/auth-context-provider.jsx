import { createContext, useContext, useEffect, useState } from 'react';
import useQuery from '../hooks/useQuery';
import API_CONFIG from '@/config/api.config';

const AuthContext = createContext({
  authenticatedUser: null,
  setIsAuthenticated: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState({
    user: null,
    isAuthenticated: false,
  });

  const { data, isLoading, refetchQuery } = useQuery({
    url: API_CONFIG.USER.PROFILE,
  });

  useEffect(() => {
    setAuthenticatedUser({
      isAuthenticated: true,
      user: data,
    });
  }, [data]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <AuthContext.Provider
      value={{
        authenticatedUser,
        setAuthenticatedUser,
        refetchCurrentUser: refetchQuery,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('userAuthContext must be used within AuthContextProvider');
  }

  return context;
};

export { useAuthContext };

export default AuthContextProvider;
