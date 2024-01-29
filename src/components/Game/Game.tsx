import Grid from '@mui/material/Grid';
import { useRound } from 'src/hooks';

import Heading from '../Heading';
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
      <Heading>Round {round}</Heading>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Players />
          <Invite />
        </Grid>

        <Grid item xs={12} sm={8}>
          <Round />
        </Grid>
      </Grid>
    </>
  );
}
