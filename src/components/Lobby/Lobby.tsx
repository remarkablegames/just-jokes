import PlayerIcon from '@mui/icons-material/Face';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { RoomQRCode } from 'driftdb-react';
import { useDebugDatabase } from 'src/hooks';

import Settings from '../Settings';

export default function Lobby() {
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
          <Settings />
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
