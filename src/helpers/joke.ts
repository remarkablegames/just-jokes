import { jokes } from '../data';

const jokesCount = Object.keys(jokes).length;

export function getJoke(jokeId?: string) {
  const params = new URLSearchParams(window.location.search);
  jokeId = params.get('joke_id') || getRandomInt(jokesCount);
  return jokes[jokeId as unknown as keyof typeof jokes];
}

function getRandomInt(max: number) {
  return String(Math.floor(Math.random() * max));
}
