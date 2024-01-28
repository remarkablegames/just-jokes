import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { playBackgroundMusic } from 'src/sounds';

export default function Mute() {
  const [isPlaying, setIsPlaying] = useState(true);

  function handleClick() {
    playBackgroundMusic(!isPlaying);
    setIsPlaying(!isPlaying);
  }

  return (
    <IconButton color="inherit" onClick={handleClick}>
      {isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
    </IconButton>
  );
}
