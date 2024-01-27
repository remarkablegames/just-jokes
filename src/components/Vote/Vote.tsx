import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useHost, useJoke, usePlayer } from 'src/hooks';

export default function Vote() {
  const { isHost } = useHost();
  const { jokes, voteJoke } = useJoke();
  const { player, setPlayerVoted } = usePlayer();

  return (
    <>
      <Stack direction="row" spacing={2}>
        {Object.entries(jokes).map(([creatorId, joke]) => (
          <Badge badgeContent={joke.votes.length} color="primary">
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
          </Badge>
        ))}
      </Stack>

      <br />

      {isHost && <Button variant="contained">Next Round</Button>}
    </>
  );
}
