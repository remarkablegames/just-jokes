import { Howl } from 'howler';

import mp3 from './background.mp3';
import webm from './background.webm';

export function playBackgroundMusic(play: boolean) {
  const sound = new Howl({
    src: [webm, mp3],
    loop: true,
    volume: 0.3,
  });

  if (play) {
    sound.play();
  } else {
    sound.pause();
  }
}
