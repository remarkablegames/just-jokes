import { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/hooks';
import { actions } from 'src/store';

import { useHost } from './useHost';
import { usePlayer } from './usePlayer';

export function useSetHost() {
  const { playerId } = usePlayer();
  const { host, setHost } = useHost();
  const dispatch = useDispatch();
  const isHost = useSelector((state) => state.user.isHost);

  useEffect(() => {
    if (!host && isHost) {
      setHost(playerId);
      dispatch(actions.setUser({ isHost: false }));
    }
  }, [dispatch, host, isHost, setHost]);
}
