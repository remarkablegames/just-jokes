import PlayerIcon from '@mui/icons-material/Face';
import HostIcon from '@mui/icons-material/FaceRetouchingNatural';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useHost, usePlayer } from 'src/hooks';

export default function Players() {
  const { host } = useHost();
  const { players } = usePlayer();

  return (
    <List component={Card}>
      {Object.entries(players).map(([playerId, player]) => (
        <ListItem key={playerId}>
          <ListItemIcon>
            {playerId === host ? <HostIcon /> : <PlayerIcon />}
          </ListItemIcon>

          <ListItemText primary={player.nickname} />
        </ListItem>
      ))}
    </List>
  );
}
