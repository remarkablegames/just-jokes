import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useJoke } from 'src/hooks';

export default function Vote() {
  const { jokes } = useJoke();

  return (
    <Stack direction="row" spacing={2}>
      {Object.entries(jokes).map(([creatorId, joke]) => {
        return (
          <Button
            fullWidth
            key={creatorId}
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
