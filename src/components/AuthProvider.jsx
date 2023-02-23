import React from 'react';
import PropTypes from 'prop-types';
import { signInWithGithub, signOutFromGithub } from '../lib/firebase';
import { validateToken } from '../lib/api';

const TOKEN = 'token';
const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [token, setToken] = React.useState();

  const isAuthenticated = React.useCallback(() => {
    const storedToken = localStorage.getItem(TOKEN);
    if (storedToken) {
      setToken(storedToken);
      return true;
    }
    return false;
  }, []);

  const doSignIn = React.useCallback(() => {
    return signInWithGithub().then((newToken) => {
      localStorage.setItem(TOKEN, newToken);
      setToken(newToken);
    });
  }, []);

  const doSignOut = React.useCallback(() => {
    return signOutFromGithub().then(() => {
      localStorage.removeItem(TOKEN);
      setToken(null);
    });
  }, []);

  const value = React.useMemo(
    () => ({ token, isAuthenticated, doSignIn, doSignOut }),
    [token, isAuthenticated, doSignIn, doSignOut]
  );

  React.useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN);
    if (storedToken) {
      validateToken(storedToken).then((isValid) => {
        if (!isValid) {
          localStorage.removeItem(TOKEN);
          setToken(null);
        }
      });
    }
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthProvider;
