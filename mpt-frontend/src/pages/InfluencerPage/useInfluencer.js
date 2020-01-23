// @flow strict

import { useState, useEffect } from 'react';

import { fetchRandomInfluencer } from '@/influencers/fetchRandomInfluencer';

export function useInfluencer() {
  const [state, setState] = useState({
    currentInfluencer: {},
    prevInfluencers: [],
  });

  async function nextInfluencer() {
    try {
      const infl = await fetchRandomInfluencer();

      setState(prevState => {
        return {
          currentInfluencer: infl,
          prevInfluencers: [...prevState.prevInfluencers, infl],
        };
      });
    } catch (e) {
      console.error(e);
    }
  }

  function prevInfluencer() {
    if (state.prevInfluencers.length < 2) {
      return;
    }

    setState(prevState => ({
      currentInfluencer: prevState.prevInfluencers[prevState.prevInfluencers.length - 2],
      prevInfluencers: prevState.prevInfluencers.slice(0, -1),
    }));
  }

  useEffect(() => {
    nextInfluencer();
  }, []);

  return { influencer: state.currentInfluencer, prevInfluencer, nextInfluencer };
}
