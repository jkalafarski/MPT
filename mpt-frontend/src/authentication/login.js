// @flow strict

import decode from 'jwt-decode';

const TOKEN_KEY = 'auth-token';

type CredentialsType = $ReadOnly<{
  username: string,
  password: string,
}>;

export async function login(creds: CredentialsType) {
  try {
    const response = await fetch(
      'https://Influyou-env.uirxi5ppvm.us-east-1.elasticbeanstalk.com:8080/api/authentication/login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(creds),
      }
    );

    if (!response.ok) {
      return { success: false };
    }

    const token = await response.text();
    setToken(token);

    return { success: true };
  } catch (err) {
    console.error('Unable to login');

    return { success: false };
  }
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getLoggedUser() {
  const token = getToken();

  if (!token) {
    return null;
  }

  try {
    const decodedToken = decode(token);

    if (decodedToken.exp < Date.now() / 1000) {
      return null;
    }

    return { username: decodedToken.sub, token };
  } catch (err) {
    return null;
  }
}

function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
