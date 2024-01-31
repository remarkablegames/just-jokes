import { useSharedReducer, useUniqueClientId } from 'driftdb-react';
import { useState } from 'react';
import { DatabaseKey } from 'src/types';

interface Action {
  type: ActionType;
  payload: ActionPayload;
}

interface ActionPayload {
  playerId: string;
  active?: boolean;
  nickname?: string;
  voted?: boolean;
}

enum ActionType {
  active = 'active',
  nickname = 'nickname',
  remove = 'remove',
  reset = 'reset',
  voted = 'voted',
}

const initialPlayerState = {
  nickname: '',
  active: false,
  voted: false,
};

export function usePlayer() {
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

        case ActionType.voted:
          player.voted = payload.voted!;
          break;

        case ActionType.remove:
          state[payload.playerId] = initialPlayerState;
          break;

        case ActionType.reset:
          Object.keys(state).forEach((id) => {
            state[id].voted = false;
          });
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

    setPlayerVoted: (voted: boolean) =>
      dispatch({
        type: ActionType.voted,
        payload: { playerId, voted },
      }),

    removePlayer: () =>
      dispatch({
        type: ActionType.remove,
        payload: { playerId },
      }),

    resetPlayers: () =>
      dispatch({
        type: ActionType.reset,
        payload: { playerId },
      }),
  };
}
