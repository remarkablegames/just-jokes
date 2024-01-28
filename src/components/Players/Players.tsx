import FaceIcon from '@mui/icons-material/Face';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useHost, usePlayer, useVote } from 'src/hooks';

export default function Players() {
  const { host } = useHost();
  const { players, playerId } = usePlayer();
  const { votes } = useVote();

  return (
    <List component={Card}>
      {Object.entries(players).map(([id, player]) => {
        const iconColor = player.active ? 'inherit' : 'disabled';
        const textProps =
          playerId === id ? { sx: { fontWeight: 'bold' } } : undefined;

        return (
          <ListItem dense key={id}>
            <ListItemIcon>
              <Badge
                badgeContent=" "
                color="primary"
                invisible={host !== id}
                variant="dot"
              >
                <FaceIcon color={iconColor} />
              </Badge>
            </ListItemIcon>

            <ListItemText
              primary={player.nickname}
              primaryTypographyProps={textProps}
            />

            {votes[id] > 0 && (
              <ListItemText primary={votes[id]} sx={{ textAlign: 'center' }} />
            )}
          </ListItem>
        );
      })}
    </List>
  );
}
