import React from 'react';

import { ImagePlaceholder } from '@/Placeholder';
import './InfluencerPage.scss';

export function InfluencerPage() {
  return (
    <div className="influencer-page">
      <div className="influencer-panel">
        <button type="button" className="influencer-panel__btn" style={{ backgroundColor: '#aaa' }}>
          No go!
        </button>

        <div className="influencer-panel__influencer-data">
          <div className="influencer-panel__photo" />

          <div className="influencer-panel__info">
            <label>Imię</label>
            <div className="influencer-panel__info-box">Andrzej</div>

            <label>Nazwisko</label>
            <div className="influencer-panel__info-box">Kowalski</div>

            <div style={{ marginBottom: '2rem' }} />

            <label>Opis</label>
            <div
              className="influencer-panel__info-box"
              style={{ flexGrow: '1', marginBottom: '0' }}
            >
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui,
              non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et
              ligula. Ut molestie a, ultricies porta urna.
            </div>
          </div>
        </div>

        <button
          type="button"
          className="influencer-panel__btn"
          style={{ backgroundColor: '#b964ab' }}
        >
          Go!
        </button>
      </div>

      <ImagePlaceholder />
    </div>
  );
}
