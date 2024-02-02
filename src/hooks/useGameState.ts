import { useSharedState } from 'driftdb-react';
import {
  DatabaseKey,
  type SettingsData,
  SettingsDefaultValue,
} from 'src/types';

export function useGameState() {
  const [gameState, setGameState] = useSharedState(DatabaseKey.gameState, {
    ...SettingsDefaultValue,
    jokeIds: [],
  } as SettingsData);

  return { gameState, setGameState };
}
