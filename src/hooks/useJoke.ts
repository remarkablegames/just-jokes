import { useSharedReducer, useUniqueClientId } from 'driftdb-react';
import { useState } from 'react';
import { DatabaseKey } from 'src/types';

interface Action {
  type: ActionType;
  payload: ActionPayload;
}

interface ActionPayload {
  creatorId: string;
  joke?: string;
  playerId?: string;
}

enum ActionType {
  joke = 'joke',
  vote = 'vote',
}

const initialState = {
  joke: '',
  votes: [] as string[],
};

export function useJoke() {
  const playerId = useUniqueClientId();
  const [joke, setJoke] = useState(initialState);

  const initialReducerState = {
    [playerId]: initialState,
  };

  const [jokes, dispatch] = useSharedReducer<
    typeof initialReducerState,
    Action
  >(
    DatabaseKey.jokes,
    (state, action) => {
      const { payload, type } = action;
      state[payload.creatorId] = state[payload.creatorId] || {};
      const joke = state[payload.creatorId];
      joke.votes = joke.votes || [];
      setJoke(joke);

      switch (type) {
        case ActionType.joke:
          state[payload.creatorId].joke = payload.joke!;
          return state;

        case ActionType.vote:
          if (!joke.votes.includes(payload.playerId!)) {
            joke.votes.push(payload.playerId!);
          }
          return state;

        default:
          return state;
      }
    },
    initialReducerState,
  );

  return {
    joke,
    jokes,

    sortedJokes: Object.entries(jokes).sort((a, b) => {
      if (a[1].votes.length < b[1].votes.length) {
        return -1;
      } else if (a[1].votes.length > b[1].votes.length) {
        return 1;
      }
      return 0;
    }),

    setJoke: (payload: { creatorId: string; joke: string }) =>
      dispatch({
        type: ActionType.joke,
        payload,
      }),

    voteJoke: (creatorId: string) =>
      dispatch({
        type: ActionType.vote,
        payload: { creatorId, playerId },
      }),
  };
}
