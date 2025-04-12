import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { RoomQRCode } from 'driftdb-react';
import { useDebugDatabase, useGameState, useSetPlayerActive } from 'src/hooks';
import { textStyle } from 'src/styles';

import Heading from '../Heading';
import Invite from '../Invite';
import Players from '../Players';
import Settings from '../Settings';

export default function Lobby() {
  useDebugDatabase();
  useSetPlayerActive();

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const { gameState } = useGameState();

  if (gameState.round) {
    return null;
  }

  return (
    <>
      <Heading>Room</Heading>

      <Grid
        container
        direction={isSmall ? 'column-reverse' : 'row'}
        spacing={2}
      >
        <Grid size={{ xs: 12, sm: 4 }}>
          <Players />
          <Invite />
        </Grid>

        <Grid size={{ xs: 12, sm: 8 }}>
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
