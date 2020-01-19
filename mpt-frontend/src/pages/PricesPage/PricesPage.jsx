import React from 'react';

import { TextPlaceholder, ImagePlaceholder } from '@/Placeholder';

import './PricesPage.scss';

export function PricesPage() {
  return (
    <div className="prices-page">
      <TextPlaceholder />

      <div style={{ margin: '2rem 0' }} />

      <div className="prices-page__table">
        <div className="prices-page__record">
          <div className="prices-page__record-desc">
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non
            felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.
            Ut molestie a, ultricies porta urna.
          </div>
          <div className="prices-page__record-separator" />
          <div className="prices-page__record-price">4,99 zł / miesiąc</div>
        </div>

        <div className="prices-page__record">
          <div className="prices-page__record-desc">Lorem ipsum dolor sit amet enim.</div>
          <div className="prices-page__record-separator" />
          <div className="prices-page__record-price">9,99 zł / miesiąc</div>
        </div>

        <div className="prices-page__record">
          <div className="prices-page__record-desc">
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non
            felis. Maecenas malesuada elit lectus felis, malesuada ultricies.
          </div>
          <div className="prices-page__record-separator" />
          <div className="prices-page__record-price">19,99 zł / miesiąc</div>
        </div>

        <div className="prices-page__record">
          <div className="prices-page__record-desc">
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
          </div>
          <div className="prices-page__record-separator" />
          <div className="prices-page__record-price">39,99 zł / miesiąc</div>
        </div>
      </div>

      <ImagePlaceholder />
    </div>
  );
}
