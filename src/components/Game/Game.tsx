import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useGameState } from 'src/hooks';

import Heading from '../Heading';
import Invite from '../Invite';
import Players from '../Players';
import Round from '../Round';

export default function Game() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const { gameState } = useGameState();

  if (!gameState.round) {
    return null;
  }

  return (
    <>
      <Heading>Round {gameState.round}</Heading>

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
          <Round />
        </Grid>
      </Grid>
    </>
  );
}
