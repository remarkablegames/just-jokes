import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRound } from 'src/hooks';

import Invite from '../Invite';
import Players from '../Players';
import Round from '../Round';

export default function Game() {
  const { round } = useRound();

  if (!round) {
    return null;
  }

  return (
    <>
      <Typography component="h1" paragraph variant="h4">
        Round {round}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Players />
          <Invite />
        </Grid>

        <Grid item xs={8}>
          <Round />
        </Grid>
      </Grid>
    </>
  );
}
