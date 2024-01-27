import { useSharedState } from 'driftdb-react';
import { DatabaseKey } from 'src/types';

export function useRound() {
  const [round, setRound] = useSharedState(DatabaseKey.round, 0);
  return { round, setRound };
}
