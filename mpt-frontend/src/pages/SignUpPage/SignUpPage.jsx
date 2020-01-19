import React from 'react';

const css = {
  layout: 'mpt-signin-layout',
  formContainer: 'mpt-signin-form-container',
  form: 'mpt-signin-form',
  input: 'mpt-signin-form__input',
  submit: 'mpt-signin-form__submit',
};

export function SignUpPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
      <div className={css.formContainer}>
        <div className={css.form}>
          <h2
            style={{ textAlign: 'center', fontSize: '3rem', color: '#333', marginBottom: '48px' }}
          >
            Jestem influencerem
          </h2>

          <input type="text" name="username" className={css.input} placeholder="Imię" />
          <input type="text" name="username" className={css.input} placeholder="Nazwisko" />
          <input type="text" name="username" className={css.input} placeholder="Email" />
          <input type="password" name="password" className={css.input} placeholder="Hasło" />

          <button type="submit" className={css.submit}>
            Zaloguj
          </button>
        </div>
      </div>

      <div className={css.formContainer}>
        <div className={css.form}>
          <h2
            style={{ textAlign: 'center', fontSize: '3rem', color: '#333', marginBottom: '48px' }}
          >
            Szukam influencerów
          </h2>

          <input type="text" name="username" className={css.input} placeholder="Nazwa firmy" />
          <input type="text" name="username" className={css.input} placeholder="Email" />
          <input type="password" name="password" className={css.input} placeholder="Hasło" />

          <button type="submit" className={css.submit}>
            Zaloguj
          </button>
        </div>
      </div>
    </div>
  );
}
