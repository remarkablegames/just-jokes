import { clickSound } from './click';
import { confirmationSound } from './confirmation';
import { crowdLaughSound } from './crowdLaugh';
import { dropSound } from './drop';
import { selectSound } from './select';
import { switchSound } from './switch';

export const playSound = {
  click: () => clickSound.play(),
  confirmation: () => confirmationSound.play(),
  crowdLaugh: () => crowdLaughSound.play(),
  drop: () => dropSound.play(),
  select: () => selectSound.play(),
  switch: () => switchSound.play(),
};
