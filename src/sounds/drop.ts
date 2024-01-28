import { Howl } from 'howler';

import ogg from './drop.ogg';

export const dropSound = new Howl({
  src: [ogg],
  volume: 0.75,
});
