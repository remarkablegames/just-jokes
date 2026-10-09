import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { backgroundMusic } from 'src/sounds';

import { usePlayer } from './usePlayer';

export function useSetPlayerActive() {
  const navigate = useNavigate();
  const { setPlayerActive, removePlayer } = usePlayer();

  useEffect(() => {
    setPlayerActive(true);

    function onVisibilityChange() {
      const isActive = document.visibilityState !== 'hidden';
      setPlayerActive(isActive);

      if (isActive) {
        backgroundMusic.load().play();
      } else {
        backgroundMusic.pause();
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange);

    function onBeforeUnload(event: BeforeUnloadEvent) {
      event.preventDefault();
      backgroundMusic.pause();
      removePlayer();
      void navigate('/');
    }

    window.addEventListener('beforeunload', onBeforeUnload);

    return function unsubscribe() {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, []);
}
