import React, { useState, useEffect, useContext, useMemo, createContext } from 'react';

import { login, logout, getLoggedUser } from './login';

const AuthenticationDataContext = createContext(null);

export function AuthenticationDataProvider(props) {
  const { children } = props;

  const [authenticationData, setAuthenticationData] = useState({});

  useEffect(() => {
    const loggedUser = getLoggedUser();

    if (loggedUser) {
      setAuthenticationData({
        isLogged: true,
        username: loggedUser.username,
      });
    }
  }, []);

  function onLogin() {
    const loggedUser = getLoggedUser();

    if (loggedUser) {
      setAuthenticationData({
        isLogged: true,
        username: loggedUser.username,
      });
    }
  }

  function onLogout() {
    setAuthenticationData({});
  }

  return (
    <AuthenticationDataContext.Provider value={{ ...authenticationData, onLogin, onLogout }}>
      {children}
    </AuthenticationDataContext.Provider>
  );
}

export function useAuthenticationContext() {
  return useContext(AuthenticationDataContext);
}
