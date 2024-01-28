import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { RoomQRCode } from 'driftdb-react';
import {
  useDebugDatabase,
  useRound,
  useSetHost,
  useSetPlayerActive,
} from 'src/hooks';

import Share from '../Invite/Invite';
import Players from '../Players';
import Settings from '../Settings';

export default function Lobby() {
  useDebugDatabase();
  useSetHost();
  useSetPlayerActive();

  const { round } = useRound();

  if (round) {
    return null;
  }

  return (
    <>
      <Typography
        component="h1"
        paragraph
        variant="h4"
        sx={{
          color: 'white',
          fontFamily: 'Fredoka One, cursive',
          letterSpacing: '0.1em',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        Room
      </Typography>
      <Share />

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
