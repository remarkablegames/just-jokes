import { useSharedReducer, useUniqueClientId } from 'driftdb-react';
import { useState } from 'react';
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

function getInitialState(): string[] {
  return [];
}

function getInitialReducerState(clientId: string) {
  return {
    [clientId]: getInitialState(),
  };
}

export function useVote() {
  const clientId = useUniqueClientId();
  const [vote, setVote] = useState(getInitialState());

  const [votes, dispatch] = useSharedReducer<
    ReturnType<typeof getInitialReducerState>,
    Action
  >(
    DatabaseKey.votes,
    (state, action) => {
      const { payload, type } = action;
      state[payload.playerId] = state[payload.playerId] || [];
      const vote = state[payload.playerId];

      switch (type) {
        case ActionType.vote:
          if (!vote.includes(payload.playerId!)) {
            vote.push(payload.playerId!);
          }
          break;

        case ActionType.reset:
          setVote(getInitialState());
          return getInitialReducerState(clientId);
      }

      setVote(vote);
      return state;
    },
    getInitialReducerState(clientId),
  );

  return {
    vote,
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
