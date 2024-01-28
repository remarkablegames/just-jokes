import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useHost, useJoke, usePlayer, useRound, useVote } from 'src/hooks';
import { playSound } from 'src/sounds';

export default function Vote() {
  const { isHost } = useHost();
  const { jokes, resetJokes } = useJoke();
  const { votes, voteJoke, resetVotes } = useVote();
  const { player, setPlayerVoted, resetPlayers } = usePlayer();
  const { round, setRound } = useRound();

  function handleClick() {
    playSound.confirmation();
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
            badgeContent={votes[creatorId]}
            color="primary"
            key={creatorId}
          >
            <Button
              disabled={player.voted}
              fullWidth
              onClick={() => {
                voteJoke(creatorId);
                setPlayerVoted(true);
                playSound.drop();
              }}
              sx={{
                padding: 1,
                textTransform: 'none',
                backgroundColor: 'white',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
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
