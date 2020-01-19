import React from 'react';

import { TextPlaceholder } from '@/Placeholder';

import './HelpPage.scss';

export function HelpPage() {
  return (
    <div className="help-page">
      <TextPlaceholder>asdasd</TextPlaceholder>

      <div className="help-page__container">
        <div className="help-page__box">
          <h2 className="help-page__contact-headline">Zadaj nam pytanie</h2>

          <input type="text" placeholder="Twoje pytanie..." className="help-page__contact-input" />

          <button type="submit" className="help-page__contact-btn">
            Wyślij
          </button>
        </div>

        <div className="help-page__box">
          <h2 className="help-page__contact-headline">Kontakt</h2>

          <p>
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non
            felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.
            Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac,
            laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis.
          </p>
        </div>
      </div>
    </div>
  );
}
