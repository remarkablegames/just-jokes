import animalsData from './animals.json';
import jokesData from './jokes.json';
import nounsData from './nouns.json';
import placesData from './places.json';
import verbsData from './verbs.json';

export const animals = Object.freeze(animalsData);
export const jokes = Object.freeze(jokesData);
export const nouns = Object.freeze([
  ...new Set(nounsData.concat(animalsData, placesData)),
]);
export const places = Object.freeze(placesData);
export const verbs = Object.freeze(verbsData);
