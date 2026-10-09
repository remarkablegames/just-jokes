import { useSharedReducer, useUniqueClientId } from 'driftdb-react';
import { useDispatch } from 'src/hooks';
import { actions } from 'src/store';
import { DatabaseKey } from 'src/types';

import { useGameState } from './useGameState';

type Action =
  | { type: ActionType.active; payload: { active: boolean; playerId: string } }
  | {
      type: ActionType.nickname;
      payload: { nickname: string; playerId: string };
    }
  | { type: ActionType.remove; payload: { playerId: string } }
  | { type: ActionType.reset; payload: { playerId: string } };

enum ActionType {
  active = 'active',
  nickname = 'nickname',
  remove = 'remove',
  reset = 'reset',
}

interface PlayerState {
  active: boolean;
  nickname: string;
}

const getInitialPlayerState = (): PlayerState => ({
  active: false,
  nickname: '',
});

export function usePlayer() {
  const dispatchRedux = useDispatch();
  const { gameState } = useGameState();
  const playerId = useUniqueClientId();

  const initialReducerState = {
    [playerId]: getInitialPlayerState(),
  };

  const [players, dispatch] = useSharedReducer<
    typeof initialReducerState,
    Action
  >(
    DatabaseKey.players,
    (state, action) => {
      const { payload, type } = action;

      if (!Object.hasOwn(state, payload.playerId)) {
        state[payload.playerId] = getInitialPlayerState();
      }

      const player = state[payload.playerId];

      switch (type) {
        case ActionType.active:
          player.active = payload.active;
          break;

        case ActionType.nickname:
          player.nickname = payload.nickname;
          break;

        case ActionType.remove:
          state[payload.playerId] = getInitialPlayerState();
          break;

        case ActionType.reset:
          dispatchRedux(actions.setUser({ hasVoted: false }));
          break;
      }

      return state;
    },
    initialReducerState,
  );

  return {
    player: players[playerId],
    playerId,
    players,
    isHost: gameState.hostId === playerId,

    activePlayersCount: Object.values(players).filter(({ active }) => active)
      .length,

    setPlayerActive: (active: boolean) => {
      dispatch({
        type: ActionType.active,
        payload: { playerId, active },
      });
    },

    setPlayerNickname: (nickname: string) => {
      dispatch({
        type: ActionType.nickname,
        payload: { playerId, nickname },
      });
    },

    removePlayer: () => {
      dispatch({
        type: ActionType.remove,
        payload: { playerId },
      });
    },

    resetPlayer: () => {
      dispatch({
        type: ActionType.reset,
        payload: { playerId },
      });
    },
  };
}
