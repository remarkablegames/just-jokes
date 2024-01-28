import { Howl } from 'howler';

import ogg from './confirmation.ogg';

export const confirmationSound = new Howl({
  src: [ogg],
});
