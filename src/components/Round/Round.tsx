import { useEffect } from 'react';
import { getJoke } from 'src/helpers';
import { useJoke, usePlayer, useRound, useSettings } from 'src/hooks';

import Joke from '../Joke';
import Vote from '../Vote';

export default function Round() {
  const { playerId } = usePlayer();
  const { jokes } = useJoke();
  const { round, setRound } = useRound();
  const { settings } = useSettings();

  useEffect(() => {
    if (round > settings.rounds) {
      setRound(0);
    }
  }, [round]);

  if (jokes[playerId]) {
    return <Vote />;
  }

  const { template, placeholders } = getJoke(settings.jokeIds[round - 1]);

  return <Joke template={template} placeholders={placeholders} />;
}
