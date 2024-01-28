import { jokes } from '../data';
import { random } from './random';

const jokeIds = Object.keys(jokes);
const jokesCount = jokeIds.length;

/**
 * Generate joke ids.
 *
 * @param count - Number of joke ids to generate.
 * @returns - Joke ids.
 */
export function getJokeIds(count: number) {
  return [...Array(count).keys()].map(() => jokeIds[random(jokesCount)]);
}

/**
 * Get joke.
 *
 * @param jokeId - Joke id.
 * @returns - Joke.
 */
export function getJoke(jokeId?: string) {
  const params = new URLSearchParams(window.location.search);
  jokeId = params.get('joke_id') || jokeId || String(random(jokesCount));
  return jokes[jokeId as unknown as keyof typeof jokes];
}
