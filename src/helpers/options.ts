import { animals, nouns, places, verbs } from 'src/data';

export function getOptions(category: string) {
  switch (category) {
    case 'animal':
      return animals;

    case 'noun':
      return nouns;

    case 'place':
      return places;

    case 'verb':
      return verbs;

    default:
      return null;
  }
}
