import React from 'react';

import { ImagePlaceholder } from '@/Placeholder';
import { useInfluencer } from './useInfluencer';
import './InfluencerPage.scss';

const imagesM = [
  'https://elasticbeanstalk-us-east-1-251924764019.s3.amazonaws.com/profile_images/AR-310089954.jpg',
  'https://elasticbeanstalk-us-east-1-251924764019.s3.amazonaws.com/profile_images/AdBuster.jpg',
  'https://elasticbeanstalk-us-east-1-251924764019.s3.amazonaws.com/profile_images/image.png',
  'https://elasticbeanstalk-us-east-1-251924764019.s3.amazonaws.com/profile_images/maxresdefault.jpg',
];

const imagesF = [
  'https://elasticbeanstalk-us-east-1-251924764019.s3.amazonaws.com/profile_images/image32.png',
];

export function InfluencerPage() {
  const { influencer, prevInfluencer, nextInfluencer } = useInfluencer();

  const { id, firstName, lastName, birthYear, description, followers } = influencer;

  const images = firstName ? (firstName[firstName.length - 1] === 'a' ? imagesF : imagesM) : [];
  const imageSrc = id ? images[parseInt(id.replace('-', ''), 16) % images.length] : null;

  return (
    <div className="influencer-page">
      <div className="influencer-panel">
        <button
          type="button"
          className="influencer-panel__btn"
          style={{ backgroundColor: '#aaa' }}
          onClick={prevInfluencer}
        >
          Poprzedni
        </button>

        <div className="influencer-panel__influencer-data">
          <div
            className="influencer-panel__photo"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />

          <div className="influencer-panel__info">
            <label>Imię</label>
            <div className="influencer-panel__info-box">{firstName}</div>

            <label>Nazwisko</label>
            <div className="influencer-panel__info-box">{lastName}</div>

            <label>Wiek</label>
            <div className="influencer-panel__info-box">{new Date().getFullYear() - birthYear}</div>

            <label>Liczba obserwujących</label>
            <div className="influencer-panel__info-box">{followers}</div>

            <label>Opis</label>
            <div
              className="influencer-panel__info-box"
              style={{ flexGrow: '1', marginBottom: '0' }}
            >
              {description}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="influencer-panel__btn"
          style={{ backgroundColor: '#b964ab' }}
          onClick={nextInfluencer}
        >
          Następny
        </button>
      </div>

      <ImagePlaceholder />
    </div>
  );
}
