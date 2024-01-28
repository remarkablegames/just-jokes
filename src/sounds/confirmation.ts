import { Howl } from 'howler';

// drop4, select8, switch1, switch4
import ogg from './confirmation.ogg';

export const confirmationSound = new Howl({
  src: [ogg],
});
