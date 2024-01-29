import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { RoomQRCode } from 'driftdb-react';
import {
  useDebugDatabase,
  useRound,
  useSetHost,
  useSetPlayerActive,
} from 'src/hooks';

import Heading from '../Heading';
import Invite from '../Invite';
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

  const textStyle = {
    color: 'white',
    fontFamily: 'Fredoka One, cursive',
    letterSpacing: '0.1em',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
  };

  return (
    <>
      <Heading>Room</Heading>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Players />
          <Invite />
        </Grid>

        <Grid item xs={8}>
          <Settings />
        </Grid>
      </Grid>

      <br />

      <details>
        <summary>
          <Typography component="span" sx={textStyle}>
            QR Code
          </Typography>
        </summary>
        <RoomQRCode />
      </details>
    </>
  );
}
