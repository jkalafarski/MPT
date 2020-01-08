// @flow strict

import React from 'react';

import { useSignInForm } from './useSignInForm';
import './SignInPage.scss';

import { ImagePlaceholder } from '@/Placeholder';

const css = {
  layout: 'mpt-signin-layout',
  formContainer: 'mpt-signin-form-container',
  form: 'mpt-signin-form',
  input: 'mpt-signin-form__input',
  submit: 'mpt-signin-form__submit',
};

export function SignInPage() {
  const { username, password, updateUsername, updatePassword, submitForm } = useSignInForm();

  return (
    <div className={css.layout}>
      <ImagePlaceholder fullHeight />

      <div className={css.formContainer}>
        <div className={css.form}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={updateUsername}
            className={css.input}
            placeholder="Nazwa użytkownika"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={updatePassword}
            className={css.input}
            placeholder="Hasło"
          />

          <button type="submit" className={css.submit} onClick={submitForm}>
            Zaloguj
          </button>
        </div>
      </div>

      <ImagePlaceholder fullHeight />
    </div>
  );
}
