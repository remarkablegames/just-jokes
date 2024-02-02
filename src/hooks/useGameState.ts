import { useSharedState } from 'driftdb-react';
import { DatabaseKey, type GameState, SettingsDefaultValue } from 'src/types';

export function useGameState() {
  const [gameState, setGameState] = useSharedState(DatabaseKey.gameState, {
    ...SettingsDefaultValue,
    jokeIds: [],
    round: 0,
  } as GameState);

  return { gameState, setGameState };
}
