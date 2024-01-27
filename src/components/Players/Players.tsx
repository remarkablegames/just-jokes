import PlayerIcon from '@mui/icons-material/Face';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function Players() {
  return (
    <List component={Card}>
      <ListItem>
        <ListItemIcon>
          <PlayerIcon />
        </ListItemIcon>

        <ListItemText primary="Nickname" />
      </ListItem>
    </List>
  );
}
