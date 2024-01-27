import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useHost, useJoke, usePlayer, useRound } from 'src/hooks';

export default function Vote() {
  const { isHost } = useHost();
  const { jokes, voteJoke, resetJokes } = useJoke();
  const { player, setPlayerVoted, resetPlayers } = usePlayer();
  const { round, setRound } = useRound();

  function handleClick() {
    resetPlayers();
    resetJokes();
    setRound(round + 1);
  }

  return (
    <>
      <Stack direction="row" spacing={2}>
        {Object.entries(jokes).map(([creatorId, joke]) => (
          <Badge
            badgeContent={joke.votes.length}
            color="primary"
            key={creatorId}
          >
            <Button
              disabled={player.voted}
              fullWidth
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

      {isHost && (
        <Button onClick={handleClick} variant="contained">
          Next Round
        </Button>
      )}
    </>
  );
}
