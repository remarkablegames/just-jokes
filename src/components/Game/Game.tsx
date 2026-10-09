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

  const players = (
    <Grid size={{ xs: 12, sm: 4 }}>
      <Players />
      <Invite />
    </Grid>
  );

  const round = (
    <Grid size={{ xs: 12, sm: 8 }}>
      <Round />
    </Grid>
  );

  return (
    <>
      <Heading>Round {gameState.round}</Heading>

      <Grid container spacing={2}>
        {isSmall ? (
          <>
            {round}
            {players}
          </>
        ) : (
          <>
            {players}
            {round}
          </>
        )}
      </Grid>
    </>
  );
}
