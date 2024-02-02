import { jokes } from '../data';
import { random } from './random';

/**
 * Generate joke ids.
 *
 * @param count - Number of joke ids to generate.
 * @returns - Joke ids.
 */
export function getJokeIds(count: number) {
  const jokeIds: number[] = [];

  while (jokeIds.length < count) {
    const jokeId = random(jokes.length);

    if (count > jokes.length) {
      jokeIds.push(jokeId);
    } else if (!jokeIds.includes(jokeId)) {
      jokeIds.push(jokeId);
    }
  }

  return jokeIds;
}

/**
 * Get joke.
 *
 * @param jokeId - Joke id.
 * @returns - Joke.
 */
export function getJoke(jokeId?: number) {
  const params = new URLSearchParams(location.search);
  jokeId = Number(params.get('joke_id')) || jokeId || random(jokes.length);
  return jokes[jokeId];
}
