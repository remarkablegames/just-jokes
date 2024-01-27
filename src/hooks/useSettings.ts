import { useSharedState } from 'driftdb-react';
import { DatabaseKey, SettingsDefaultValue } from 'src/types';

export function useSettings() {
  const [settings, setSettings] = useSharedState(
    DatabaseKey.settings,
    SettingsDefaultValue as Record<keyof typeof SettingsDefaultValue, number>,
  );
  return { settings, setSettings };
}
