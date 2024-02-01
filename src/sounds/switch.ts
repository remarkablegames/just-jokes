import { Howl } from 'howler';

import ogg from './switch.ogg';

export const switchSound = new Howl({
  src: [ogg],
  preload: false,
});
