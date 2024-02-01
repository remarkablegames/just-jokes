import { jokes } from '../data';
import { random } from './random';

const jokeIds = Object.keys(jokes).map(Number);
const jokesCount = jokes.length;

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
export function getJoke(jokeId?: number) {
  const params = new URLSearchParams(location.search);
  jokeId = Number(params.get('joke_id')) || jokeId || random(jokesCount);
  return jokes[jokeId];
}
