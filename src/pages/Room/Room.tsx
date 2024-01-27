import { DriftDBProvider } from 'driftdb-react';
import Game from 'src/components/Game';
import Lobby from 'src/components/Lobby';
import Nickname from 'src/components/Nickname';
import { DRIFTDB_URL } from 'src/config';

export default function Room() {
  return (
    <DriftDBProvider api={DRIFTDB_URL}>
      <Lobby />
      <Game />
      <Nickname />
    </DriftDBProvider>
  );
}
