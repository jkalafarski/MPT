import React from 'react';

import { TextPlaceholder } from '@/Placeholder';

import './HelpPage.scss';

export function HelpPage() {
  return (
    <div className="help-page">
      <div className="help-page__text">
        Prosimy o kontakt w kwestiach związanych z użytkowaniem naszego serwisu przy użyciu
        poniższego formularza. Będziemy szczęśliwi, aby pomóc wam w kwestii waszych zapytań.
        <br />
        <br />
        Jeżeli potrzebujesz pomocy technicznej lub chcesz nawiązac współpracę proszę napisz
        wiadomość e-mail lub zadzwoń na podany poniżej numer telefonu.
      </div>

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
            Email: influ-kontakt@influ.pl
            <br />
            Telefon: 533 441 239
            <br />
            Godziny pracy:
            <br />
            poniedziałek - piątek 08:00 - 21:00
            <br />
            sobota - niedziela 08:00 - 19:00
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
