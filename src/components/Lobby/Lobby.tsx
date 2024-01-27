import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { RoomQRCode } from 'driftdb-react';
import { useDebugDatabase, useSetHost } from 'src/hooks';

import Players from '../Players';
import Settings from '../Settings';

export default function Lobby() {
  useDebugDatabase();
  useSetHost();

  return (
    <>
      <Typography component="h1" paragraph variant="h4">
        Room
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Players />
        </Grid>

        <Grid item xs={8}>
          <Settings />
        </Grid>
      </Grid>

      <br />

      <details>
        <summary>QR Code</summary>
        <RoomQRCode />
      </details>
    </>
  );
}
