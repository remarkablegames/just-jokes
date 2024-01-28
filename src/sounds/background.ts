import { Howl } from 'howler';

import mp3 from './background.mp3';
import webm from './background.webm';

export const backgroundMusic = new Howl({
  src: [webm, mp3],
  volume: 0.3,
  loop: true,
});
