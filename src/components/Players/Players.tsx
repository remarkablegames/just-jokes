import PlayerIcon from '@mui/icons-material/Face';
import HostIcon from '@mui/icons-material/FaceRetouchingNatural';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { usePlayer } from 'src/hooks';

export default function Players() {
  const { player, isHost } = usePlayer();

  return (
    <List component={Card}>
      <ListItem>
        <ListItemIcon>{isHost ? <HostIcon /> : <PlayerIcon />}</ListItemIcon>

        <ListItemText primary={player.nickname} />
      </ListItem>
    </List>
  );
}
