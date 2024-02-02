import { useEffect } from 'react';
import { getJoke } from 'src/helpers';
import { useGameState, useJoke, usePlayer } from 'src/hooks';

import Joke from '../Joke';
import Vote from '../Vote';

export default function Round() {
  const { playerId } = usePlayer();
  const { jokes } = useJoke();
  const { gameState, setGameState } = useGameState();

  useEffect(() => {
    if (gameState.round > gameState.maxRounds) {
      setGameState({
        ...gameState,
        round: 0,
      });
    }
  }, [gameState.round]);

  if (jokes[playerId]) {
    return <Vote />;
  }

  const { template, placeholders } = getJoke(
    gameState.jokeIds[gameState.round - 1],
  );

  return <Joke template={template} placeholders={placeholders} />;
}
