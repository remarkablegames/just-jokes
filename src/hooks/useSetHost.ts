import { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/hooks';
import { actions } from 'src/store';

import { useGameState } from './useGameState';
import { usePlayer } from './usePlayer';

export function useSetHost() {
  const { playerId } = usePlayer();
  const { setGameState } = useGameState();
  const dispatch = useDispatch();
  const isHost = useSelector((state) => state.user.isHost);

  useEffect(() => {
    if (isHost) {
      setGameState({
        hostId: playerId,
      });
      dispatch(actions.setUser({ isHost: false }));
    }
  }, []);
}
