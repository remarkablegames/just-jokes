import Typography from '@mui/material/Typography';
import { useRound } from 'src/hooks';

export default function Round() {
  const { round } = useRound();

  return (
    <>
      <Typography component="h1" paragraph variant="h4">
        Round {round}
      </Typography>
    </>
  );
}
