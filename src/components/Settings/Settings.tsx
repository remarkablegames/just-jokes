import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const rounds = [1, 2, 3, 4, 5];
const players = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Settings() {
  return (
    <Card sx={{ padding: 1 }}>
      <CardContent>
        <TextField
          defaultValue="4"
          helperText="Number of players"
          label="Players"
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
          defaultValue="3"
          helperText="Number of rounds"
          label="Rounds"
          select
        >
          {rounds.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
      </CardContent>

      <CardActions>
        <Button variant="contained">Start</Button>
      </CardActions>
    </Card>
  );
}
