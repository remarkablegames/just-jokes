import { useEffect } from 'react';
import { backgroundMusic } from 'src/sounds';

import { usePlayer } from './usePlayer';

const visibilitychange = 'visibilitychange';
const hidden = 'hidden';

export function useSetPlayerActive() {
  const { setPlayerActive } = usePlayer();

  useEffect(() => {
    setPlayerActive(true);

    function handleVisibilityChange() {
      const isActive = document.visibilityState !== hidden;
      setPlayerActive(isActive);

      if (isActive) {
        backgroundMusic.play();
      } else {
        backgroundMusic.pause();
      }
    }

    document.addEventListener(visibilitychange, handleVisibilityChange);

    return function unsubscribe() {
      document.removeEventListener(visibilitychange, handleVisibilityChange);
    };
  }, []);
}
