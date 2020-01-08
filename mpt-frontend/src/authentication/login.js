// @flow strict

import decode from 'jwt-decode';

const TOKEN_KEY = 'auth-token';

type CredentialsType = $ReadOnly<{
  username: string,
  password: string,
}>;

export async function login(creds: CredentialsType) {
  try {
    const response = await fetch('http://localhost:8080/api/authentication/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(creds),
    });
    const token = await response.text();

    setToken(token);

    return true;
  } catch (err) {
    console.error('Unable to login');

    return false;
  }
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isLogged() {
  const token = getToken();

  console.log(token, hasTokenExpired(token));

  return !!token && !hasTokenExpired(token);
}

export function getLoggedUser() {
  const token = getToken();

  if (!token) {
    return {};
  }

  try {
    const decodedToken = decode(token);

    return { username: decodedToken.sub };
  } catch (err) {
    return {};
  }
}

function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function hasTokenExpired(token: string) {
  try {
    const decodedToken = decode(token);

    return decodedToken.exp < Date.now() / 1000;
  } catch (err) {
    return false;
  }
}
