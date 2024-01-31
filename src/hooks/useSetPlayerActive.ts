import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { backgroundMusic } from 'src/sounds';

import { usePlayer } from './usePlayer';

enum Event {
  beforeunload = 'beforeunload',
  visibilitychange = 'visibilitychange',
}

enum VisibilityState {
  hidden = 'hidden',
}

export function useSetPlayerActive() {
  const navigate = useNavigate();
  const { setPlayerActive, removePlayer } = usePlayer();

  useEffect(() => {
    setPlayerActive(true);

    function onVisibilityChange() {
      const isActive = document.visibilityState !== VisibilityState.hidden;
      setPlayerActive(isActive);

      if (isActive) {
        backgroundMusic.play();
      } else {
        backgroundMusic.pause();
      }
    }

    document.addEventListener(Event.visibilitychange, onVisibilityChange);

    function onBeforeUnload(event: BeforeUnloadEvent) {
      event.preventDefault();
      event.returnValue = true;
      backgroundMusic.pause();
      removePlayer();
      navigate('/');
    }

    window.addEventListener(Event.beforeunload, onBeforeUnload);

    return function unsubscribe() {
      document.removeEventListener(Event.visibilitychange, onVisibilityChange);
      document.removeEventListener(Event.beforeunload, onBeforeUnload);
    };
  }, []);
}
