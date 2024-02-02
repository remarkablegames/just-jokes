import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useGameState, useJoke, usePlayer, useVote } from 'src/hooks';
import { useDispatch, useSelector } from 'src/hooks';
import { playSound } from 'src/sounds';
import { actions } from 'src/store';

export default function Vote() {
  const { jokes, resetJokes } = useJoke();
  const { votes, voteJoke, resetVotes } = useVote();
  const { playerId, resetPlayer } = usePlayer();
  const { gameState, setGameState } = useGameState();

  const dispatch = useDispatch();
  const hasVoted = useSelector((state) => state.user.hasVoted);

  function onNextRound() {
    resetJokes();
    resetVotes();
    resetPlayer();
    setGameState({
      round: gameState.round + 1,
    });
  }

  return (
    <>
      <Stack direction="column" spacing={2}>
        {Object.entries(jokes).map(([creatorId, joke]) => (
          <Badge
            badgeContent={votes[creatorId]}
            color="primary"
            key={creatorId}
          >
            <Button
              disabled={hasVoted}
              fullWidth
              onClick={() => {
                dispatch(actions.setUser({ hasVoted: true }));
                voteJoke(creatorId);
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
              <span dangerouslySetInnerHTML={{ __html: joke }} />
            </Button>
          </Badge>
        ))}
      </Stack>

      <br />

      {gameState.hostId === playerId && (
        <Button onClick={onNextRound} variant="contained">
          Next Round
        </Button>
      )}
    </>
  );
}
