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
  reset = 'reset',
}

function getInitialState() {
  return '';
}

function getInitialReducerState(clientId: string) {
  return clientId ? { [clientId]: getInitialState() } : {};
}

export function useJoke() {
  const clientId = useUniqueClientId();
  const [joke, setJoke] = useState(getInitialState);

  const [jokes, dispatch] = useSharedReducer<
    ReturnType<typeof getInitialReducerState>,
    Action
  >(
    DatabaseKey.jokes,
    (state, action) => {
      const { payload, type } = action;

      switch (type) {
        case ActionType.joke:
          state[payload.creatorId] = payload.joke!;
          break;

        case ActionType.reset:
          setJoke(getInitialState());
          return getInitialReducerState(clientId);
      }

      setJoke(joke);
      return state;
    },
    getInitialReducerState(clientId),
  );

  return {
    joke,
    jokes,

    setJoke: (payload: { creatorId: string; joke: string }) =>
      dispatch({
        type: ActionType.joke,
        payload,
      }),

    resetJokes: () =>
      dispatch({
        type: ActionType.reset,
        payload: { creatorId: clientId },
      }),
  };
}
