import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { setLocalStorageHost } from 'src/helpers';
import { playSound } from 'src/sounds';
import { textStyle } from 'src/styles';

export default function Home() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography component="h1" paragraph variant="h2" sx={textStyle}>
        Just Jokes
      </Typography>

      <Typography paragraph variant="h5" sx={textStyle}>
        Play with your friends
      </Typography>

      <Typography sx={{ marginBottom: 3 }}>
        <Button
          component={Link}
          onClick={() => {
            setLocalStorageHost(true);
            playSound.confirmation();
          }}
          size="large"
          to="/room"
          variant="contained"
        >
          Create Room
        </Button>
      </Typography>

      <Card
        sx={{
          backgroundColor: '#fff475',
          boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
          fontFamily: '"Permanent Marker", cursive',
          transform: 'rotate(2deg)',
          margin: '0 auto',
          maxWidth: 350,
          padding: '1em',
        }}
      >
        <CardHeader
          sx={{ paddingBottom: 0, fontFamily: '"Permanent Marker", cursive' }}
          title="How to play"
        />

        <CardContent>
          <Typography component="ol" sx={{ textAlign: 'left' }}>
            <Typography component="li">
              Click{' '}
              <Box component="strong" sx={{ textTransform: 'uppercase' }}>
                Create Room
              </Box>
            </Typography>
            <Typography component="li">
              Select the settings and start the game
            </Typography>
            <Typography component="li">
              Connect with your friends using audio/video chat
            </Typography>
            <Typography component="li">Share the room URL</Typography>
            <Typography component="li">Have fun! 🎉</Typography>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
