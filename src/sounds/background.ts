import { Howl } from 'howler';

import mp3 from './background.mp3';
import webm from './background.webm';

const sound = new Howl({
  src: [webm, mp3],
  volume: 0.3,
  html5: true,
  loop: true,
  preload: true,
});

export function playBackgroundMusic(play: boolean) {
  if (play) {
    sound.play();
  } else {
    sound.pause();
  }
}
