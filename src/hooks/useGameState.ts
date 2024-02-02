import { useSharedState } from 'driftdb-react';
import { DatabaseKey, GameState, SettingsDefaultValue } from 'src/types';

const initialState: GameState = {
  ...SettingsDefaultValue,
  jokeIds: [],
  round: 0,
};

export function useGameState() {
  const [gameState, setGameState] = useSharedState(
    DatabaseKey.gameState,
    initialState,
  );

  return { gameState, setGameState };
}
