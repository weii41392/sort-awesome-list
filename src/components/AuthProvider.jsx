import React from 'react';
import PropTypes from 'prop-types';
import { signInWithGithub, signOutFromGithub } from '../lib/firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [token, setToken] = React.useState();

  const value = React.useMemo(
    () => ({
      token,
      doSignIn: () => signInWithGithub().then(setToken),
      doSignOut: () => signOutFromGithub().then(() => setToken(null))
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthProvider;
