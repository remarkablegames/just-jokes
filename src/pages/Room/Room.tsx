import { DriftDBProvider } from 'driftdb-react';
import Nickname from 'src/components/Nickname';
import Settings from 'src/components/Settings';
import { DRIFTDB_URL } from 'src/config';

export default function Room() {
  return (
    <DriftDBProvider api={DRIFTDB_URL}>
      <Settings />
      <Nickname />
    </DriftDBProvider>
  );
}
