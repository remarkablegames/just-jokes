import { useEffect } from 'react';
import { getJoke } from 'src/helpers';
import { useGameState, useJoke, usePlayer, useRound } from 'src/hooks';

import Joke from '../Joke';
import Vote from '../Vote';

export default function Round() {
  const { playerId } = usePlayer();
  const { jokes } = useJoke();
  const { round, setRound } = useRound();
  const { gameState } = useGameState();

  useEffect(() => {
    if (round > gameState.rounds) {
      setRound(0);
    }
  }, [round]);

  if (jokes[playerId]) {
    return <Vote />;
  }

  const { template, placeholders } = getJoke(gameState.jokeIds[round - 1]);

  return <Joke template={template} placeholders={placeholders} />;
}
