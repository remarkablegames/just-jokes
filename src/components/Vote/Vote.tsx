import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useJoke, usePlayer } from 'src/hooks';

export default function Vote() {
  const { jokes, voteJoke } = useJoke();
  const { player, setPlayerVoted } = usePlayer();

  return (
    <Stack direction="row" spacing={2}>
      {Object.entries(jokes).map(([creatorId, joke]) => {
        return (
          <Button
            disabled={player.voted}
            fullWidth
            key={creatorId}
            onClick={() => {
              voteJoke(creatorId);
              setPlayerVoted(true);
            }}
            sx={{ padding: 1, textTransform: 'none' }}
            variant="outlined"
          >
            {joke.joke}
          </Button>
        );
      })}
    </Stack>
  );
}
