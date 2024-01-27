import { useSharedState, useUniqueClientId } from 'driftdb-react';
import { DatabaseKey } from 'src/types';

export function useHost() {
  const clientId = useUniqueClientId();
  const [host, setHost] = useSharedState(DatabaseKey.host, '');

  return {
    host,
    setHost,
    isHost: host === clientId,
  };
}
