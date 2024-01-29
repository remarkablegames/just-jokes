import { Howl } from 'howler';

import mp3 from './crowdLaugh.mp3';

export const crowdLaughSound = new Howl({
  src: [mp3],
  volume: 5.0,
});
