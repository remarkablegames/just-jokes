import Typography from '@mui/material/Typography';
import { useRound } from 'src/hooks';

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
    </>
  );
}
