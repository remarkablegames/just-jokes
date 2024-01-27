import { getJoke } from 'src/helpers';
import { useJoke, usePlayer } from 'src/hooks';

import Joke from '../Joke';
import Vote from '../Vote';

export default function Round() {
  const { playerId } = usePlayer();
  const { jokes } = useJoke();

  if (jokes[playerId]?.joke) {
    return <Vote />;
  }

  const { template, placeholders } = getJoke();

  return <Joke template={template} placeholders={placeholders} />;
}
