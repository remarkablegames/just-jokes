import { useSharedReducer, useUniqueClientId } from 'driftdb-react';
import { DatabaseKey } from 'src/types';

interface Action {
  type: ActionType;
  payload: ActionPayload;
}

interface ActionPayload {
  playerId: string;
}

enum ActionType {
  reset = 'reset',
  vote = 'vote',
}

function getInitialState() {
  return 0;
}

function getInitialReducerState(clientId: string) {
  return {
    [clientId]: getInitialState(),
  };
}

export function useVote() {
  const clientId = useUniqueClientId();

  const [votes, dispatch] = useSharedReducer<
    ReturnType<typeof getInitialReducerState>,
    Action
  >(
    DatabaseKey.votes,
    (state, action) => {
      const { payload, type } = action;
      state[payload.playerId] = state[payload.playerId] || 0;

      switch (type) {
        case ActionType.vote:
          state[payload.playerId] += 1;
          break;

        case ActionType.reset:
          return getInitialReducerState(clientId);
      }

      return state;
    },
    getInitialReducerState(clientId),
  );

  return {
    votes,

    voteJoke: (playerId: string) =>
      dispatch({
        type: ActionType.vote,
        payload: { playerId },
      }),

    resetVotes: () =>
      dispatch({
        type: ActionType.reset,
        payload: { playerId: clientId },
      }),
  };
}
