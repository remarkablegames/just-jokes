import { clickSound } from './click';
import { confirmationSound } from './confirmation';
import { dropSound } from './drop';
import { selectSound } from './select';
import { switchSound } from './switch';

export const playSound = {
  click: () => clickSound.play(),
  confirmation: () => confirmationSound.play(),
  drop: () => dropSound.play(),
  select: () => selectSound.play(),
  switch: () => switchSound.play(),
};
