import { clickSound } from './click';
import { confirmationSound } from './confirmation';
import { crowdLaughSound } from './crowdLaugh';
import { dropSound } from './drop';
import { selectSound } from './select';
import { switchSound } from './switch';

export const playSound = {
  click: () => clickSound.load().play(),
  confirmation: () => confirmationSound.load().play(),
  crowdLaugh: () => crowdLaughSound.load().play(),
  drop: () => dropSound.load().play(),
  select: () => selectSound.load().play(),
  switch: () => switchSound.load().play(),
};
