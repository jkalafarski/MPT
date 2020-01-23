import React from 'react';

import { TextPlaceholder, ImagePlaceholder } from '@/Placeholder';

import './AboutPage.scss';

export function AboutPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="about-page__text">Jesteśmy platformą wspomagającą kampanie content i influencer marketingowe. Oferuje wygodny i zautomatyzowany proces zamawiania oraz realizacji działań. Z naszych usług korzystają tysiące aktywnych klientów, w tym agencje interaktywne, domy mediowe, duże i średnie firmy. Sprawna realizacja usług jest możliwa dzięki współpracy z wydawcami 4000 portali i ponad 4200 influencerami.</div>
      <div style={{ margin: '2rem 0' }} />
      <div className="about-page__text">Do tej pory za pośrednictwem naszgo protalu nawiązanych zostało ponad 2000 współprac, dzięki którym obie strony  </div>
      <div style={{ margin: '2rem 0' }} />
      <div className="about-page__text">Zadowolenie Klienta jest dla nas największą wartością, dlatego dokładamy wszelkich starań, by oferowane przez nas usługi były najwyższej jakości. Wiele polskich, jak również zagranicznych firm zaufało naszemu doświadczeniu - mamy nadzieję, że znajdzie się wśród nich również Państwa firma. Zapraszamy do współpracy.</div>
      <div style={{ margin: '3rem 0' }} />
      <ImagePlaceholder />
    </div>
  );
}
