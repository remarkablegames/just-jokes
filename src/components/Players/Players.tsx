import FaceIcon from '@mui/icons-material/Face';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Skeleton from '@mui/material/Skeleton';
import { useGameState, usePlayer, useVote } from 'src/hooks';

const playerColors = [
  '#FF5733',
  '#33FF57',
  '#3357FF',
  '#FF33F1',
  '#57FF33',
  '#FF5733',
  '#33D4FF',
  '#FFD433',
  '#FF3380',
  '#8333FF',
];

function getPlayerColor(index: number) {
  return playerColors[index % playerColors.length];
}

export default function Players() {
  const { gameState } = useGameState();
  const { players, playerId } = usePlayer();
  const { votes } = useVote();

  return (
    <List component={Card} sx={{ marginBottom: 2 }}>
      {Object.entries(players).map(([id, player], index) => {
        const iconColor = player.active ? getPlayerColor(index) : 'disabled';
        const textProps =
          playerId === id ? { sx: { fontWeight: 'bold' } } : undefined;

        return (
          <ListItem dense key={id}>
            <ListItemIcon>
              <Badge
                badgeContent=" "
                color="primary"
                invisible={gameState.hostId !== id}
                variant="dot"
              >
                <FaceIcon style={{ color: iconColor }} />
              </Badge>
            </ListItemIcon>

            <ListItemText
              primary={player.nickname || <Skeleton />}
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
