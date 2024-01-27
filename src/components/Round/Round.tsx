import { getJoke } from 'src/helpers';

import Joke from '../Joke';

export default function Round() {
  const { placeholders, template } = getJoke();

  return <Joke template={template} placeholders={placeholders} />;
}
