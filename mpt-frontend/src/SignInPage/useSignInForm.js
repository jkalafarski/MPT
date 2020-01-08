import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { login } from '@/authentication/login';

export function useSignInForm() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function submitForm() {
    if (!username || !password) {
      return;
    }

    const isLogged = await login({
      username,
      password,
    });

    if (isLogged) {
      history.push('/main');
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
  };
}
