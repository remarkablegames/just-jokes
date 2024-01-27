import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { RoomQRCode } from 'driftdb-react';
import { useDebugDatabase } from 'src/hooks';

const players = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function RoomDetails() {
  useDebugDatabase();

  return (
    <>
      <Typography component="h1" paragraph variant="h4">
        Room
      </Typography>

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
        </CardContent>

        <CardActions>
          <Button variant="contained">Start</Button>
        </CardActions>
      </Card>

      <br />

      <details>
        <summary>QR Code</summary>
        <RoomQRCode />
      </details>
    </>
  );
}
