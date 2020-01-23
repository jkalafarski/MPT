// @flow strict

import { getLoggedUser } from '@/authentication/login';

export async function fetchRandomInfluencer() {
  const loggedUser = getLoggedUser();

  if (!loggedUser) {
    return Promise.reject(new Error('User has to be logged in'));
  }

  try {
    const headers = new Headers({
      Authorization: `Bearer ${loggedUser.token}`,
    });

    const result = await fetch(
      'https://Influyou-env.uirxi5ppvm.us-east-1.elasticbeanstalk.com:8080/api/influencer/profile/random',
      {
        method: 'GET',
        headers,
      }
    );
    const influencer = await result.json();

    return Promise.resolve(influencer);
  } catch (err) {
    return Promise.reject(new Error('Unable to fetch influencers'));
  }
}
