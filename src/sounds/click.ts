import { Howl } from 'howler';

import ogg from './click.ogg';

export const clickSound = new Howl({
  src: [ogg],
  volume: 0.8,
});
