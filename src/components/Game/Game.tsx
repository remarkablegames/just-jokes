import Round from 'src/components/Round';
import { useRound } from 'src/hooks';

export default function Game() {
  const { round } = useRound();

  if (!round) {
    return null;
  }

  return <Round />;
}
