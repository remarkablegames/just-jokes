import { Howl } from 'howler';

import mp3 from './crowdLaugh.mp3';

export const crowdLaughSound = new Howl({
  src: [mp3],
  volume: 1.0, // You can adjust the volume as needed
});
