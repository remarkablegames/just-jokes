import Typography from '@mui/material/Typography';
import { RoomQRCode } from 'driftdb-react';
import { useDebugDatabase } from 'src/hooks';

export default function RoomDetails() {
  useDebugDatabase();

  return (
    <>
      <Typography component="h1" paragraph variant="h4">
        Room
      </Typography>

      <RoomQRCode />
    </>
  );
}
