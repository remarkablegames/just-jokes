import PlayerIcon from '@mui/icons-material/Face';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { RoomQRCode } from 'driftdb-react';
import { useDebugDatabase } from 'src/hooks';

const players = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Settings() {
  useDebugDatabase();

  return (
    <>
      <Typography component="h1" paragraph variant="h4">
        Room
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <List component={Card}>
            <ListItem>
              <ListItemIcon>
                <PlayerIcon />
              </ListItemIcon>
              <ListItemText primary="Nickname" />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={8}>
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
        </Grid>
      </Grid>

      <br />

      <details>
        <summary>QR Code</summary>
        <RoomQRCode />
      </details>
    </>
  );
}
