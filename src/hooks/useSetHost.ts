import { useDispatch, useSelector } from 'src/hooks';
import { actions } from 'src/store';

import { useGameState } from './useGameState';
import { usePlayer } from './usePlayer';

export function useSetHost() {
  const { playerId } = usePlayer();
  const { setGameState } = useGameState();
  const dispatch = useDispatch();
  const isHost = useSelector((state) => state.user.isHost);

  function setHost() {
    if (isHost && playerId) {
      setGameState({
        hostId: playerId,
      });
      dispatch(actions.setUser({ isHost: false }));
    }
  }

  return { setHost };
}
