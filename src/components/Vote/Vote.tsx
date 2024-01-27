import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useHost, useJoke, usePlayer, useRound, useVote } from 'src/hooks';

export default function Vote() {
  const { isHost } = useHost();
  const { jokes, resetJokes } = useJoke();
  const { votes, voteJoke, resetVotes } = useVote();
  const { player, setPlayerVoted, resetPlayers } = usePlayer();
  const { round, setRound } = useRound();

  function handleClick() {
    resetPlayers();
    resetJokes();
    resetVotes();
    setRound(round + 1);
  }

  return (
    <>
      <Stack direction="row" spacing={2}>
        {Object.entries(jokes).map(([creatorId, joke]) => (
          <Badge
            badgeContent={votes[creatorId]?.length}
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
              {joke}
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
