import { useSharedState } from 'driftdb-react';
import {
  DatabaseKey,
  type SettingsData,
  SettingsDefaultValue,
} from 'src/types';

export function useSettings() {
  const [settings, setSettings] = useSharedState(
    DatabaseKey.settings,
    SettingsDefaultValue as SettingsData,
  );
  return { settings, setSettings };
}
