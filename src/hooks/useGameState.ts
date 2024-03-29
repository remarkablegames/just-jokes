import { useSharedState } from 'driftdb-react';
import { DatabaseKey, GameState, SettingsDefaultValue } from 'src/types';

const initialState: GameState = {
  ...SettingsDefaultValue,
  hostId: '',
  jokeIds: [],
  round: 0,
};

export function useGameState() {
  const [gameState, setGameState] = useSharedState(
    DatabaseKey.gameState,
    initialState,
  );

  return {
    gameState,

    setGameState: (state: Partial<GameState>) =>
      setGameState({
        ...gameState,
        ...state,
      }),
  };
}
