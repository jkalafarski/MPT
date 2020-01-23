import React from 'react';

import { TextPlaceholder, ImagePlaceholder } from '@/Placeholder';

import './PricesPage.scss';

export function PricesPage() {
  return (
    <div className="prices-page">
      <div className="prices-page__text">Dzięki aktywowaniu usługi, Użytkownik staje się na określony czas jej abonentem, dla którego przewidziany jest szereg wyszczególnionych poniżej usług rozszerzonych Serwisu zależnych od wykupionego abonamentu.</div>

      <div style={{ margin: '2rem 0' }} />

      <div className="prices-page__table">
        <div className="prices-page__record">
          <div className="prices-page__record-desc">
            Podstawowe konto - możesz swobodnie przeglądać wszystkich influencerów. Twoje oferty nie są w żaden sposób wyróżnione. Możesz nawiązać kontakt z maksymalnie 10 influencerami miesięcznie.
          </div>
          <div className="prices-page__record-separator" />
          <div className="prices-page__record-price">4,99 zł / miesiąc</div>
        </div>

        <div className="prices-page__record">
          <div className="prices-page__record-desc">Konto podstawowe + - możesz swobodnie przeglądać wszystkich influencerów. Twoje oferty nie są w żaden sposób wyróżnione. Możesz nawiązywać kontakt z dowolną liczbą influencerów.</div>
          <div className="prices-page__record-separator" />
          <div className="prices-page__record-price">9,99 zł / miesiąc</div>
        </div>

        <div className="prices-page__record">
          <div className="prices-page__record-desc">
            Konto premium - możesz swobodnie przeglądać wszystkich influencerów. Możesz wyróżnić 2 oferty na miesiąc. Możesz nawiązywać kontakt z dowolną liczbą influencerów.
          </div>
          <div className="prices-page__record-separator" />
          <div className="prices-page__record-price">19,99 zł / miesiąc</div>
        </div>

        <div className="prices-page__record">
          <div className="prices-page__record-desc">
            Konto premium + - możesz swobodnie przeglądać wszystkich influencerów. Wszytkie twoje oferty są wyróżnione. Możesz nawiązywać kontakt z dowolną liczbą influencerów.
          </div>
          <div className="prices-page__record-separator" />
          <div className="prices-page__record-price">39,99 zł / miesiąc</div>
        </div>
      </div>

      <ImagePlaceholder />
    </div>
  );
}
