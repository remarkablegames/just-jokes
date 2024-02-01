import { useSharedReducer, useUniqueClientId } from 'driftdb-react';
import { useState } from 'react';
import { useDispatch } from 'src/hooks';
import { actions } from 'src/store';
import { DatabaseKey } from 'src/types';

interface Action {
  type: ActionType;
  payload: ActionPayload;
}

interface ActionPayload {
  playerId: string;
  active?: boolean;
  nickname?: string;
}

enum ActionType {
  active = 'active',
  nickname = 'nickname',
  remove = 'remove',
  reset = 'reset',
}

const initialPlayerState = {
  nickname: '',
  active: false,
};

export function usePlayer() {
  const dispatchRedux = useDispatch();
  const playerId = useUniqueClientId();
  const [player, setPlayer] = useState(initialPlayerState);

  const initialReducerState = {
    [playerId]: initialPlayerState,
  };

  const [players, dispatch] = useSharedReducer<
    typeof initialReducerState,
    Action
  >(
    DatabaseKey.players,
    (state, action) => {
      const { payload, type } = action;
      state[payload.playerId] = state[payload.playerId] || {};
      const player = state[payload.playerId];

      switch (type) {
        case ActionType.active:
          player.active = payload.active!;
          break;

        case ActionType.nickname:
          player.nickname = payload.nickname!;
          break;

        case ActionType.remove:
          state[payload.playerId] = initialPlayerState;
          break;

        case ActionType.reset:
          dispatchRedux(actions.setUser({ hasVoted: false }));
          break;
      }

      setPlayer(state[playerId]);
      return state;
    },
    initialReducerState,
  );

  return {
    player,
    playerId,
    players,

    activePlayersCount: Object.values(players).filter(({ active }) => active)
      .length,

    setPlayerActive: (active: boolean) =>
      dispatch({
        type: ActionType.active,
        payload: { playerId, active },
      }),

    setPlayerNickname: (nickname: string) =>
      dispatch({
        type: ActionType.nickname,
        payload: { playerId, nickname },
      }),

    removePlayer: () =>
      dispatch({
        type: ActionType.remove,
        payload: { playerId },
      }),

    resetPlayer: () =>
      dispatch({
        type: ActionType.reset,
        payload: { playerId },
      }),
  };
}
