import { useEffect } from 'react';
import {
  getJoke,
  getLocalStorageRound,
  setLocalStorageRound,
} from 'src/helpers';
import { useJoke, usePlayer, useRound, useSettings } from 'src/hooks';
import { playSound } from 'src/sounds';

import Joke from '../Joke';
import Vote from '../Vote';

export default function Round() {
  const { playerId } = usePlayer();
  const { jokes } = useJoke();
  const { round, setRound } = useRound();
  const { settings } = useSettings();

  useEffect(() => {
    // end game and go back to lobby
    if (round > settings.rounds) {
      setRound(0);
      setLocalStorageRound(0);
      // play laughter track
    } else if (round > getLocalStorageRound()) {
      playSound.crowdLaugh();
      setLocalStorageRound(round);
    }
  }, [round]);

  if (jokes[playerId]) {
    return <Vote />;
  }

  const { template, placeholders } = getJoke(settings.jokeIds[round - 1]);

  return <Joke template={template} placeholders={placeholders} />;
}
