import { DriftDBProvider } from 'driftdb-react';
import Nickname from 'src/components/Nickname';
import RoomDetails from 'src/components/RoomDetails';
import { DRIFTDB_URL } from 'src/config';

export default function Room() {
  return (
    <DriftDBProvider api={DRIFTDB_URL}>
      <RoomDetails />
      <Nickname />
    </DriftDBProvider>
  );
}
