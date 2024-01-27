import PlayerIcon from '@mui/icons-material/Face';
import HostIcon from '@mui/icons-material/FaceRetouchingNatural';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useHost, useJoke, usePlayer } from 'src/hooks';

export default function Players() {
  const { host } = useHost();
  const { players, playerId } = usePlayer();
  const { jokes } = useJoke();

  return (
    <List component={Card}>
      {Object.entries(players).map(([id, player]) => {
        const iconColor = player.active ? 'inherit' : 'disabled';
        const textProps =
          playerId === id ? { sx: { fontWeight: 'bold' } } : undefined;
        const votes = jokes[id]?.votes.length;

        return (
          <ListItem dense key={id}>
            <ListItemIcon>
              {id === host ? (
                <HostIcon color={iconColor} />
              ) : (
                <PlayerIcon color={iconColor} />
              )}
            </ListItemIcon>

            <ListItemText
              primary={player.nickname}
              primaryTypographyProps={textProps}
            />

            <ListItemText primary={votes} sx={{ textAlign: 'center' }} />
          </ListItem>
        );
      })}
    </List>
  );
}
