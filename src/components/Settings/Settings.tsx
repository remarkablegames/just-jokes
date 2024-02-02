import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { getJokeIds } from 'src/helpers';
import { useGameState, useHost, useRound } from 'src/hooks';
import { playSound } from 'src/sounds';
import { textStyle } from 'src/styles';
import {
  type SettingsData,
  SettingsDefaultValue,
  SettingsName,
} from 'src/types';

const rounds = [1, 2, 3, 4, 5];
const players = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const seconds = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export default function Settings() {
  const { isHost } = useHost();
  const { setGameState } = useGameState();
  const { setRound } = useRound();

  if (!isHost) {
    return (
      <>
        <Typography paragraph sx={textStyle}>
          Waiting for the host to start the game...
        </Typography>

        <CircularProgress />
      </>
    );
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const settings = Object.values(SettingsName).reduce(
      (accumulator, value) => {
        accumulator[value] = Number(formData.get(value));
        return accumulator;
      },
      {} as SettingsData,
    );
    settings.jokeIds = getJokeIds(settings.rounds);

    setGameState(settings);
    setRound(1);
  }

  return (
    <Card component="form" onSubmit={handleSubmit} sx={{ padding: 1 }}>
      <CardContent>
        <TextField
          defaultValue={SettingsDefaultValue.players}
          helperText="Number of players"
          label="Players"
          name={SettingsName.players}
          onClick={playSound.select}
          select
        >
          {players.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>

        <br />
        <br />

        <TextField
          defaultValue={SettingsDefaultValue.rounds}
          helperText="Number of rounds"
          label="Rounds"
          name={SettingsName.rounds}
          onClick={playSound.select}
          select
        >
          {rounds.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>

        <br />
        <br />

        <TextField
          defaultValue={SettingsDefaultValue.timer}
          helperText="Seconds per round"
          label="Timer"
          name={SettingsName.timer}
          onClick={playSound.select}
          select
        >
          {seconds.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
      </CardContent>

      <CardActions>
        <Button
          onClick={playSound.confirmation}
          type="submit"
          variant="contained"
        >
          Start
        </Button>
      </CardActions>
    </Card>
  );
}
