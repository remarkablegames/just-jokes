import { useSharedState } from 'driftdb-react';
import {
  DatabaseKey,
  type SettingsData,
  SettingsDefaultValue,
} from 'src/types';

export function useGameState() {
  const [settings, setSettings] = useSharedState(DatabaseKey.settings, {
    ...SettingsDefaultValue,
    jokeIds: [],
  } as SettingsData);

  return { settings, setSettings };
}
