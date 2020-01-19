import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { login, useAuthenticationContext } from '@/authentication';

export function useSignInForm() {
  const { onLogin } = useAuthenticationContext();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function submitForm() {
    if (!username || !password) {
      return;
    }

    setError(null);

    const { success } = await login({
      username,
      password,
    });

    if (success) {
      onLogin();
      history.push('/');
    } else {
      setError('Invalid username or password');
    }
  }

  function updateUsername(event) {
    setUsername(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  return {
    username,
    updateUsername,
    password,
    updatePassword,
    submitForm,
    error,
  };
}
