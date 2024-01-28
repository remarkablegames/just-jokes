import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { backgroundMusic } from 'src/sounds';

export default function Mute() {
  const [isMuted, setIsMuted] = useState(false);

  function handleClick() {
    backgroundMusic.mute(!isMuted);
    setIsMuted(!isMuted);
  }

  return (
    <IconButton color="inherit" onClick={handleClick}>
      {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
    </IconButton>
  );
}
